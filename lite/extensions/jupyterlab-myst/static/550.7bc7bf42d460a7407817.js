"use strict";(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[550,53],{7493:(r,e,t)=>{var n;t.d(e,{F:()=>n}),function(r){r.string="string",r.number="number",r.boolean="boolean",r.parsed="parsed"}(n||(n={}))},48550:(r,e,t)=>{t.r(e),t.d(e,{gridDirective:()=>a});var n=t(7493);const a={name:"grid",arg:{type:n.F.string},body:{type:n.F.parsed,required:!0},run:r=>[{type:"grid",columns:s(r.arg),children:r.body}]};function s(r){const e=(null!=r?r:"1 2 2 3").split(/\s/).map((r=>Number(r.trim()))).filter((r=>!Number.isNaN(r))).map((r=>Math.min(Math.max(Math.floor(r),1),12)));return 0===e.length||e.length>4?[1,2,2,3]:e}}}]);