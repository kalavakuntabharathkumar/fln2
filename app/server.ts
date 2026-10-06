import express from 'express';import {categorize,CATEGORIES} from './categorize.js';import {judge} from './judge.js';
const app=express();app.use(express.json());const runs:any[]=[];
app.get('/api/health',(_,r)=>r.json({status:'ok'}));app.get('/api/categories',(_,r)=>r.json({categories:CATEGORIES}));app.get('/api/runs',(_,r)=>r.json(runs));
app.post('/api/runs',async(req,res)=>{const {id,model,prompt='',expected,actual}=req.body;if(!id||!model||expected===undefined||actual===undefined)return res.status(400).json({error:'invalid payload'});const j=await judge(expected,actual);const out={id,model,prompt,expected,actual,category:categorize(actual),...j};runs.push(out);res.json(out)});app.listen(3000,()=>console.log('Failure-Lens on :3000'));
