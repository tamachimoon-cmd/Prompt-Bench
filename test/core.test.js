import test from 'node:test';
import assert from 'node:assert/strict';
import { createExperiment, addPromptVersion, scoreResponse, compareResponses, validateImport, exportWorkspace } from '../src/core.js';
test('cria experimento com versão inicial',()=>{const e=createExperiment({title:'Teste',prompt:'Resuma isto'});assert.equal(e.title,'Teste');assert.equal(e.versions.length,1);assert.equal(e.versions[0].label,'v1')});
test('exige título e prompt',()=>{assert.throws(()=>createExperiment({title:'',prompt:'x'}));assert.throws(()=>createExperiment({title:'x',prompt:''}))});
test('adiciona versão preservando histórico',()=>{const e=createExperiment({title:'T',prompt:'v1'});const n=addPromptVersion(e,'v2');assert.equal(e.versions.length,1);assert.equal(n.versions.length,2);assert.equal(n.versions[1].label,'v2')});
test('calcula score ponderado em escala 0-100',()=>{const criteria=[{id:'a',weight:1},{id:'b',weight:3}];assert.equal(scoreResponse(criteria,{a:5,b:3}),70)});
test('limita notas ao intervalo de zero a cinco',()=>{assert.equal(scoreResponse([{id:'a',weight:1}],{a:9}),100)});
test('compara respostas e identifica vencedor',()=>{const e=createExperiment({title:'T',prompt:'P'});e.scores.A={clarity:5,accuracy:5,adherence:5};e.scores.B={clarity:3,accuracy:3,adherence:3};assert.deepEqual(compareResponses(e),{A:100,B:60,winner:'A'})});
test('exporta e valida workspace',()=>{const e=createExperiment({title:'T',prompt:'P'});const parsed=JSON.parse(exportWorkspace([e]));assert.equal(parsed.version,1);assert.equal(validateImport(parsed).experiments.length,1)});
test('rejeita importação incompleta',()=>{assert.throws(()=>validateImport({experiments:[{id:'1'}]}),/incompleto/)})
