"use strict";(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[53],{48550:(r,e,t)=>{t.r(e),t.d(e,{gridDirective:()=>n});var a=t(7493);const n={name:"grid",arg:{type:a.F.string},body:{type:a.F.parsed,required:!0},run:r=>[{type:"grid",columns:i(r.arg),children:r.body}]};function i(r){const e=(null!=r?r:"1 2 2 3").split(/\s/).map((r=>Number(r.trim()))).filter((r=>!Number.isNaN(r))).map((r=>Math.min(Math.max(Math.floor(r),1),12)));return 0===e.length||e.length>4?[1,2,2,3]:e}}}]);