"use strict";(self["webpackChunkvue_mmplayer"]=self["webpackChunkvue_mmplayer"]||[]).push([[821],{3803:function(t,s,i){i.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[s("div",{staticClass:"mm-loading-content"},[s("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[s("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},l=[],n={name:"MmLoading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String,default:""}}},a=n,o=i(1001),r=(0,o.Z)(a,e,l,!1,null,null,null),c=r.exports},460:function(t,s,i){i.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mm-no-result"},[s("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},l=[],n={name:"MmNoResult",props:{title:{type:String,default:""}}},a=n,o=i(1001),r=(0,o.Z)(a,e,l,!1,null,null,null),c=r.exports},9956:function(t,s,i){i.d(s,{Z:function(){return v}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"music-list flex-col"},[t.list.length>0?[s("div",{staticClass:"list-item list-header"},[s("span",{staticClass:"list-name"},[t._v("歌曲")]),s("span",{staticClass:"list-artist"},[t._v("歌手")]),t.isDuration?s("span",{staticClass:"list-time"},[t._v("时长")]):s("span",{staticClass:"list-album"},[t._v("专辑")])]),s("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(s){return t.listScroll(s)}}},[t._l(t.list,(function(i,e){return s("div",{key:i.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===i.id},on:{dblclick:function(s){return t.selectItem(i,e,s)}}},[s("span",{staticClass:"list-num",domProps:{textContent:t._s(e+1)}}),s("div",{staticClass:"list-name"},[s("span",[t._v(t._s(i.name))]),s("div",{staticClass:"list-menu"},[s("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(i),size:40},on:{click:function(s){return s.stopPropagation(),t.selectItem(i,e)}}})],1)]),s("span",{staticClass:"list-artist"},[t._v(t._s(i.singer))]),t.isDuration?s("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(i.duration%3600))+" "),s("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(s){return s.stopPropagation(),t.deleteItem(e)}}})],1):s("span",{staticClass:"list-album"},[t._v(t._s(i.album))])])})),t._t("listBtn")],2)]:s("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},l=[],n=i(629),a=i(4722),o=i(460);const r="album",c="duration",u="pullup",m=100;var d={name:"MusicList",components:{MmNoResult:o.Z},filters:{format:a.WU},props:{list:{type:Array,default:()=>[]},listType:{type:String,default:r}},data(){return{lockUp:!0}},computed:{isDuration(){return this.listType===c},...(0,n.Se)(["playing","currentMusic"])},watch:{list(t,s){this.listType===u&&(t.length!==s.length||t[t.length-1].id!==s[s.length-1].id)&&(this.lockUp=!1)}},activated(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:{listScroll(t){const s=t.target.scrollTop;if(this.scrollTop=s,this.listType!==u||this.lockUp)return;const{scrollHeight:i,offsetHeight:e}=t.target;s+e>=i-m&&(this.lockUp=!0,this.$emit("pullUp"))},scrollTo(){this.$refs.listContent.scrollTop=0},selectItem(t,s,i){i&&/list-menu-icon-del/.test(i.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,s))},getPlayIconType({id:t}){const{playing:s,currentMusic:{id:i}}=this;return s&&i===t?"pause-mini":"play-mini"},deleteItem(t){this.$emit("del",t)},...(0,n.OI)({setPlaying:"SET_PLAYING"})}},p=d,h=i(1001),f=(0,h.Z)(p,e,l,!1,null,"49b9d2f4",null),v=f.exports},6821:function(t,s,i){i.r(s),i.d(s,{default:function(){return h}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"details"},[s("mm-loading",{model:{value:t.mmLoadShow,callback:function(s){t.mmLoadShow=s},expression:"mmLoadShow"}}),s("music-list",{attrs:{list:t.list},on:{select:t.selectItem}})],1)},l=[],n=i(629),a=i(2262),o=i(3803),r=i(9956),c=i(9335),u={name:"Detail",components:{MmLoading:o.Z,MusicList:r.Z},mixins:[c.q],data(){return{list:[]}},created(){(0,a._V)(this.$route.params.id).then((t=>{document.title=`${t.name} - mmPlayer在线音乐播放器`,this.list=t.tracks,this._hideLoad()})).catch((()=>{this._hideLoad()}))},methods:{selectItem(t,s){this.selectPlay({list:this.list,index:s})},...(0,n.nv)(["selectPlay"])}},m=u,d=i(1001),p=(0,d.Z)(m,e,l,!1,null,"96aaaebe",null),h=p.exports},9335:function(t,s,i){i.d(s,{q:function(){return l}});var e=i(629);(0,e.Se)(["playing","currentMusic"]),(0,e.OI)({setPlaying:"SET_PLAYING"}),(0,e.nv)(["selectPlay"]);const l={data(){return{mmLoadShow:!0}},methods:{_hideLoad(){let t;clearTimeout(t),t=setTimeout((()=>{this.mmLoadShow=!1}),200)}}}}}]);
//# sourceMappingURL=821.90e5dbb7.js.map