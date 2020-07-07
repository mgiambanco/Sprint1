import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    user: any = { uid: 1234 };
    company: any = { uid: 1111 };
    public openTask = new Subject<any>();

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFirestore
    ) { }

    async createSprint(data: any) {
        return this.db.collection('sprints').add({
            ...data,
            company: this.company.uid
        });
    }

    getUsers(company) {
        return this.db.collection<any>('users', ref => ref.where('company', '==', company)).valueChanges({ idField: 'id' });
    }

    getUserbyID(user_id) {
        return this.db.collection('users').doc(user_id).valueChanges();
    }

    getSprint(company) {
        return this.db.collection<any>('sprints', ref => ref.where('company', '==', company)).valueChanges({ idField: 'id' });
    }

    createListItem(value, sprint_id) {
        return this.db.collection('sprints').doc(sprint_id).collection('lists').add({ title: value })

    }

    createTask(sprint_id, list_id, payload) {
        return this.db.collection('sprints').doc(sprint_id).collection('lists').doc(list_id).collection('tasks').add(payload)
    }

    deleteTask(sprint_id, list_id, task_id) {
        return this.db.collection('sprints').doc(sprint_id).collection('lists').doc(list_id).collection('tasks').doc(task_id).delete();
    }

    insertTaskChat(sprint_id, list_id, task_id, payload) {
        return this.db.collection('sprints').doc(sprint_id).collection('lists').doc(list_id).collection('tasks').doc(task_id).collection("chat").add(payload);

    }

    getTasks(sprint_id, list_id) {
        return this.db.collection('sprints').doc(sprint_id).collection('lists').doc(list_id).collection('tasks').valueChanges({ idField: 'id' });
    }

    getTasksbyUserID(sprint_id, list_id, user_id) {
        return this.db.collection('sprints').doc(sprint_id).collection('lists').doc(list_id).collection('tasks', ref => ref.where('user_id', '==', user_id)).valueChanges({ idField: 'id' });
    }

    getChat(sprint_id, list_id, task_id) {
        return this.db.collection('sprints').doc(sprint_id).collection('lists').doc(list_id).collection('tasks').doc(task_id).collection('chat').valueChanges({ idField: 'id' });
    }

    async createBoard(data: any) {
        return this.db.collection('boards').add({
            ...data,
            uid: this.user.uid,
            tasks: [{ description: 'Hello!', label: 'yellow' }]
        });
    }
    getList(sprint_id) {
        return this.db.collection('sprints').doc(sprint_id).collection('lists').valueChanges({ idField: 'id' });
    }

    getUserBoards() {
        return this.db.collection<any>('boards', ref => ref.where('uid', '==', this.user.uid)).valueChanges({ idField: 'id' });
    }

    sortBoards(boards: any[]) {
        const db = firebase.firestore();
        const batch = db.batch();
        const refs = boards.map(b => db.collection('boards').doc(b.id));
        refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
        batch.commit();
    }

    deleteBoard(boardId: string) {
        return this.db
            .collection('boards')
            .doc(boardId)
            .delete();
    }

    updateTask(sprint_id, list_id, task_id, task) {
        return this.db.collection('sprints').doc(sprint_id).collection('lists').doc(list_id).collection('tasks').doc(task_id).update( task );
    }

    updateList(sprint_id, list_id, payload) {
        return this.db.collection('sprints').doc(sprint_id).collection('lists').doc(list_id).update( payload );
    }

    removeTask(boardId: string, task: any) {
        return this.db
            .collection('boards')
            .doc(boardId)
            .update({
                tasks: firebase.firestore.FieldValue.arrayRemove(task)
            });
    }

    getFileUploads(sprint_id) {
        return this.db.collection<any>('files', ref => ref.where('sprint_id', '==', sprint_id)).valueChanges({ idField: 'sprint_id' });
    }
}
