let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../../ToDoNodeApp');
//Our parent block
describe('Todo', () => {
 describe('/api/GET Todos', () => {
     it('it should GET all the Todos', (done) => {
     chai.request(server)
       .get('/api/get')
       .end((err, res) => {
             (res).should.have.status(200);
             (res.body).should.be.a('object');
            //  (res.body.Todos.length).should.be.eql(1);
             done();
          });
       });
  });
describe('/create todo', () => {
     it('it should create and return a confirmation message', (done) => {
     chai.request(server)
         .post('/api/create')
         .send({
            'name':'item 5',
	         'updatedName':'item 5'
          })
         .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               done();
            });
         });
     });
     
describe('/update todo', () => {
      it('it should update and return a confirmation message', (done) => {
      chai.request(server)
          .put('/api/update/123')
          .send({
             'name':'item 5',
             'updatedName':'item 5'
           })
          .end((err, res) => {
                (res).should.have.status(200);
                (res.body).should.be.a('object');
                done();
             });
          });
      });

describe('/delete todo', () => {
   it('it should delete and return a confirmation message', (done) => {
   chai.request(server)
       .delete('/api/remove/123')
       .end((err, res) => {
             (res).should.have.status(200);
             (res.body).should.be.a('object');
             done();
          });
       });
   });

describe('/create user', () => {
   it('it should create user and return a confirmation message', (done) => {
   chai.request(server)
       .post('/api/register')
       .send({
          'name':'item 5',
          'email':'testuser@email.com',
          'password':'test@123'
        })
       .end((err, res) => {
             (res.body).should.be.a('object');
             done();
          });
       });
   });

   describe('/authenticate user', () => {
      it('it should authenticate user and return a confirmation message', (done) => {
      chai.request(server)
          .post('/api/authenticate')
          .send({
             'name':'item',
             'email':'testuser@email.com',
             'password':'test@123'
           })
          .end((err, res) => {
                (res.body).should.be.a('object');
                done();
             });
          });
      });

});