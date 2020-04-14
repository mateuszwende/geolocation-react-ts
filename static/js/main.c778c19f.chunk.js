(this["webpackJsonpgeolocation-react-ts"]=this["webpackJsonpgeolocation-react-ts"]||[]).push([[0],{62:function(e,t,a){e.exports=a(76)},67:function(e,t,a){},68:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),i=a.n(o),c=a(13),l=a.n(c),u=(a(67),a(44));a(68);!function(e){e.ADD_LOCALIZATION="ADD_LOCALIZATION",e.CLEAR_DATA="CLEAR_DATA",e.SET_TIME_INTERVAL="SET_TIME_INTERVAL",e.SET_IS_TRACKING="SET_IS_TRACKING",e.SET_IS_AVAILABLE="SET_IS_AVAILABLE",e.SET_ERROR="SET_ERROR"}(n||(n={})),function(e){e.PERMISSION_DENIED="We are unable to get your current geolocation. If an error caused it, try allowing the browser to track your location.",e.POSITION_UNAVAILABLE="We are unable to get your current geolocation.If an error caused it, try turning on GPS in your device and getting closer to a window to try again",e.BROWSER_NO_SUPPORT="Your browser does not support Geolocation. Please update the browser or use a different one.",e.DEFAULT="An unexpected error occuried"}(r||(r={}));var s=a(17),d=a(18),m=a(20),p=a(22),E=(a(69),a(38)),g=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.longitude,a=e.latitude,n=e.color,r=e.size;return i.a.createElement(E.a,{longitude:t,latitude:a},i.a.createElement("svg",{height:r,viewBox:"0 0 24 24",style:{cursor:"pointer",fill:n,stroke:"none",transform:"translate(".concat(-r/2,"px,").concat(-r,"px)")}},i.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})))}}]),a}(o.PureComponent),O=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return this.props.data.map((function(e){return i.a.createElement(g,{latitude:e.latitude,longitude:e.longitude,color:0===e.id?"red":"blue",size:25,key:e.id})}))}}]),a}(o.PureComponent),b=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={viewport:{latitude:e.props.initialLatitude,longitude:e.props.initialLongitude,zoom:e.props.zoom}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.width,n=t.height;return i.a.createElement(E.b,Object.assign({},this.state.viewport,{onViewportChange:function(t){return e.setState({viewport:t})},mapboxApiAccessToken:"pk.eyJ1IjoibGV0b3V0IiwiYSI6ImNrOGxiamdxejAwbG4zZm83bHZ1aHVhNnkifQ.Pvz5iOHGNQt8uo9_ilavtA",width:a,height:n}),i.a.createElement(O,{data:this.props.data}))}}]),a}(o.PureComponent),f=a(55),v=a(27),h={data:[],timeInterval:5e3,isTracking:!1,error:void 0},I=function(e){return e.length?e[e.length-1].id+1:0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ADD_LOCALIZATION:return Object(v.a)({},e,{data:[].concat(Object(f.a)(e.data),[Object(v.a)({},t.payload,{id:I(e.data)})]),error:void 0,isTracking:!0});case n.CLEAR_DATA:return Object(v.a)({},e,{data:[]});case n.SET_TIME_INTERVAL:return Object(v.a)({},e,{timeInterval:t.payload});case n.SET_IS_TRACKING:return Object(v.a)({},e,{isTracking:t.payload});case n.SET_ERROR:return Object(v.a)({},e,{error:t.payload,isTracking:!1});default:return e}},A=a(100),y=a(56),S=a(101),_=a(102),j=a(106),R=a(103),w=function(e){return function(t){var a=Object.assign({},t);return"geolocation"in navigator?i.a.createElement(e,a):i.a.createElement("p",null,r.BROWSER_NO_SUPPORT)}},N=a(43),L=function(e){return function(t){var a=Object.assign({},t);return N.isMobile||N.isTablet?i.a.createElement(e,a):i.a.createElement("p",null,"App is only available on mobile and tablets.")}},k=a(104),C=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.latitude,n=e.longitude,r=e.measurementTime;return i.a.createElement("div",{className:"vertical-spacing text-align-left"},i.a.createElement(y.a,{variant:"body1",component:"p"},t),i.a.createElement(y.a,{variant:"body2",component:"p"},i.a.createElement("b",null,"Latitude:")," ",a),i.a.createElement(y.a,{variant:"body2",component:"p"},i.a.createElement("b",null,"Longitude"),": ",n),i.a.createElement(y.a,{variant:"body2",component:"p"},i.a.createElement("b",null,"Measurement time")," ",Object(k.a)(r,"HH:mm:ss dd-MM-yyyy")))}}]),a}(o.PureComponent),D=a(105),P=a(97),M=a(98),V=a(99),G=function(e){var t=e.onClose,a=e.title,n=e.message,r=e.open;return i.a.createElement(D.a,{open:r,onClose:t},i.a.createElement(P.a,null,a),i.a.createElement(M.a,null,i.a.createElement(y.a,{variant:"body2",component:"p"},n)),i.a.createElement(V.a,null))},x=L(w((function(){var e,t,a=Object(o.useReducer)(T,h),c=Object(u.a)(a,2),l=c[0],s=c[1],d=Object(o.useState)(!1),m=Object(u.a)(d,2),p=m[0],E=m[1];function g(){navigator.geolocation.getCurrentPosition(O,f,{enableHighAccuracy:!0})}function O(e){s({type:n.ADD_LOCALIZATION,payload:{id:0,latitude:e.coords.latitude,longitude:e.coords.longitude,measurementTime:new Date(e.timestamp)}})}function f(e){s({type:n.SET_ERROR,payload:{measurementTime:new Date,message:v(e)}})}function v(e){return e.code===e.PERMISSION_DENIED?r.PERMISSION_DENIED:e.code===e.POSITION_UNAVAILABLE?r.POSITION_UNAVAILABLE:r.DEFAULT}return function(e,t){var a=Object(o.useRef)();Object(o.useEffect)((function(){a.current=e}),[e]),Object(o.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}(g,l.isTracking?l.timeInterval:null),Object(o.useEffect)((function(){g()}),[]),i.a.createElement(A.a,null,i.a.createElement(y.a,{align:"center",variant:"h5",className:"vertical-spacing"},"TrackMeNow"),l.data.length?i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{data:(t=l.data,t.length>1?[t[0],t[t.length-1]]:1===t.length?[t[0]]:t),initialLatitude:l.data[0].latitude,initialLongitude:l.data[0].longitude,zoom:16,width:"100%",height:"500px"}),i.a.createElement(S.a,{row:!0,className:"vertical-spacing"},i.a.createElement(_.a,{control:i.a.createElement(j.a,{checked:l.isTracking,onChange:function(){s({type:n.SET_IS_TRACKING,payload:!l.isTracking})},name:"Geolocalization Availability",inputProps:{"aria-label":"primary switch"}}),label:"On/Off track geolocation"})),i.a.createElement(C,{title:"Starting position",latitude:l.data[0].latitude,longitude:l.data[0].longitude,measurementTime:l.data[0].measurementTime}),i.a.createElement(C,{title:"Current position",latitude:l.data[l.data.length-1].latitude,longitude:l.data[l.data.length-1].longitude,measurementTime:l.data[l.data.length-1].measurementTime}),i.a.createElement(R.a,{variant:"outlined",color:"primary",size:"small",onClick:function(){return E(!p)}},p?i.a.createElement(i.a.Fragment,null,"Hide raw data"):i.a.createElement(i.a.Fragment,null,"Show raw data")),i.a.createElement("div",{className:"vertical-spacing"},p?JSON.stringify(l.data):null)):null,i.a.createElement(G,{onClose:function(){return s({type:n.SET_ERROR,payload:void 0})},open:!!l.error,title:"Error occuried.",message:null===(e=l.error)||void 0===e?void 0:e.message}))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.c778c19f.chunk.js.map