const chai = require('chai');
const server = require('../index');
const chaiHttp = require('chai-http');

chai.should();

chai.use(chaiHttp);

describe('tesing login routes',()=>{
    it('checking admin login',(done)=>{
        chai.request(server)
        .post('/admin/home')
        .send({name: "jordan", password: "maps"})
        .end((err, response)=>{
            response.should.have.status(200);
            done();
        })
    })

    it('checking membertrainer login',(done)=>{
        chai.request(server)
        .post('/member/home')
        .send({name: "member", password: "member"})
        .end((err, response)=>{
            response.should.have.status(200);
            done();
        })
    })

    it('checking trainer login',(done)=>{
        chai.request(server)
        .post('/trainer/userlist')
        .send({name: "trainer", password: "trainer"})
        .end((err, response)=>{
            response.should.have.status(200);
            done();
        })
    })

})

