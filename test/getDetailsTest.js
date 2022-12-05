const chai = require('chai');
const server = require('../index');
const chaiHttp = require('chai-http');

chai.should();

chai.use(chaiHttp);

describe('testing get details routes',()=>{
    it('checking get admin details',(done)=>{
        chai.request(server)
        .get('/admin/getAdminList')
        .end((err, response)=>{
            response.should.have.status(200);
            response.body.should.be.an('array');
            for(let i = 0;i<response.body.length;i++){
                let keys = Object.keys(response.body[i]);
                keys.forEach((key,index)=>{
                    response.body[i][key].should.not.be.an('undefined');
                })
            }
            done();
        })
    })

    it('checking get member details',(done)=>{
        chai.request(server)
        .get('/admin/getUserList')
        .end((err, response)=>{
            response.should.have.status(200);
            response.body.should.be.an('array');
            for(let i = 0;i<response.body.length;i++){
                let keys = Object.keys(response.body[i]);
                keys.forEach((key,index)=>{
                    response.body[i][key].should.not.be.an('undefined');
                })
            }
            done();
        })
    })

    it('checking get trainer details',(done)=>{
        chai.request(server)
        .get('/admin/getTrainerList')
        .end((err, response)=>{
            response.should.have.status(200);
            response.body.should.be.an('array');
            for(let i = 0;i<response.body.length;i++){
                let keys = Object.keys(response.body[i]);
                keys.forEach((key,index)=>{
                    response.body[i][key].should.not.be.an('undefined');
                })
            }
            done();
        })
    })

    it('checking get package details',(done)=>{
        chai.request(server)
        .get('/admin/getPackageList')
        .end((err, response)=>{
            response.should.have.status(200);
            response.body.should.be.an('array');
            for(let i = 0;i<response.body.length;i++){
                let keys = Object.keys(response.body[i]);
                keys.forEach((key,index)=>{
                    response.body[i][key].should.not.be.an('undefined');
                })
            }
            done();
        })
    })

})

