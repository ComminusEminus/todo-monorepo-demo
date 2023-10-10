const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


const expressMiddleWare = router => {
    router.use(bodyParser.urlencoded({ extended: false }));
    router.use(bodyParser.json());
    router.use(cookieParser())
    router.post('/listItem/update', (req, res) => {
            const response = {
                message: 'ok',
                error: ''
            }
            res.json(response);
            
        });
    router.get('/list/getById', (req, res) => {
        const listItemsResponse = [
            {
                _id: '324234234234',
                title: 'Title1',
                description: 'Title 1 description',
                complete: 'INCOMPLETE',
            },
            {
                _id: '324234234',
                title: 'Title2',
                description: 'Title 2 description',
                complete: 'INCOMPLETE',
            }
        ]
        const listResponse = {
            _id: '4353453453',
            title: 'List Title',
            listItems: listItemsResponse,
        }
        
        const getListByIdResponse = {
            list: listResponse,
            message: 'ok',
            error: ''
        }
            
            res.json(getListByIdResponse)
        });

    
    };

    module.exports = expressMiddleWare;


