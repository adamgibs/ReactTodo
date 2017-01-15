import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]); //one mock store per test

describe("Actions", () =>{
  it('should generate searchText action', () =>{
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc123',
        text: 'Yo!',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

it('should create todo and dispatch ADD_TODO', (done) => {  //done lets Mocha know that this is going to be an asych test
  const store = createMockStore({});
  const todoText = 'Todo item';
  store.dispatch(actions.startAddTodo(todoText)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toInclude({
      type: 'ADD_TODO'
    });

    expect(actions[0].todo).toInclude({
      text: todoText
    });
    done();
  }).catch(done);
});

  it('should generate addTodos action object', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    var action = {
      type: 'ADD_TODOS',
      todos: todos
    }
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate updateTodo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123abcd',
      updates: {completed: false}
    };
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  describe('Tests with Firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => { //creates a dummy todo before each test. Needed for async tests
      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: "here's something",
          completed: false,
          createdAt: 123412
        })
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

      }, done());
    });

      it('should populate todos and dispatch ADD_TODOS', (done) => {
        const store = createMockStore({});
        const action = actions.startAddTodos();

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0].todos).toExist();
          expect(mockActions[0].type).toEqual({type: 'ADD_TODOS'});
          expect(mockActions[0].todos.length).toEqual(1);
          expect(mockActions[0].todos.text).toEqual("here's something");
      }, done());
  });
});
});
