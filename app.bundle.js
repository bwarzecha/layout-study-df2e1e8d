(()=>{var Sn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Gh=1,Nl=2,Nn=3,$n=0,Lt=1,Pi=2;var fi=100;var Ro=204,Co=205;var Vh=0,Xu=1,ju=2,Jn=0,Yu=1,qu=2,Zu=3,Ul=4,Ju=5,Ku=6;var Wh=300,rr=301,sr=302,Po=303,Lo=304,Ma=306,Gr=1e3,Un=1001,Io=1002,At=1003,hc=1004;var Va=1005;var nn=1006,$u=1007;var Gs=1008;var _i=1009;var Ol=1012,Xh=1013,Yn=1014,qn=1015,bi=1016,jh=1017,Yh=1018,yi=1020;var fn=1023;var xi=1026,ar=1027;var qh=1029;var Zh=1031,Jh=1033,Wa=33776,Xa=33777,ja=33778,Ya=33779,uc=35840,dc=35841,pc=35842,mc=35843,Kh=36196,fc=37492,gc=37496,vc=37808,_c=37809,yc=37810,xc=37811,Mc=37812,bc=37813,Sc=37814,Ec=37815,Tc=37816,wc=37817,Ac=37818,Rc=37819,Cc=37820,Pc=37821,qa=36492,Lc=36494,Ic=36495;var Dc=36284,Nc=36285,Uc=36286;var Vs=2300,Ws=2301,Za=2302,Oc=2400,Bc=2401,Fc=2402;var $h=3e3,Mi=3001;var gn="",Ze="srgb",On="srgb-linear",Bl="display-p3",ba="display-p3-linear",Xs="linear",Qe="srgb",js="rec709",Ys="p3";var Ni=7680;var Do=35044;var zc="300 es",No=1035,or=2e3,qs=2001,yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=1234567,tr=Math.PI/180,lr=180/Math.PI;function _n(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Mt[255&r]+Mt[r>>8&255]+Mt[r>>16&255]+Mt[r>>24&255]+"-"+Mt[255&e]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[63&t|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[255&n]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function Uo(r,e){return(r%e+e)%e}function Or(r,e,t){return(1-t)*r+t*e}function Oo(r){return(r&r-1)==0&&r!==0}function Zs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var ti={DEG2RAD:tr,RAD2DEG:lr,generateUUID:_n,clamp:ht,euclideanModulo:Uo,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Or,damp:function(r,e,t,n){return Or(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Uo(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Hc=r);let e=Hc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*tr},radToDeg:function(r){return r*lr},isPowerOfTwo:Oo,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:Zs,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Xe,denormalize:vn},se=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],v=i[0],m=i[3],y=i[6],g=i[1],_=i[4],E=i[7],A=i[2],T=i[5],w=i[8];return s[0]=a*v+o*g+l*A,s[3]=a*m+o*_+l*T,s[6]=a*y+o*E+l*w,s[1]=c*v+h*g+d*A,s[4]=c*m+h*_+d*T,s[7]=c*y+h*E+d*w,s[2]=u*v+p*g+f*A,s[5]=u*m+p*_+f*T,s[8]=u*y+p*E+f*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,f=t*d+n*u+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=u*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new De;function Qh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qu(){let r=Vr("canvas");return r.style.display="block",r}var kc={};function Br(r){r in kc||(kc[r]=!0,console.warn(r))}var Gc=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vc=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[On]:{transfer:Xs,primaries:js,toReference:r=>r,fromReference:r=>r},[Ze]:{transfer:Qe,primaries:js,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ba]:{transfer:Xs,primaries:Ys,toReference:r=>r.applyMatrix3(Vc),fromReference:r=>r.applyMatrix3(Gc)},[Bl]:{transfer:Qe,primaries:Ys,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Vc),fromReference:r=>r.applyMatrix3(Gc).convertLinearToSRGB()}},ed=new Set([On,ba]),je={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ed.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=cs[e].toReference;return(0,cs[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return cs[r].primaries},getTransfer:function(r){return r===gn?Xs:cs[r].transfer}};function nr(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ka(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Ui,Js=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=Vr("canvas")),Ui.width=e.width,Ui.height=e.height;let n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*nr(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*nr(t[n]/255)):t[n]=nr(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},td=0,Ks=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=_n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push($a(i[a].image)):s.push($a(i[a]))}else s=$a(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function $a(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Js.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nd=0,Ot=class r extends yn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=_n(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Mi?Ze:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?Mi:$h}set encoding(e){Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mi?Ze:gn}};Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=Wh,Ot.DEFAULT_ANISOTROPY=1;var We=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],v=l[2],m=l[6],y=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,E=(p+1)/2,A=(y+1)/2,T=(h+u)/4,w=(d+v)/4,F=(f+m)/4;return _>E&&_>A?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=w/n):E>A?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=T/i,s=F/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=F/s),this.set(n,i,s,t),this}let g=Math.sqrt((m-f)*(m-f)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(g)<.001&&(g=1),this.x=(m-f)/g,this.y=(d-v)/g,this.z=(u-h)/g,this.w=Math.acos((c+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bo=class extends yn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mi?Ze:gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ks(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$s=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fo=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(d!==v||l!==u||c!==p||h!==f){let m=1-o,y=l*u+c*p+h*f+d*v,g=y>=0?1:-1,_=1-y*y;if(_>Number.EPSILON){let A=Math.sqrt(_),T=Math.atan2(A,y*g);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}let E=o*g;if(l=l*m+u*E,c=c*m+p*E,h=h*m+f*E,d=d*m+v*E,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-o*p,e[t+2]=c*f+h*p+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qa=new b,Wc=new Bt,xn=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),us.subVectors(this.max,Ar),Oi.subVectors(e.a,Ar),Bi.subVectors(e.b,Ar),Fi.subVectors(e.c,Ar),Gn.subVectors(Bi,Oi),Vn.subVectors(Fi,Bi),hi.subVectors(Oi,Fi);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-hi.z,hi.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,hi.z,0,-hi.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-hi.y,hi.x,0];return!!eo(t,Oi,Bi,Fi,us)&&(t=[1,0,0,0,1,0,0,0,1],!!eo(t,Oi,Bi,Fi,us)&&(ds.crossVectors(Gn,Vn),t=[ds.x,ds.y,ds.z],eo(t,Oi,Bi,Fi,us)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Qt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Cn=[new b,new b,new b,new b,new b,new b,new b,new b],Qt=new b,hs=new xn,Oi=new b,Bi=new b,Fi=new b,Gn=new b,Vn=new b,hi=new b,Ar=new b,us=new b,ds=new b,ui=new b;function eo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ui.fromArray(r,s);let o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var id=new xn,Rr=new b,to=new b,Mn=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):id.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(to)),this.expandByPoint(Rr.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new b,no=new b,ps=new b,Wn=new b,io=new b,ms=new b,ro=new b,Bn=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){no.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(no);let s=.5*e.distanceTo(t),a=-this.direction.dot(ps),o=Wn.dot(this.direction),l=-Wn.dot(ps),c=Wn.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*l-o,u=a*o-l,f=s*h,d>=0)if(u>=-f)if(u<=f){let v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(no).addScaledVector(ps,u),p}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,i,s){io.subVectors(t,e),ms.subVectors(n,e),ro.crossVectors(io,ms);let a,o=this.direction.dot(ro);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Wn.subVectors(this.origin,e);let l=a*this.direction.dot(ms.crossVectors(Wn,ms));if(l<0)return null;let c=a*this.direction.dot(io.cross(Wn));if(c<0||l+c>o)return null;let h=-a*Wn.dot(ro);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class r{constructor(e,t,n,i,s,a,o,l,c,h,d,u,p,f,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,p,f,v,m)}set(e,t,n,i,s,a,o,l,c,h,d,u,p,f,v,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=d,y[14]=u,y[3]=p,y[7]=f,y[11]=v,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/zi.setFromMatrixColumn(e,0).length(),s=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,v=c*d;t[0]=u+v*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,v=o*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-v*d}else if(e.order==="XZY"){let u=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rd,e,sd)}lookAt(e,t,n){let i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Xn.crossVectors(n,Nt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Xn.crossVectors(n,Nt)),Xn.normalize(),fs.crossVectors(Nt,Xn),i[0]=Xn.x,i[4]=fs.x,i[8]=Nt.x,i[1]=Xn.y,i[5]=fs.y,i[9]=Nt.y,i[2]=Xn.z,i[6]=fs.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],v=n[6],m=n[10],y=n[14],g=n[3],_=n[7],E=n[11],A=n[15],T=i[0],w=i[4],F=i[8],B=i[12],k=i[1],Y=i[5],I=i[9],Z=i[13],X=i[2],ie=i[6],he=i[10],re=i[14],Q=i[3],ne=i[7],q=i[11],z=i[15];return s[0]=a*T+o*k+l*X+c*Q,s[4]=a*w+o*Y+l*ie+c*ne,s[8]=a*F+o*I+l*he+c*q,s[12]=a*B+o*Z+l*re+c*z,s[1]=h*T+d*k+u*X+p*Q,s[5]=h*w+d*Y+u*ie+p*ne,s[9]=h*F+d*I+u*he+p*q,s[13]=h*B+d*Z+u*re+p*z,s[2]=f*T+v*k+m*X+y*Q,s[6]=f*w+v*Y+m*ie+y*ne,s[10]=f*F+v*I+m*he+y*q,s[14]=f*B+v*Z+m*re+y*z,s[3]=g*T+_*k+E*X+A*Q,s[7]=g*w+_*Y+E*ie+A*ne,s[11]=g*F+_*I+E*he+A*q,s[15]=g*B+_*Z+E*re+A*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*u+s*a*u-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],y=e[15],g=d*m*c-v*u*c+v*l*p-o*m*p-d*l*y+o*u*y,_=f*u*c-h*m*c-f*l*p+a*m*p+h*l*y-a*u*y,E=h*v*c-f*d*c+f*o*p-a*v*p-h*o*y+a*d*y,A=f*d*l-h*v*l-f*o*u+a*v*u+h*o*m-a*d*m,T=t*g+n*_+i*E+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return e[0]=g*w,e[1]=(v*u*s-d*m*s-v*i*p+n*m*p+d*i*y-n*u*y)*w,e[2]=(o*m*s-v*l*s+v*i*c-n*m*c-o*i*y+n*l*y)*w,e[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*p-n*l*p)*w,e[4]=_*w,e[5]=(h*m*s-f*u*s+f*i*p-t*m*p-h*i*y+t*u*y)*w,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*y-t*l*y)*w,e[7]=(a*u*s-h*l*s+h*i*c-t*u*c-a*i*p+t*l*p)*w,e[8]=E*w,e[9]=(f*d*s-h*v*s-f*n*p+t*v*p+h*n*y-t*d*y)*w,e[10]=(a*v*s-f*o*s+f*n*c-t*v*c-a*n*y+t*o*y)*w,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*w,e[12]=A*w,e[13]=(h*v*i-f*d*i+f*n*u-t*v*u-h*n*m+t*d*m)*w,e[14]=(f*o*i-a*v*i-f*n*l+t*v*l+a*n*m-t*o*m)*w,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,f=s*d,v=a*h,m=a*d,y=o*d,g=l*c,_=l*h,E=l*d,A=n.x,T=n.y,w=n.z;return i[0]=(1-(v+y))*A,i[1]=(p+E)*A,i[2]=(f-_)*A,i[3]=0,i[4]=(p-E)*T,i[5]=(1-(u+y))*T,i[6]=(m+g)*T,i[7]=0,i[8]=(f+_)*w,i[9]=(m-g)*w,i[10]=(1-(u+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=zi.set(i[0],i[1],i[2]).length(),a=zi.set(i[4],i[5],i[6]).length(),o=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);let l=1/s,c=1/a,h=1/o;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=c,en.elements[5]*=c,en.elements[6]*=c,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,f;if(o===or)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==qs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-s),u=(t+e)*c,p=(n+i)*h,f,v;if(o===or)f=(a+s)*d,v=-2*d;else{if(o!==qs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*d,v=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zi=new b,en=new Re,rd=new b(0,0,0),sd=new b(1,1,1),Xn=new b,fs=new b,Nt=new b,Xc=new Re,jc=new Bt,Qs=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qs.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},ad=0,Yc=new b,Hi=new Bt,Ln=new Re,gs=new b,Cr=new b,od=new b,ld=new Bt,qc=new b(1,0,0),Zc=new b(0,1,0),Jc=new b(0,0,1),cd={type:"added"},hd={type:"removed"},dt=class r extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new b,t=new Qs,n=new Bt,i=new b(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new De}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Zc,e)}rotateZ(e){return this.rotateOnAxis(Jc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Zc,e)}translateZ(e){return this.translateOnAxis(Jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Cr,gs,this.up):Ln.lookAt(gs,Cr,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,od),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};dt.DEFAULT_UP=new b(0,1,0),dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new b,In=new b,so=new b,Dn=new b,ki=new b,Gi=new b,Kc=new b,ao=new b,oo=new b,lo=new b,vs=!1,Zn=class r{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){tn.subVectors(i,t),In.subVectors(n,t),so.subVectors(e,t);let a=tn.dot(tn),o=tn.dot(In),l=tn.dot(so),c=In.dot(In),h=In.dot(so),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,f=(a*h-o*l)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn)!==null&&Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,n,i,s,a,o,l){return vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vs=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),In.subVectors(e,t),tn.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),.5*tn.cross(In).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vs=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;ki.subVectors(i,n),Gi.subVectors(s,n),ao.subVectors(e,n);let l=ki.dot(ao),c=Gi.dot(ao);if(l<=0&&c<=0)return t.copy(n);oo.subVectors(e,i);let h=ki.dot(oo),d=Gi.dot(oo);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ki,a);lo.subVectors(e,s);let p=ki.dot(lo),f=Gi.dot(lo);if(f>=0&&p<=f)return t.copy(s);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Gi,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return Kc.subVectors(s,i),o=(d-h)/(d-h+(p-f)),t.copy(i).addScaledVector(Kc,o);let y=1/(m+v+u);return a=v*y,o=u*y,t.copy(n).addScaledVector(ki,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function co(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Uo(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=co(a,s,e+1/3),this.g=co(a,s,e),this.b=co(a,s,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){let n=eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return je.fromWorkingColorSpace(bt.copy(this),e),65536*Math.round(ht(255*bt.r,0,255))+256*Math.round(ht(255*bt.g,0,255))+Math.round(ht(255*bt.b,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(bt.copy(this),t);let n=bt.r,i=bt.g,s=bt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Ze){je.fromWorkingColorSpace(bt.copy(this),e);let t=bt.r,n=bt.g,i=bt.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(_s);let n=Or(jn.h,_s.h,t),i=Or(jn.s,_s.s,t),s=Or(jn.l,_s.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bt=new be;be.NAMES=eu;var ud=0,Fn=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=1,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xt=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fm=dd();function dd(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var ct=new b,ys=new se,Ct=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Do,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}};var ea=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ta=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Se=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}};var pd=0,Wt=new Re,ho=new dt,Vi=new b,Ut=new xn,Pr=new xn,vt=new b,Je=class r extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?ta:ea)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Se(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new b,1/0);if(e){let n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ut.min,Pr.min),Ut.expandByPoint(vt),vt.addVectors(Ut.max,Pr.max),Ut.expandByPoint(vt)):(Ut.expandByPoint(Pr.min),Ut.expandByPoint(Pr.max))}Ut.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),vt.add(Vi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let k=0;k<o;k++)c[k]=new b,h[k]=new b;let d=new b,u=new b,p=new b,f=new se,v=new se,m=new se,y=new b,g=new b;function _(k,Y,I){d.fromArray(i,3*k),u.fromArray(i,3*Y),p.fromArray(i,3*I),f.fromArray(a,2*k),v.fromArray(a,2*Y),m.fromArray(a,2*I),u.sub(d),p.sub(d),v.sub(f),m.sub(f);let Z=1/(v.x*m.y-m.x*v.y);isFinite(Z)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(Z),g.copy(p).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(Z),c[k].add(y),c[Y].add(y),c[I].add(y),h[k].add(g),h[Y].add(g),h[I].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let k=0,Y=E.length;k<Y;++k){let I=E[k],Z=I.start;for(let X=Z,ie=Z+I.count;X<ie;X+=3)_(n[X+0],n[X+1],n[X+2])}let A=new b,T=new b,w=new b,F=new b;function B(k){w.fromArray(s,3*k),F.copy(w);let Y=c[k];A.copy(Y),A.sub(w.multiplyScalar(w.dot(Y))).normalize(),T.crossVectors(F,Y);let I=T.dot(h[k])<0?-1:1;l[4*k]=A.x,l[4*k+1]=A.y,l[4*k+2]=A.z,l[4*k+3]=I}for(let k=0,Y=E.length;k<Y;++k){let I=E[k],Z=I.start;for(let X=Z,ie=Z+I.count;X<ie;X+=3)B(n[X+0]),B(n[X+1]),B(n[X+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let i=new b,s=new b,a=new b,o=new b,l=new b,c=new b,h=new b,d=new b;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let v=0,m=l.length;v<m;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let y=0;y<h;y++)u[f++]=c[p++]}return new Ct(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$c=new Re,di=new Bn,xs=new Mn,Qc=new b,Wi=new b,Xi=new b,ji=new b,uo=new b,Ms=new b,bs=new se,Ss=new se,Es=new se,eh=new b,th=new b,nh=new b,Ts=new b,ws=new b,Ne=class extends dt{constructor(e=new Je,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(uo.fromBufferAttribute(d,e),a?Ms.addScaledVector(uo,h):Ms.addScaledVector(uo.sub(t),h))}t.add(Ms)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(s),di.copy(e.ray).recast(e.near),xs.containsPoint(di.origin)===!1&&(di.intersectSphere(xs,Qc)===null||di.origin.distanceToSquared(Qc)>(e.far-e.near)**2))return;$c.copy(s).invert(),di.copy(e.ray).applyMatrix4($c),n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,di)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=u.length;f<v;f++){let m=u[f],y=a[m.materialIndex];for(let g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));g<_;g+=3)i=As(this,y,e,n,c,h,d,o.getX(g),o.getX(g+1),o.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)i=As(this,a,e,n,c,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=u.length;f<v;f++){let m=u[f],y=a[m.materialIndex];for(let g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));g<_;g+=3)i=As(this,y,e,n,c,h,d,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);f<v;f+=3)i=As(this,a,e,n,c,h,d,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function As(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Wi),r.getVertexPosition(l,Xi),r.getVertexPosition(c,ji);let h=(function(d,u,p,f,v,m,y,g){let _;if(_=u.side===Lt?f.intersectTriangle(y,m,v,!0,g):f.intersectTriangle(v,m,y,u.side===$n,g),_===null)return null;ws.copy(g),ws.applyMatrix4(d.matrixWorld);let E=p.ray.origin.distanceTo(ws);return E<p.near||E>p.far?null:{distance:E,point:ws.clone(),object:d}})(r,e,t,n,Wi,Xi,ji,Ts);if(h){i&&(bs.fromBufferAttribute(i,o),Ss.fromBufferAttribute(i,l),Es.fromBufferAttribute(i,c),h.uv=Zn.getInterpolation(Ts,Wi,Xi,ji,bs,Ss,Es,new se)),s&&(bs.fromBufferAttribute(s,o),Ss.fromBufferAttribute(s,l),Es.fromBufferAttribute(s,c),h.uv1=Zn.getInterpolation(Ts,Wi,Xi,ji,bs,Ss,Es,new se),h.uv2=h.uv1),a&&(eh.fromBufferAttribute(a,o),th.fromBufferAttribute(a,l),nh.fromBufferAttribute(a,c),h.normal=Zn.getInterpolation(Ts,Wi,Xi,ji,eh,th,nh,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new b,materialIndex:0};Zn.getNormal(Wi,Xi,ji,d.normal),h.face=d}return h}var bn=class r extends Je{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function f(v,m,y,g,_,E,A,T,w,F,B){let k=E/w,Y=A/F,I=E/2,Z=A/2,X=T/2,ie=w+1,he=F+1,re=0,Q=0,ne=new b;for(let q=0;q<he;q++){let z=q*Y-Z;for(let G=0;G<ie;G++){let M=G*k-I;ne[v]=M*g,ne[m]=z*_,ne[y]=X,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[y]=T>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(G/w),d.push(1-q/F),re+=1}}for(let q=0;q<F;q++)for(let z=0;z<w;z++){let G=u+z+ie*q,M=u+z+ie*(q+1),x=u+(z+1)+ie*(q+1),C=u+(z+1)+ie*q;l.push(G,M,C),l.push(M,x,C),Q+=6}o.addGroup(p,Q,B),p+=Q,u+=re}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(r){let e={};for(let t=0;t<r.length;t++){let n=cr(r[t]);for(let i in n)e[i]=n[i]}return e}function tu(r){return r.getRenderTarget()===null?r.outputColorSpace:je.workingColorSpace}var Fl={clone:cr,merge:wt},an=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xr=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},at=class extends Xr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*lr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*tr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*lr*Math.atan(Math.tan(.5*tr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*tr*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yi=-90,zo=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new at(Yi,1,e,t);i.layers=this.layers,this.add(i);let s=new at(Yi,1,e,t);s.layers=this.layers,this.add(s);let a=new at(Yi,1,e,t);a.layers=this.layers,this.add(a);let o=new at(Yi,1,e,t);o.layers=this.layers,this.add(o);let l=new at(Yi,1,e,t);l.layers=this.layers,this.add(l);let c=new at(Yi,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===or)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==qs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},na=class extends Ot{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:rr,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ho=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mi?Ze:gn),this.texture=new na(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bn(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:0});s.uniforms.tEquirect.value=t;let a=new Ne(i,s),o=t.minFilter;return t.minFilter===Gs&&(t.minFilter=nn),new zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},po=new b,md=new b,fd=new De,Rt=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=po.subVectors(n,t).cross(md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fd.getNormalMatrix(e),i=this.coplanarPoint(po).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new Mn,Rs=new b,hr=class{constructor(e=new Rt,t=new Rt,n=new Rt,i=new Rt,s=new Rt,a=new Rt){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],f=i[9],v=i[10],m=i[11],y=i[12],g=i[13],_=i[14],E=i[15];if(n[0].setComponents(l-s,u-c,m-p,E-y).normalize(),n[1].setComponents(l+s,u+c,m+p,E+y).normalize(),n[2].setComponents(l+a,u+h,m+f,E+g).normalize(),n[3].setComponents(l-a,u-h,m-f,E-g).normalize(),n[4].setComponents(l-o,u-d,m-v,E-_).normalize(),t===or)n[5].setComponents(l+o,u+d,m+v,E+_).normalize();else{if(t!==qs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,d,v,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Rs.x=i.normal.x>0?e.max.x:e.min.x,Rs.y=i.normal.y>0?e.max.y:e.min.y,Rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function gd(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,(function(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer(),p;if(r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=r.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}})(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,d=l._updateRange,u=l.updateRanges;if(r.bindBuffer(c,o),d.count===-1&&u.length===0&&r.bufferSubData(c,0,h),u.length!==0){for(let p=0,f=u.length;p<f;p++){let v=u[p];t?r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count):r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h.subarray(v.start,v.start+v.count))}l.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var St=class r extends Je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,p=[],f=[],v=[],m=[];for(let y=0;y<h;y++){let g=y*u-a;for(let _=0;_<c;_++){let E=_*d-s;f.push(E,-g,0),v.push(0,0,1),m.push(_/o),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let g=0;g<o;g++){let _=g+c*y,E=g+c*(y+1),A=g+1+c*(y+1),T=g+1+c*y;p.push(_,E,T),p.push(E,A,T)}this.setIndex(p),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Pe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ue={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},mn={basic:{uniforms:wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new be(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new be(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:wt([ue.points,ue.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:wt([ue.common,ue.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:wt([ue.sprite,ue.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:wt([ue.common,ue.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:wt([ue.lights,ue.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};mn.physical={uniforms:wt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var Cs={r:0,b:0,g:0};function vd(r,e,t,n,i,s,a){let o=new be(0),l,c,h=s===!0?0:1,d=null,u=0,p=null;function f(v,m){v.getRGB(Cs,tu(r)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(v,m=1){o.set(v),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,f(o,h)},render:function(v,m){let y=!1,g=m.isScene===!0?m.background:null;g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g===null?f(o,h):g&&g.isColor&&(f(g,1),y=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ma)?(c===void 0&&(c=new Ne(new bn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:cr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=je.getTransfer(g.colorSpace)!==Qe,d===g&&u===g.version&&p===r.toneMapping||(c.material.needsUpdate=!0,d=g,u=g.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Ne(new St(2,2),new an({name:"BackgroundMaterial",uniforms:cr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=je.getTransfer(g.colorSpace)!==Qe,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),d===g&&u===g.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=g,u=g.version,p=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}}}function _d(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function d(A){return n.isWebGL2?r.bindVertexArray(A):s.bindVertexArrayOES(A)}function u(A){return n.isWebGL2?r.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function p(A){let T=[],w=[],F=[];for(let B=0;B<i;B++)T[B]=0,w[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:w,attributeDivisors:F,object:A,attributes:{},index:null}}function f(){let A=c.newAttributes;for(let T=0,w=A.length;T<w;T++)A[T]=0}function v(A){m(A,0)}function m(A,T){let w=c.newAttributes,F=c.enabledAttributes,B=c.attributeDivisors;w[A]=1,F[A]===0&&(r.enableVertexAttribArray(A),F[A]=1),B[A]!==T&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,T),B[A]=T)}function y(){let A=c.newAttributes,T=c.enabledAttributes;for(let w=0,F=T.length;w<F;w++)T[w]!==A[w]&&(r.disableVertexAttribArray(w),T[w]=0)}function g(A,T,w,F,B,k,Y){Y===!0?r.vertexAttribIPointer(A,T,w,B,k):r.vertexAttribPointer(A,T,w,F,B,k)}function _(){E(),h=!0,c!==l&&(c=l,d(c.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(A,T,w,F,B){let k=!1;if(a){let Y=(function(I,Z,X){let ie=X.wireframe===!0,he=o[I.id];he===void 0&&(he={},o[I.id]=he);let re=he[Z.id];re===void 0&&(re={},he[Z.id]=re);let Q=re[ie];return Q===void 0&&(Q=p(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),re[ie]=Q),Q})(F,w,T);c!==Y&&(c=Y,d(c.object)),k=(function(I,Z,X,ie){let he=c.attributes,re=Z.attributes,Q=0,ne=X.getAttributes();for(let q in ne)if(ne[q].location>=0){let z=he[q],G=re[q];if(G===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),z===void 0||z.attribute!==G||G&&z.data!==G.data)return!0;Q++}return c.attributesNum!==Q||c.index!==ie})(A,F,w,B),k&&(function(I,Z,X,ie){let he={},re=Z.attributes,Q=0,ne=X.getAttributes();for(let q in ne)if(ne[q].location>=0){let z=re[q];z===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(z=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(z=I.instanceColor));let G={};G.attribute=z,z&&z.data&&(G.data=z.data),he[q]=G,Q++}c.attributes=he,c.attributesNum=Q,c.index=ie})(A,F,w,B)}else{let Y=T.wireframe===!0;c.geometry===F.id&&c.program===w.id&&c.wireframe===Y||(c.geometry=F.id,c.program=w.id,c.wireframe=Y,k=!0)}B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,(function(Y,I,Z,X){if(n.isWebGL2===!1&&(Y.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let ie=X.attributes,he=Z.getAttributes(),re=I.defaultAttributeValues;for(let Q in he){let ne=he[Q];if(ne.location>=0){let q=ie[Q];if(q===void 0&&(Q==="instanceMatrix"&&Y.instanceMatrix&&(q=Y.instanceMatrix),Q==="instanceColor"&&Y.instanceColor&&(q=Y.instanceColor)),q!==void 0){let z=q.normalized,G=q.itemSize,M=t.get(q);if(M===void 0)continue;let x=M.buffer,C=M.type,D=M.bytesPerElement,R=n.isWebGL2===!0&&(C===r.INT||C===r.UNSIGNED_INT||q.gpuType===Xh);if(q.isInterleavedBufferAttribute){let U=q.data,P=U.stride,N=q.offset;if(U.isInstancedInterleavedBuffer){for(let O=0;O<ne.locationSize;O++)m(ne.location+O,U.meshPerAttribute);Y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let O=0;O<ne.locationSize;O++)v(ne.location+O);r.bindBuffer(r.ARRAY_BUFFER,x);for(let O=0;O<ne.locationSize;O++)g(ne.location+O,G/ne.locationSize,C,z,P*D,(N+G/ne.locationSize*O)*D,R)}else{if(q.isInstancedBufferAttribute){for(let U=0;U<ne.locationSize;U++)m(ne.location+U,q.meshPerAttribute);Y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let U=0;U<ne.locationSize;U++)v(ne.location+U);r.bindBuffer(r.ARRAY_BUFFER,x);for(let U=0;U<ne.locationSize;U++)g(ne.location+U,G/ne.locationSize,C,z,G*D,G/ne.locationSize*U*D,R)}}else if(re!==void 0){let z=re[Q];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(ne.location,z);break;case 3:r.vertexAttrib3fv(ne.location,z);break;case 4:r.vertexAttrib4fv(ne.location,z);break;default:r.vertexAttrib1fv(ne.location,z)}}}}y()})(A,T,w,F),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))},reset:_,resetDefaultState:E,dispose:function(){_();for(let A in o){let T=o[A];for(let w in T){let F=T[w];for(let B in F)u(F[B].object),delete F[B];delete T[w]}delete o[A]}},releaseStatesOfGeometry:function(A){if(o[A.id]===void 0)return;let T=o[A.id];for(let w in T){let F=T[w];for(let B in F)u(F[B].object),delete F[B];delete T[w]}delete o[A.id]},releaseStatesOfProgram:function(A){for(let T in o){let w=o[T];if(w[A.id]===void 0)continue;let F=w[A.id];for(let B in F)u(F[B].object),delete F[B];delete w[A.id]}},initAttributes:f,enableAttribute:v,disableUnusedAttributes:y}}function yd(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let d=0;d<l;d++)h+=o[d];t.update(h,s,1)}}}function xd(r,e,t){let n;function i(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,_=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:g&&_,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function Md(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Rt,o=new De,l={value:null,needsUpdate:!1};function c(h,d,u,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=l.value,p!==!0||v===null){let m=u+4*f,y=d.matrixWorldInverse;o.getNormalMatrix(y),(v===null||v.length<m)&&(v=new Float32Array(m));for(let g=0,_=u;g!==f;++g,_+=4)a.copy(h[g]).applyMatrix4(y,o),a.normal.toArray(v,_),v[_+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||i;return i=d,n=h.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!v)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let y=s?0:n,g=4*y,_=m.clippingState||null;l.value=_,_=c(p,d,g,u);for(let E=0;E!==g;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function bd(r){let e=new WeakMap;function t(i,s){return s===Po?i.mapping=rr:s===Lo&&(i.mapping=sr),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Po||s===Lo){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Ho(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var ia=class extends Xr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ih=[.125,.215,.35,.446,.526,.582],Lr=20,mo=new ia,rh=new be,fo=null,go=0,vo=0,mi=(1+Math.sqrt(5))/2,qi=1/mi,sh=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,mi,qi),new b(0,mi,-qi),new b(qi,0,mi),new b(-qi,0,mi),new b(mi,qi,0),new b(-mi,qi,0)],ra=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fo,go,vo),e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:bi,format:fn,colorSpace:On,depthBuffer:!1},i=ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,d=a-4+1+ih.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let f=1/p;u>a-4?f=ih[u-a+4-1]:u===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,y=1+v,g=[m,m,y,m,y,y,m,m,y,y,m,y],_=6,E=6,A=3,T=2,w=1,F=new Float32Array(A*E*_),B=new Float32Array(T*E*_),k=new Float32Array(w*E*_);for(let I=0;I<_;I++){let Z=I%3*2/3-1,X=I>2?0:-1,ie=[Z,X,0,Z+2/3,X,0,Z+2/3,X+1,0,Z,X,0,Z+2/3,X+1,0,Z,X+1,0];F.set(ie,A*E*I),B.set(g,T*E*I);let he=[I,I,I,I,I,I];k.set(he,w*E*I)}let Y=new Je;Y.setAttribute("position",new Ct(F,A)),Y.setAttribute("uv",new Ct(B,T)),Y.setAttribute("faceIndex",new Ct(k,w)),o.push(Y),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Lr),h=new b(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,i){let s=new at(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(rh),l.toneMapping=Jn,l.autoClear=!1;let d=new Xt({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),u=new Ne(new bn,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(rh),p=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):m===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let y=this._cubeSize;Ps(i,m*y,v>2?y:0,y,y),l.setRenderTarget(i),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===rr||e.mapping===sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Ps(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=sh[(i-1)%sh.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ne(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):Lr;v>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],y=0;for(let E=0;E<Lr;++E){let A=E/f,T=Math.exp(-A*A/2);m.push(T),E===0?y+=T:E<v&&(y+=2*T)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:g}=this;d.dTheta.value=p,d.mipInt.value=g-n;let _=this._sizeLods[i];Ps(t,3*_*(i>g-4?i-g+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,mo)}};function ah(r,e,t){let n=new sn(r,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function oh(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function lh(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sd(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Po||s===Lo,o=s===rr||s===sr;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let l=e.get(i);return t===null&&(t=new ra(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),e.set(i,l),l.texture}if(e.has(i))return e.get(i).texture;{let l=i.image;if(a&&l&&l.height>0||o&&l&&(function(c){let h=0,d=6;for(let u=0;u<d;u++)c[u]!==void 0&&h++;return h===d})(l)){t===null&&(t=new ra(r));let c=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,c),i.addEventListener("dispose",n),c.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Ed(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Td(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let v=h.array;u=h.version;for(let m=0,y=v.length;m<y;m+=3){let g=v[m+0],_=v[m+1],E=v[m+2];c.push(g,_,_,E,E,g)}}else{if(d===void 0)return;{let v=d.array;u=d.version;for(let m=0,y=v.length/3-1;m<y;m+=3){let g=m+0,_=m+1,E=m+2;c.push(g,_,_,E,E,g)}}}let p=new(Qh(c)?ta:ea)(c,1);p.version=u;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function wd(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let d,u;if(i)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<h;u++)this.render(l[u]/o,c[u]);else{d.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,s,1)}}}function Ad(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Rd(r,e){return r[0]-e[0]}function Cd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Pd(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new We,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=u!==void 0?u.length:0,f=s.get(c);if(f===void 0||f.count!==p){let Z=function(){Y.dispose(),s.delete(c),c.removeEventListener("dispose",Z)};f!==void 0&&f.texture.dispose();let y=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],T=c.morphAttributes.color||[],w=0;y===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let F=c.attributes.position.count*w,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);let k=new Float32Array(F*B*4*p),Y=new $s(k,F,B,p);Y.type=qn,Y.needsUpdate=!0;let I=4*w;for(let X=0;X<p;X++){let ie=E[X],he=A[X],re=T[X],Q=F*B*4*X;for(let ne=0;ne<ie.count;ne++){let q=ne*I;y===!0&&(a.fromBufferAttribute(ie,ne),k[Q+q+0]=a.x,k[Q+q+1]=a.y,k[Q+q+2]=a.z,k[Q+q+3]=0),g===!0&&(a.fromBufferAttribute(he,ne),k[Q+q+4]=a.x,k[Q+q+5]=a.y,k[Q+q+6]=a.z,k[Q+q+7]=0),_===!0&&(a.fromBufferAttribute(re,ne),k[Q+q+8]=a.x,k[Q+q+9]=a.y,k[Q+q+10]=a.z,k[Q+q+11]=re.itemSize===4?a.w:1)}}f={count:p,texture:Y,size:new se(F,B)},s.set(c,f),c.addEventListener("dispose",Z)}let v=0;for(let y=0;y<d.length;y++)v+=d[y];let m=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let u=d===void 0?0:d.length,p=n[c.id];if(p===void 0||p.length!==u){p=[];for(let g=0;g<u;g++)p[g]=[g,0];n[c.id]=p}for(let g=0;g<u;g++){let _=p[g];_[0]=g,_[1]=d[g]}p.sort(Cd);for(let g=0;g<8;g++)g<u&&p[g][1]?(o[g][0]=p[g][0],o[g][1]=p[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(Rd);let f=c.morphAttributes.position,v=c.morphAttributes.normal,m=0;for(let g=0;g<8;g++){let _=o[g],E=_[0],A=_[1];E!==Number.MAX_SAFE_INTEGER&&A?(f&&c.getAttribute("morphTarget"+g)!==f[E]&&c.setAttribute("morphTarget"+g,f[E]),v&&c.getAttribute("morphNormal"+g)!==v[E]&&c.setAttribute("morphNormal"+g,v[E]),i[g]=A,m+=A):(f&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),v&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),i[g]=0)}let y=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function Ld(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var sa=class extends Ot{constructor(e,t,n,i,s,a,o,l,c,h){if((h=h!==void 0?h:xi)!==xi&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xi&&(n=Yn),n===void 0&&h===ar&&(n=yi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},iu=new Ot,ru=new sa(1,1);ru.compareFunction=515;var su=new $s,au=new Fo,ou=new na,ch=[],hh=[],uh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4);function fr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=ch[i];if(s===void 0&&(s=new Float32Array(i),ch[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sa(r,e){let t=hh[e];t===void 0&&(t=new Int32Array(e),hh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Id(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2fv(this.addr,e),mt(t,e)}}function Nd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;r.uniform3fv(this.addr,e),mt(t,e)}}function Ud(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4fv(this.addr,e),mt(t,e)}}function Od(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;ph.set(n),r.uniformMatrix2fv(this.addr,!1,ph),mt(t,n)}}function Bd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;dh.set(n),r.uniformMatrix3fv(this.addr,!1,dh),mt(t,n)}}function Fd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;uh.set(n),r.uniformMatrix4fv(this.addr,!1,uh),mt(t,n)}}function zd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Hd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2iv(this.addr,e),mt(t,e)}}function kd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3iv(this.addr,e),mt(t,e)}}function Gd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4iv(this.addr,e),mt(t,e)}}function Vd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Wd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2uiv(this.addr,e),mt(t,e)}}function Xd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3uiv(this.addr,e),mt(t,e)}}function jd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4uiv(this.addr,e),mt(t,e)}}function Yd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?ru:iu;t.setTexture2D(e||s,i)}function qd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||au,i)}function Zd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ou,i)}function Jd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||su,i)}function Kd(r,e){r.uniform1fv(this.addr,e)}function $d(r,e){let t=fr(e,this.size,2);r.uniform2fv(this.addr,t)}function Qd(r,e){let t=fr(e,this.size,3);r.uniform3fv(this.addr,t)}function ep(r,e){let t=fr(e,this.size,4);r.uniform4fv(this.addr,t)}function tp(r,e){let t=fr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function np(r,e){let t=fr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ip(r,e){let t=fr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rp(r,e){r.uniform1iv(this.addr,e)}function sp(r,e){r.uniform2iv(this.addr,e)}function ap(r,e){r.uniform3iv(this.addr,e)}function op(r,e){r.uniform4iv(this.addr,e)}function lp(r,e){r.uniform1uiv(this.addr,e)}function cp(r,e){r.uniform2uiv(this.addr,e)}function hp(r,e){r.uniform3uiv(this.addr,e)}function up(r,e){r.uniform4uiv(this.addr,e)}function dp(r,e,t){let n=this.cache,i=e.length,s=Sa(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||iu,s[a])}function pp(r,e,t){let n=this.cache,i=e.length,s=Sa(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||au,s[a])}function mp(r,e,t){let n=this.cache,i=e.length,s=Sa(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ou,s[a])}function fp(r,e,t){let n=this.cache,i=e.length,s=Sa(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||su,s[a])}var ko=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return Id;case 35664:return Dd;case 35665:return Nd;case 35666:return Ud;case 35674:return Od;case 35675:return Bd;case 35676:return Fd;case 5124:case 35670:return zd;case 35667:case 35671:return Hd;case 35668:case 35672:return kd;case 35669:case 35673:return Gd;case 5125:return Vd;case 36294:return Wd;case 36295:return Xd;case 36296:return jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Yd;case 35679:case 36299:case 36307:return qd;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return Jd}})(t.type)}},Go=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return Kd;case 35664:return $d;case 35665:return Qd;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return sp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return fp}})(t.type)}},Vo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},_o=/(\w+)(\])?(\[|\.)?/g;function mh(r,e){r.seq.push(e),r.map[e.id]=e}function gp(r,e,t){let n=r.name,i=n.length;for(_o.lastIndex=0;;){let s=_o.exec(n),a=_o.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){mh(t,c===void 0?new ko(o,r,e):new Go(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Vo(o),mh(t,h)),t=h}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);gp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function fh(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var vp=37297,_p=0;function gh(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function yp(r,e){let t=(function(n){let i=je.getPrimaries(je.workingColorSpace),s=je.getPrimaries(n),a;switch(i===s?a="":i===Ys&&s===js?a="LinearDisplayP3ToLinearSRGB":i===js&&s===Ys&&(a="LinearSRGBToLinearDisplayP3"),n){case On:case ba:return[a,"LinearTransferOETF"];case Ze:case Bl:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xp(r,e){let t;switch(e){case Yu:t="Linear";break;case qu:t="Reinhard";break;case Zu:t="OptimizedCineon";break;case Ul:t="ACESFilmic";break;case Ku:t="AgX";break;case Ju:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zi(r){return r!==""}function vh(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(r){return r.replace(Mp,Sp)}var bp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sp(r,e){let t=Pe[e];if(t===void 0){let n=bp.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Wo(t)}var Ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(r){return r.replace(Ep,Tp)}function Tp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wp(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(I){let Z="SHADOWMAP_TYPE_BASIC";return I.shadowMapType===Gh?Z="SHADOWMAP_TYPE_PCF":I.shadowMapType===Nl?Z="SHADOWMAP_TYPE_PCF_SOFT":I.shadowMapType===Nn&&(Z="SHADOWMAP_TYPE_VSM"),Z})(t),c=(function(I){let Z="ENVMAP_TYPE_CUBE";if(I.envMap)switch(I.envMapMode){case rr:case sr:Z="ENVMAP_TYPE_CUBE";break;case Ma:Z="ENVMAP_TYPE_CUBE_UV"}return Z})(t),h=(function(I){let Z="ENVMAP_MODE_REFLECTION";return I.envMap&&I.envMapMode===sr&&(Z="ENVMAP_MODE_REFRACTION"),Z})(t),d=(function(I){let Z="ENVMAP_BLENDING_NONE";if(I.envMap)switch(I.combine){case Vh:Z="ENVMAP_BLENDING_MULTIPLY";break;case Xu:Z="ENVMAP_BLENDING_MIX";break;case ju:Z="ENVMAP_BLENDING_ADD"}return Z})(t),u=(function(I){let Z=I.envMapCubeUVHeight;if(Z===null)return null;let X=Math.log2(Z)-2,ie=1/Z;return{texelWidth:1/(3*Math.max(Math.pow(2,X),112)),texelHeight:ie,maxMip:X}})(t),p=t.isWebGL2?"":(function(I){return[I.extensionDerivatives||I.envMapCubeUVHeight||I.bumpMap||I.normalMapTangentSpace||I.clearcoatNormalMap||I.flatShading||I.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(I.extensionFragDepth||I.logarithmicDepthBuffer)&&I.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",I.extensionDrawBuffers&&I.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(I.extensionShaderTextureLOD||I.envMap||I.transmission)&&I.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)})(t),f=(function(I){return[I.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zi).join(`
`)})(t),v=(function(I){let Z=[];for(let X in I){let ie=I[X];ie!==!1&&Z.push("#define "+X+" "+ie)}return Z.join(`
`)})(s),m=i.createProgram(),y,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zi).join(`
`),y.length>0&&(y+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zi).join(`
`),g.length>0&&(g+=`
`)):(y=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),g=[p,xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Jn?xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,yp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=Wo(a),a=vh(a,t),a=_h(a,t),o=Wo(o),o=vh(o,t),o=_h(o,t),a=yh(a),o=yh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=_+y+a,A=_+g+o,T=fh(i,i.VERTEX_SHADER,E),w=fh(i,i.FRAGMENT_SHADER,A);function F(I){if(r.debug.checkShaderErrors){let Z=i.getProgramInfoLog(m).trim(),X=i.getShaderInfoLog(T).trim(),ie=i.getShaderInfoLog(w).trim(),he=!0,re=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,T,w);else{let Q=gh(i,T,"vertex"),ne=gh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+Q+`
`+ne)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):X!==""&&ie!==""||(re=!1);re&&(I.diagnostics={runnable:he,programLog:Z,vertexShader:{log:X,prefix:y},fragmentShader:{log:ie,prefix:g}})}i.deleteShader(T),i.deleteShader(w),B=new ir(i,m),k=(function(Z,X){let ie={},he=Z.getProgramParameter(X,Z.ACTIVE_ATTRIBUTES);for(let re=0;re<he;re++){let Q=Z.getActiveAttrib(X,re),ne=Q.name,q=1;Q.type===Z.FLOAT_MAT2&&(q=2),Q.type===Z.FLOAT_MAT3&&(q=3),Q.type===Z.FLOAT_MAT4&&(q=4),ie[ne]={type:Q.type,location:Z.getAttribLocation(X,ne),locationSize:q}}return ie})(i,m)}let B,k;i.attachShader(m,T),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),this.getUniforms=function(){return B===void 0&&F(this),B},this.getAttributes=function(){return k===void 0&&F(this),k};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=i.getProgramParameter(m,vp)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_p++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}var Ap=0,Xo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jo(e),t.set(e,n)),n}},jo=class{constructor(e){this.id=Ap++,this.code=e,this.usedTimes=0}};function Rp(r,e,t,n,i,s,a){let o=new Wr,l=new Xo,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,y,g,_,E){let A=_.fog,T=E.geometry,w=m.isMeshStandardMaterial?_.environment:null,F=(m.isMeshStandardMaterial?t:e).get(m.envMap||w),B=F&&F.mapping===Ma?F.image.height:null,k=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let Y=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,I=Y!==void 0?Y.length:0,Z,X,ie,he,re=0;if(T.morphAttributes.position!==void 0&&(re=1),T.morphAttributes.normal!==void 0&&(re=2),T.morphAttributes.color!==void 0&&(re=3),k){let _t=mn[k];Z=_t.vertexShader,X=_t.fragmentShader}else Z=m.vertexShader,X=m.fragmentShader,l.update(m),ie=l.getVertexShaderID(m),he=l.getFragmentShaderID(m);let Q=r.getRenderTarget(),ne=E.isInstancedMesh===!0,q=E.isBatchedMesh===!0,z=!!m.map,G=!!m.matcap,M=!!F,x=!!m.aoMap,C=!!m.lightMap,D=!!m.bumpMap,R=!!m.normalMap,U=!!m.displacementMap,P=!!m.emissiveMap,N=!!m.metalnessMap,O=!!m.roughnessMap,V=m.anisotropy>0,j=m.clearcoat>0,S=m.iridescence>0,ee=m.sheen>0,W=m.transmission>0,J=V&&!!m.anisotropyMap,oe=j&&!!m.clearcoatMap,de=j&&!!m.clearcoatNormalMap,pe=j&&!!m.clearcoatRoughnessMap,ve=S&&!!m.iridescenceMap,Ee=S&&!!m.iridescenceThicknessMap,ge=ee&&!!m.sheenColorMap,_e=ee&&!!m.sheenRoughnessMap,Ce=!!m.specularMap,lt=!!m.specularColorMap,xe=!!m.specularIntensityMap,Oe=W&&!!m.transmissionMap,Le=W&&!!m.thicknessMap,ri=!!m.gradientMap,It=!!m.alphaMap,H=m.alphaTest>0,fe=!!m.alphaHash,Ae=!!m.extensions,Ge=!!T.attributes.uv1,K=!!T.attributes.uv2,Dt=!!T.attributes.uv3,gt=Jn;return m.toneMapped&&(Q!==null&&Q.isXRRenderTarget!==!0||(gt=r.toneMapping)),{isWebGL2:h,shaderID:k,shaderType:m.type,shaderName:m.name,vertexShader:Z,fragmentShader:X,defines:m.defines,customVertexShaderID:ie,customFragmentShaderID:he,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:q,instancing:ne,instancingColor:ne&&E.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:On,map:z,matcap:G,envMap:M,envMapMode:M&&F.mapping,envMapCubeUVHeight:B,aoMap:x,lightMap:C,bumpMap:D,normalMap:R,displacementMap:u&&U,emissiveMap:P,normalMapObjectSpace:R&&m.normalMapType===1,normalMapTangentSpace:R&&m.normalMapType===0,metalnessMap:N,roughnessMap:O,anisotropy:V,anisotropyMap:J,clearcoat:j,clearcoatMap:oe,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,iridescence:S,iridescenceMap:ve,iridescenceThicknessMap:Ee,sheen:ee,sheenColorMap:ge,sheenRoughnessMap:_e,specularMap:Ce,specularColorMap:lt,specularIntensityMap:xe,transmission:W,transmissionMap:Oe,thicknessMap:Le,gradientMap:ri,opaque:m.transparent===!1&&m.blending===1,alphaMap:It,alphaTest:H,alphaHash:fe,combine:m.combine,mapUv:z&&v(m.map.channel),aoMapUv:x&&v(m.aoMap.channel),lightMapUv:C&&v(m.lightMap.channel),bumpMapUv:D&&v(m.bumpMap.channel),normalMapUv:R&&v(m.normalMap.channel),displacementMapUv:U&&v(m.displacementMap.channel),emissiveMapUv:P&&v(m.emissiveMap.channel),metalnessMapUv:N&&v(m.metalnessMap.channel),roughnessMapUv:O&&v(m.roughnessMap.channel),anisotropyMapUv:J&&v(m.anisotropyMap.channel),clearcoatMapUv:oe&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(m.sheenRoughnessMap.channel),specularMapUv:Ce&&v(m.specularMap.channel),specularColorMapUv:lt&&v(m.specularColorMap.channel),specularIntensityMapUv:xe&&v(m.specularIntensityMap.channel),transmissionMapUv:Oe&&v(m.transmissionMap.channel),thicknessMapUv:Le&&v(m.thicknessMap.channel),alphaMapUv:It&&v(m.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(R||V),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:K,vertexUv3s:Dt,pointsUvs:E.isPoints===!0&&!!T.attributes.uv&&(z||It),fog:!!A,useFog:m.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:E.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:z&&m.map.isVideoTexture===!0&&je.getTransfer(m.map.colorSpace)===Qe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===Lt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:Ae&&m.extensions.derivatives===!0,extensionFragDepth:Ae&&m.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&m.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)y.push(g),y.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)})(y,m),(function(g,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),g.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),g.push(o.mask)})(y,m),y.push(r.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],g;if(y){let _=mn[y];g=Fl.clone(_.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,y){let g;for(let _=0,E=c.length;_<E;_++){let A=c[_];if(A.cacheKey===y){g=A,++g.usedTimes;break}}return g===void 0&&(g=new wp(r,y,m,s),c.push(g)),g},releaseProgram:function(m){if(--m.usedTimes==0){let y=c.indexOf(m);c[y]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function Cp(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Pp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Mh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bh(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.push(u):l.transparent===!0?i.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.unshift(u):l.transparent===!0?i.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Pp),n.length>1&&n.sort(o||Mh),i.length>1&&i.sort(o||Mh)}}}function Lp(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new bh,r.set(e,[i])):t>=n.length?(i=new bh,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Ip(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new be};break;case"SpotLight":t={position:new b,direction:new b,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new b,halfWidth:new b,halfHeight:new b}}return r[e.id]=t,t}}}var Dp=0;function Np(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Up(r,e){let t=new Ip,n=(function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);let s=new b,a=new Re,o=new Re;return{setup:function(l,c){let h=0,d=0,u=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,f=0,v=0,m=0,y=0,g=0,_=0,E=0,A=0,T=0,w=0;l.sort(Np);let F=c===!0?Math.PI:1;for(let k=0,Y=l.length;k<Y;k++){let I=l[k],Z=I.color,X=I.intensity,ie=I.distance,he=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=Z.r*X*F,d+=Z.g*X*F,u+=Z.b*X*F;else if(I.isLightProbe){for(let re=0;re<9;re++)i.probe[re].addScaledVector(I.sh.coefficients[re],X);w++}else if(I.isDirectionalLight){let re=t.get(I);if(re.color.copy(I.color).multiplyScalar(I.intensity*F),I.castShadow){let Q=I.shadow,ne=n.get(I);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.directionalShadow[p]=ne,i.directionalShadowMap[p]=he,i.directionalShadowMatrix[p]=I.shadow.matrix,g++}i.directional[p]=re,p++}else if(I.isSpotLight){let re=t.get(I);re.position.setFromMatrixPosition(I.matrixWorld),re.color.copy(Z).multiplyScalar(X*F),re.distance=ie,re.coneCos=Math.cos(I.angle),re.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),re.decay=I.decay,i.spot[v]=re;let Q=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,Q.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[v]=Q.matrix,I.castShadow){let ne=n.get(I);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.spotShadow[v]=ne,i.spotShadowMap[v]=he,E++}v++}else if(I.isRectAreaLight){let re=t.get(I);re.color.copy(Z).multiplyScalar(X),re.halfWidth.set(.5*I.width,0,0),re.halfHeight.set(0,.5*I.height,0),i.rectArea[m]=re,m++}else if(I.isPointLight){let re=t.get(I);if(re.color.copy(I.color).multiplyScalar(I.intensity*F),re.distance=I.distance,re.decay=I.decay,I.castShadow){let Q=I.shadow,ne=n.get(I);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=he,i.pointShadowMatrix[f]=I.shadow.matrix,_++}i.point[f]=re,f++}else if(I.isHemisphereLight){let re=t.get(I);re.skyColor.copy(I.color).multiplyScalar(X*F),re.groundColor.copy(I.groundColor).multiplyScalar(X*F),i.hemi[y]=re,y++}}m>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let B=i.hash;B.directionalLength===p&&B.pointLength===f&&B.spotLength===v&&B.rectAreaLength===m&&B.hemiLength===y&&B.numDirectionalShadows===g&&B.numPointShadows===_&&B.numSpotShadows===E&&B.numSpotMaps===A&&B.numLightProbes===w||(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,B.directionalLength=p,B.pointLength=f,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=y,B.numDirectionalShadows=g,B.numPointShadows=_,B.numSpotShadows=E,B.numSpotMaps=A,B.numLightProbes=w,i.version=Dp++)},setupView:function(l,c){let h=0,d=0,u=0,p=0,f=0,v=c.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){let g=l[m];if(g.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(v),h++}else if(g.isSpotLight){let _=i.spot[u];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(v),u++}else if(g.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),o.identity(),a.copy(g.matrixWorld),a.premultiply(v),o.extractRotation(a),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),d++}else if(g.isHemisphereLight){let _=i.hemi[f];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(v),f++}}},state:i}}function Sh(r,e){let t=new Up(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function Op(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new Sh(r,e),t.set(n,[a])):i>=s.length?(a=new Sh(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var Yo=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qo=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bp(r,e,t){let n=new hr,i=new se,s=new se,a=new We,o=new Yo({depthPacking:3201}),l=new qo,c={},h=t.maxTextureSize,d={[$n]:Lt,[Lt]:$n,2:2},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new Je;f.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ne(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let y=this.type;function g(T,w){let F=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new sn(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,F,u,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,F,p,v,null)}function _(T,w,F,B){let k=null,Y=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(Y!==void 0)k=Y;else if(k=F.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let I=k.uuid,Z=w.uuid,X=c[I];X===void 0&&(X={},c[I]=X);let ie=X[Z];ie===void 0&&(ie=k.clone(),X[Z]=ie,w.addEventListener("dispose",A)),k=ie}return k.visible=w.visible,k.wireframe=w.wireframe,k.side=B===Nn?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:d[w.side],k.alphaMap=w.alphaMap,k.alphaTest=w.alphaTest,k.map=w.map,k.clipShadows=w.clipShadows,k.clippingPlanes=w.clippingPlanes,k.clipIntersection=w.clipIntersection,k.displacementMap=w.displacementMap,k.displacementScale=w.displacementScale,k.displacementBias=w.displacementBias,k.wireframeLinewidth=w.wireframeLinewidth,k.linewidth=w.linewidth,F.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(r.properties.get(k).light=F),k}function E(T,w,F,B,k){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&k===Nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let I=e.update(T),Z=T.material;if(Array.isArray(Z)){let X=I.groups;for(let ie=0,he=X.length;ie<he;ie++){let re=X[ie],Q=Z[re.materialIndex];if(Q&&Q.visible){let ne=_(T,Q,B,k);T.onBeforeShadow(r,T,w,F,I,ne,re),r.renderBufferDirect(F,null,I,ne,T,re),T.onAfterShadow(r,T,w,F,I,ne,re)}}}else if(Z.visible){let X=_(T,Z,B,k);T.onBeforeShadow(r,T,w,F,I,X,null),r.renderBufferDirect(F,null,I,X,T,null),T.onAfterShadow(r,T,w,F,I,X,null)}}let Y=T.children;for(let I=0,Z=Y.length;I<Z;I++)E(Y[I],w,F,B,k)}function A(T){T.target.removeEventListener("dispose",A);for(let w in c){let F=c[w],B=T.target.uuid;B in F&&(F[B].dispose(),delete F[B])}}this.render=function(T,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let B=r.getRenderTarget(),k=r.getActiveCubeFace(),Y=r.getActiveMipmapLevel(),I=r.state;I.setBlending(0),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let Z=y!==Nn&&this.type===Nn,X=y===Nn&&this.type!==Nn;for(let ie=0,he=T.length;ie<he;ie++){let re=T[ie],Q=re.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);let ne=Q.getFrameExtents();if(i.multiply(ne),s.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,Q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,Q.mapSize.y=s.y)),Q.map===null||Z===!0||X===!0){let z=this.type!==Nn?{minFilter:At,magFilter:At}:{};Q.map!==null&&Q.map.dispose(),Q.map=new sn(i.x,i.y,z),Q.map.texture.name=re.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();let q=Q.getViewportCount();for(let z=0;z<q;z++){let G=Q.getViewport(z);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),I.viewport(a),Q.updateMatrices(re,z),n=Q.getFrustum(),E(w,F,Q.camera,re,this.type)}Q.isPointLightShadow!==!0&&this.type===Nn&&g(Q,F),Q.needsUpdate=!1}y=this.type,m.needsUpdate=!1,r.setRenderTarget(B,k,Y)}}function Fp(r,e,t){let n=t.isWebGL2,i=new function(){let S=!1,ee=new We,W=null,J=new We(0,0,0,0);return{setMask:function(oe){W===oe||S||(r.colorMask(oe,oe,oe,oe),W=oe)},setLocked:function(oe){S=oe},setClear:function(oe,de,pe,ve,Ee){Ee===!0&&(oe*=ve,de*=ve,pe*=ve),ee.set(oe,de,pe,ve),J.equals(ee)===!1&&(r.clearColor(oe,de,pe,ve),J.copy(ee))},reset:function(){S=!1,W=null,J.set(-1,0,0,0)}}},s=new function(){let S=!1,ee=null,W=null,J=null;return{setTest:function(oe){oe?D(r.DEPTH_TEST):R(r.DEPTH_TEST)},setMask:function(oe){ee===oe||S||(r.depthMask(oe),ee=oe)},setFunc:function(oe){if(W!==oe){switch(oe){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}W=oe}},setLocked:function(oe){S=oe},setClear:function(oe){J!==oe&&(r.clearDepth(oe),J=oe)},reset:function(){S=!1,ee=null,W=null,J=null}}},a=new function(){let S=!1,ee=null,W=null,J=null,oe=null,de=null,pe=null,ve=null,Ee=null;return{setTest:function(ge){S||(ge?D(r.STENCIL_TEST):R(r.STENCIL_TEST))},setMask:function(ge){ee===ge||S||(r.stencilMask(ge),ee=ge)},setFunc:function(ge,_e,Ce){W===ge&&J===_e&&oe===Ce||(r.stencilFunc(ge,_e,Ce),W=ge,J=_e,oe=Ce)},setOp:function(ge,_e,Ce){de===ge&&pe===_e&&ve===Ce||(r.stencilOp(ge,_e,Ce),de=ge,pe=_e,ve=Ce)},setLocked:function(ge){S=ge},setClear:function(ge){Ee!==ge&&(r.clearStencil(ge),Ee=ge)},reset:function(){S=!1,ee=null,W=null,J=null,oe=null,de=null,pe=null,ve=null,Ee=null}}},o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],p=null,f=!1,v=null,m=null,y=null,g=null,_=null,E=null,A=null,T=new be(0,0,0),w=0,F=!1,B=null,k=null,Y=null,I=null,Z=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,he=0,re=r.getParameter(r.VERSION);re.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(re)[1]),ie=he>=1):re.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ie=he>=2);let Q=null,ne={},q=r.getParameter(r.SCISSOR_BOX),z=r.getParameter(r.VIEWPORT),G=new We().fromArray(q),M=new We().fromArray(z);function x(S,ee,W,J){let oe=new Uint8Array(4),de=r.createTexture();r.bindTexture(S,de),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pe=0;pe<W;pe++)!n||S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY?r.texImage2D(ee+pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage3D(ee,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,oe);return de}let C={};function D(S){c[S]!==!0&&(r.enable(S),c[S]=!0)}function R(S){c[S]!==!1&&(r.disable(S),c[S]=!1)}C[r.TEXTURE_2D]=x(r.TEXTURE_2D,r.TEXTURE_2D,1),C[r.TEXTURE_CUBE_MAP]=x(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(C[r.TEXTURE_2D_ARRAY]=x(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),C[r.TEXTURE_3D]=x(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),D(r.DEPTH_TEST),s.setFunc(3),O(!1),V(1),D(r.CULL_FACE),N(0);let U={[fi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)U[103]=r.MIN,U[104]=r.MAX;else{let S=e.get("EXT_blend_minmax");S!==null&&(U[103]=S.MIN_EXT,U[104]=S.MAX_EXT)}let P={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[Ro]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[Co]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function N(S,ee,W,J,oe,de,pe,ve,Ee,ge){if(S!==0){if(f===!1&&(D(r.BLEND),f=!0),S===5)oe=oe||ee,de=de||W,pe=pe||J,ee===m&&oe===_||(r.blendEquationSeparate(U[ee],U[oe]),m=ee,_=oe),W===y&&J===g&&de===E&&pe===A||(r.blendFuncSeparate(P[W],P[J],P[de],P[pe]),y=W,g=J,E=de,A=pe),ve.equals(T)!==!1&&Ee===w||(r.blendColor(ve.r,ve.g,ve.b,Ee),T.copy(ve),w=Ee),v=S,F=!1;else if(S!==v||ge!==F){if(m===fi&&_===fi||(r.blendEquation(r.FUNC_ADD),m=fi,_=fi),ge)switch(S){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}y=null,g=null,E=null,A=null,T.set(0,0,0),w=0,v=S,F=ge}}else f===!0&&(R(r.BLEND),f=!1)}function O(S){B!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),B=S)}function V(S){S!==0?(D(r.CULL_FACE),S!==k&&(S===1?r.cullFace(r.BACK):S===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):R(r.CULL_FACE),k=S}function j(S,ee,W){S?(D(r.POLYGON_OFFSET_FILL),I===ee&&Z===W||(r.polygonOffset(ee,W),I=ee,Z=W)):R(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:D,disable:R,bindFramebuffer:function(S,ee){return h[S]!==ee&&(r.bindFramebuffer(S,ee),h[S]=ee,n&&(S===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ee),S===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ee)),!0)},drawBuffers:function(S,ee){let W=u,J=!1;if(S)if(W=d.get(ee),W===void 0&&(W=[],d.set(ee,W)),S.isWebGLMultipleRenderTargets){let oe=S.texture;if(W.length!==oe.length||W[0]!==r.COLOR_ATTACHMENT0){for(let de=0,pe=oe.length;de<pe;de++)W[de]=r.COLOR_ATTACHMENT0+de;W.length=oe.length,J=!0}}else W[0]!==r.COLOR_ATTACHMENT0&&(W[0]=r.COLOR_ATTACHMENT0,J=!0);else W[0]!==r.BACK&&(W[0]=r.BACK,J=!0);J&&(t.isWebGL2?r.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))},useProgram:function(S){return p!==S&&(r.useProgram(S),p=S,!0)},setBlending:N,setMaterial:function(S,ee){S.side===2?R(r.CULL_FACE):D(r.CULL_FACE);let W=S.side===Lt;ee&&(W=!W),O(W),S.blending===1&&S.transparent===!1?N(0):N(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),i.setMask(S.colorWrite);let J=S.stencilWrite;a.setTest(J),J&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),j(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?D(r.SAMPLE_ALPHA_TO_COVERAGE):R(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:O,setCullFace:V,setLineWidth:function(S){S!==Y&&(ie&&r.lineWidth(S),Y=S)},setPolygonOffset:j,setScissorTest:function(S){S?D(r.SCISSOR_TEST):R(r.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=r.TEXTURE0+X-1),Q!==S&&(r.activeTexture(S),Q=S)},bindTexture:function(S,ee,W){W===void 0&&(W=Q===null?r.TEXTURE0+X-1:Q);let J=ne[W];J===void 0&&(J={type:void 0,texture:void 0},ne[W]=J),J.type===S&&J.texture===ee||(Q!==W&&(r.activeTexture(W),Q=W),r.bindTexture(S,ee||C[S]),J.type=S,J.texture=ee)},unbindTexture:function(){let S=ne[Q];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,ee){let W=l.get(ee);W===void 0&&(W=new WeakMap,l.set(ee,W));let J=W.get(S);J===void 0&&(J=r.getUniformBlockIndex(ee,S.name),W.set(S,J))},uniformBlockBinding:function(S,ee){let W=l.get(ee).get(S);o.get(ee)!==W&&(r.uniformBlockBinding(ee,W,S.__bindingPointIndex),o.set(ee,W))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){G.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),G.copy(S))},viewport:function(S){M.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),M.copy(S))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},Q=null,ne={},h={},d=new WeakMap,u=[],p=null,f=!1,v=null,m=null,y=null,g=null,_=null,E=null,A=null,T=new be(0,0,0),w=0,F=!1,B=null,k=null,Y=null,I=null,Z=null,G.set(0,0,r.canvas.width,r.canvas.height),M.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function zp(r,e,t,n,i,s,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function f(M,x){return p?new OffscreenCanvas(M,x):Vr("canvas")}function v(M,x,C,D){let R=1;if((M.width>D||M.height>D)&&(R=D/Math.max(M.width,M.height)),R<1||x===!0){if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let U=x?Zs:Math.floor,P=U(R*M.width),N=U(R*M.height);d===void 0&&(d=f(P,N));let O=C?f(P,N):d;return O.width=P,O.height=N,O.getContext("2d").drawImage(M,0,0,P,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+P+"x"+N+")."),O}return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M}return M}function m(M){return Oo(M.width)&&Oo(M.height)}function y(M,x){return M.generateMipmaps&&x&&M.minFilter!==At&&M.minFilter!==nn}function g(M){r.generateMipmap(M)}function _(M,x,C,D,R=!1){if(o===!1)return x;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let U=x;if(x===r.RED&&(C===r.FLOAT&&(U=r.R32F),C===r.HALF_FLOAT&&(U=r.R16F),C===r.UNSIGNED_BYTE&&(U=r.R8)),x===r.RED_INTEGER&&(C===r.UNSIGNED_BYTE&&(U=r.R8UI),C===r.UNSIGNED_SHORT&&(U=r.R16UI),C===r.UNSIGNED_INT&&(U=r.R32UI),C===r.BYTE&&(U=r.R8I),C===r.SHORT&&(U=r.R16I),C===r.INT&&(U=r.R32I)),x===r.RG&&(C===r.FLOAT&&(U=r.RG32F),C===r.HALF_FLOAT&&(U=r.RG16F),C===r.UNSIGNED_BYTE&&(U=r.RG8)),x===r.RGBA){let P=R?Xs:je.getTransfer(D);C===r.FLOAT&&(U=r.RGBA32F),C===r.HALF_FLOAT&&(U=r.RGBA16F),C===r.UNSIGNED_BYTE&&(U=P===Qe?r.SRGB8_ALPHA8:r.RGBA8),C===r.UNSIGNED_SHORT_4_4_4_4&&(U=r.RGBA4),C===r.UNSIGNED_SHORT_5_5_5_1&&(U=r.RGB5_A1)}return U!==r.R16F&&U!==r.R32F&&U!==r.RG16F&&U!==r.RG32F&&U!==r.RGBA16F&&U!==r.RGBA32F||e.get("EXT_color_buffer_float"),U}function E(M,x,C){return y(M,C)===!0||M.isFramebufferTexture&&M.minFilter!==At&&M.minFilter!==nn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function A(M){return M===At||M===hc||M===Va?r.NEAREST:r.LINEAR}function T(M){let x=M.target;x.removeEventListener("dispose",T),(function(C){let D=n.get(C);if(D.__webglInit===void 0)return;let R=C.source,U=u.get(R);if(U){let P=U[D.__cacheKey];P.usedTimes--,P.usedTimes===0&&F(C),Object.keys(U).length===0&&u.delete(R)}n.remove(C)})(x),x.isVideoTexture&&h.delete(x)}function w(M){let x=M.target;x.removeEventListener("dispose",w),(function(C){let D=C.texture,R=n.get(C),U=n.get(D);if(U.__webglTexture!==void 0&&(r.deleteTexture(U.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(R.__webglFramebuffer[P]))for(let N=0;N<R.__webglFramebuffer[P].length;N++)r.deleteFramebuffer(R.__webglFramebuffer[P][N]);else r.deleteFramebuffer(R.__webglFramebuffer[P]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[P])}else{if(Array.isArray(R.__webglFramebuffer))for(let P=0;P<R.__webglFramebuffer.length;P++)r.deleteFramebuffer(R.__webglFramebuffer[P]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let P=0;P<R.__webglColorRenderbuffer.length;P++)R.__webglColorRenderbuffer[P]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[P]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let P=0,N=D.length;P<N;P++){let O=n.get(D[P]);O.__webglTexture&&(r.deleteTexture(O.__webglTexture),a.memory.textures--),n.remove(D[P])}n.remove(D),n.remove(C)})(x)}function F(M){let x=n.get(M);r.deleteTexture(x.__webglTexture);let C=M.source;delete u.get(C)[x.__cacheKey],a.memory.textures--}let B=0;function k(M,x){let C=n.get(M);if(M.isVideoTexture&&(function(D){let R=a.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())})(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){let D=M.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(D.complete!==!1)return void he(C,M,x);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,C.__webglTexture,r.TEXTURE0+x)}let Y={[Gr]:r.REPEAT,[Un]:r.CLAMP_TO_EDGE,[Io]:r.MIRRORED_REPEAT},I={[At]:r.NEAREST,[hc]:r.NEAREST_MIPMAP_NEAREST,[Va]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[$u]:r.LINEAR_MIPMAP_NEAREST,[Gs]:r.LINEAR_MIPMAP_LINEAR},Z={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function X(M,x,C){if(C?(r.texParameteri(M,r.TEXTURE_WRAP_S,Y[x.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,Y[x.wrapT]),M!==r.TEXTURE_3D&&M!==r.TEXTURE_2D_ARRAY||r.texParameteri(M,r.TEXTURE_WRAP_R,Y[x.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,I[x.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,I[x.minFilter])):(r.texParameteri(M,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(M,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),M!==r.TEXTURE_3D&&M!==r.TEXTURE_2D_ARRAY||r.texParameteri(M,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),x.wrapS===Un&&x.wrapT===Un||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,r.TEXTURE_MAG_FILTER,A(x.magFilter)),r.texParameteri(M,r.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==At&&x.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,Z[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===At||x.minFilter!==Va&&x.minFilter!==Gs||x.type===qn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===bi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function ie(M,x){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",T));let D=x.source,R=u.get(D);R===void 0&&(R={},u.set(D,R));let U=(function(P){let N=[];return N.push(P.wrapS),N.push(P.wrapT),N.push(P.wrapR||0),N.push(P.magFilter),N.push(P.minFilter),N.push(P.anisotropy),N.push(P.internalFormat),N.push(P.format),N.push(P.type),N.push(P.generateMipmaps),N.push(P.premultiplyAlpha),N.push(P.flipY),N.push(P.unpackAlignment),N.push(P.colorSpace),N.join()})(x);if(U!==M.__cacheKey){R[U]===void 0&&(R[U]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,C=!0),R[U].usedTimes++;let P=R[M.__cacheKey];P!==void 0&&(R[M.__cacheKey].usedTimes--,P.usedTimes===0&&F(x)),M.__cacheKey=U,M.__webglTexture=R[U].texture}return C}function he(M,x,C){let D=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(D=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(D=r.TEXTURE_3D);let R=ie(M,x),U=x.source;t.bindTexture(D,M.__webglTexture,r.TEXTURE0+C);let P=n.get(U);if(U.version!==P.__version||R===!0){t.activeTexture(r.TEXTURE0+C);let N=je.getPrimaries(je.workingColorSpace),O=x.colorSpace===gn?null:je.getPrimaries(x.colorSpace),V=x.colorSpace===gn||N===O?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let j=(function(_e){return!o&&(_e.wrapS!==Un||_e.wrapT!==Un||_e.minFilter!==At&&_e.minFilter!==nn)})(x)&&m(x.image)===!1,S=v(x.image,j,!1,i.maxTextureSize);S=G(x,S);let ee=m(S)||o,W=s.convert(x.format,x.colorSpace),J,oe=s.convert(x.type),de=_(x.internalFormat,W,oe,x.colorSpace,x.isVideoTexture);X(D,x,ee);let pe=x.mipmaps,ve=o&&x.isVideoTexture!==!0&&de!==Kh,Ee=P.__version===void 0||R===!0,ge=E(x,S,ee);if(x.isDepthTexture)de=r.DEPTH_COMPONENT,o?de=x.type===qn?r.DEPTH_COMPONENT32F:x.type===Yn?r.DEPTH_COMPONENT24:x.type===yi?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:x.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===xi&&de===r.DEPTH_COMPONENT&&x.type!==Ol&&x.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Yn,oe=s.convert(x.type)),x.format===ar&&de===r.DEPTH_COMPONENT&&(de=r.DEPTH_STENCIL,x.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=yi,oe=s.convert(x.type))),Ee&&(ve?t.texStorage2D(r.TEXTURE_2D,1,de,S.width,S.height):t.texImage2D(r.TEXTURE_2D,0,de,S.width,S.height,0,W,oe,null));else if(x.isDataTexture)if(pe.length>0&&ee){ve&&Ee&&t.texStorage2D(r.TEXTURE_2D,ge,de,pe[0].width,pe[0].height);for(let _e=0,Ce=pe.length;_e<Ce;_e++)J=pe[_e],ve?t.texSubImage2D(r.TEXTURE_2D,_e,0,0,J.width,J.height,W,oe,J.data):t.texImage2D(r.TEXTURE_2D,_e,de,J.width,J.height,0,W,oe,J.data);x.generateMipmaps=!1}else ve?(Ee&&t.texStorage2D(r.TEXTURE_2D,ge,de,S.width,S.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,W,oe,S.data)):t.texImage2D(r.TEXTURE_2D,0,de,S.width,S.height,0,W,oe,S.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ve&&Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,de,pe[0].width,pe[0].height,S.depth);for(let _e=0,Ce=pe.length;_e<Ce;_e++)J=pe[_e],x.format!==fn?W!==null?ve?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,J.width,J.height,S.depth,W,J.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,de,J.width,J.height,S.depth,0,J.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,J.width,J.height,S.depth,W,oe,J.data):t.texImage3D(r.TEXTURE_2D_ARRAY,_e,de,J.width,J.height,S.depth,0,W,oe,J.data)}else{ve&&Ee&&t.texStorage2D(r.TEXTURE_2D,ge,de,pe[0].width,pe[0].height);for(let _e=0,Ce=pe.length;_e<Ce;_e++)J=pe[_e],x.format!==fn?W!==null?ve?t.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,J.width,J.height,W,J.data):t.compressedTexImage2D(r.TEXTURE_2D,_e,de,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage2D(r.TEXTURE_2D,_e,0,0,J.width,J.height,W,oe,J.data):t.texImage2D(r.TEXTURE_2D,_e,de,J.width,J.height,0,W,oe,J.data)}else if(x.isDataArrayTexture)ve?(Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,de,S.width,S.height,S.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,W,oe,S.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,S.width,S.height,S.depth,0,W,oe,S.data);else if(x.isData3DTexture)ve?(Ee&&t.texStorage3D(r.TEXTURE_3D,ge,de,S.width,S.height,S.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,W,oe,S.data)):t.texImage3D(r.TEXTURE_3D,0,de,S.width,S.height,S.depth,0,W,oe,S.data);else if(x.isFramebufferTexture){if(Ee)if(ve)t.texStorage2D(r.TEXTURE_2D,ge,de,S.width,S.height);else{let _e=S.width,Ce=S.height;for(let lt=0;lt<ge;lt++)t.texImage2D(r.TEXTURE_2D,lt,de,_e,Ce,0,W,oe,null),_e>>=1,Ce>>=1}}else if(pe.length>0&&ee){ve&&Ee&&t.texStorage2D(r.TEXTURE_2D,ge,de,pe[0].width,pe[0].height);for(let _e=0,Ce=pe.length;_e<Ce;_e++)J=pe[_e],ve?t.texSubImage2D(r.TEXTURE_2D,_e,0,0,W,oe,J):t.texImage2D(r.TEXTURE_2D,_e,de,W,oe,J);x.generateMipmaps=!1}else ve?(Ee&&t.texStorage2D(r.TEXTURE_2D,ge,de,S.width,S.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,W,oe,S)):t.texImage2D(r.TEXTURE_2D,0,de,W,oe,S);y(x,ee)&&g(D),P.__version=U.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function re(M,x,C,D,R,U){let P=s.convert(C.format,C.colorSpace),N=s.convert(C.type),O=_(C.internalFormat,P,N,C.colorSpace);if(!n.get(x).__hasExternalTextures){let V=Math.max(1,x.width>>U),j=Math.max(1,x.height>>U);R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY?t.texImage3D(R,U,O,V,j,x.depth,0,P,N,null):t.texImage2D(R,U,O,V,j,0,P,N,null)}t.bindFramebuffer(r.FRAMEBUFFER,M),z(x)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,D,R,n.get(C).__webglTexture,0,q(x)):(R===r.TEXTURE_2D||R>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,D,R,n.get(C).__webglTexture,U),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(M,x,C){if(r.bindRenderbuffer(r.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let D=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(C||z(x)){let R=x.depthTexture;R&&R.isDepthTexture&&(R.type===qn?D=r.DEPTH_COMPONENT32F:R.type===Yn&&(D=r.DEPTH_COMPONENT24));let U=q(x);z(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U,D,x.width,x.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,U,D,x.width,x.height)}else r.renderbufferStorage(r.RENDERBUFFER,D,x.width,x.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){let D=q(x);C&&z(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,r.DEPTH24_STENCIL8,x.width,x.height):z(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,r.DEPTH24_STENCIL8,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,M)}else{let D=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let R=0;R<D.length;R++){let U=D[R],P=s.convert(U.format,U.colorSpace),N=s.convert(U.type),O=_(U.internalFormat,P,N,U.colorSpace),V=q(x);C&&z(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,V,O,x.width,x.height):z(x)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V,O,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,O,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ne(M){let x=n.get(M),C=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");(function(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(R.depthTexture).__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);let U=n.get(R.depthTexture).__webglTexture,P=q(R);if(R.depthTexture.format===xi)z(R)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,U,0,P):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,U,0);else{if(R.depthTexture.format!==ar)throw new Error("Unknown depthTexture format");z(R)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,U,0,P):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,U,0)}})(x.__webglFramebuffer,M)}else if(C){x.__webglDepthbuffer=[];for(let D=0;D<6;D++)t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[D]),x.__webglDepthbuffer[D]=r.createRenderbuffer(),Q(x.__webglDepthbuffer[D],M,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),Q(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function q(M){return Math.min(i.maxSamples,M.samples)}function z(M){let x=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function G(M,x){let C=M.colorSpace,D=M.format,R=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===No||C!==On&&C!==gn&&(je.getTransfer(C)===Qe?o===!1?e.has("EXT_sRGB")===!0&&D===fn?(M.format=No,M.minFilter=nn,M.generateMipmaps=!1):x=Js.sRGBToLinear(x):D===fn&&R===_i||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),x}this.allocateTextureUnit=function(){let M=B;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),B+=1,M},this.resetTextureUnits=function(){B=0},this.setTexture2D=k,this.setTexture2DArray=function(M,x){let C=n.get(M);M.version>0&&C.__version!==M.version?he(C,M,x):t.bindTexture(r.TEXTURE_2D_ARRAY,C.__webglTexture,r.TEXTURE0+x)},this.setTexture3D=function(M,x){let C=n.get(M);M.version>0&&C.__version!==M.version?he(C,M,x):t.bindTexture(r.TEXTURE_3D,C.__webglTexture,r.TEXTURE0+x)},this.setTextureCube=function(M,x){let C=n.get(M);M.version>0&&C.__version!==M.version?(function(D,R,U){if(R.image.length!==6)return;let P=ie(D,R),N=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+U);let O=n.get(N);if(N.version!==O.__version||P===!0){t.activeTexture(r.TEXTURE0+U);let V=je.getPrimaries(je.workingColorSpace),j=R.colorSpace===gn?null:je.getPrimaries(R.colorSpace),S=R.colorSpace===gn||V===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);let ee=R.isCompressedTexture||R.image[0].isCompressedTexture,W=R.image[0]&&R.image[0].isDataTexture,J=[];for(let xe=0;xe<6;xe++)J[xe]=ee||W?W?R.image[xe].image:R.image[xe]:v(R.image[xe],!1,!0,i.maxCubemapSize),J[xe]=G(R,J[xe]);let oe=J[0],de=m(oe)||o,pe=s.convert(R.format,R.colorSpace),ve=s.convert(R.type),Ee=_(R.internalFormat,pe,ve,R.colorSpace),ge=o&&R.isVideoTexture!==!0,_e=O.__version===void 0||P===!0,Ce,lt=E(R,oe,de);if(X(r.TEXTURE_CUBE_MAP,R,de),ee){ge&&_e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,lt,Ee,oe.width,oe.height);for(let xe=0;xe<6;xe++){Ce=J[xe].mipmaps;for(let Oe=0;Oe<Ce.length;Oe++){let Le=Ce[Oe];R.format!==fn?pe!==null?ge?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe,0,0,Le.width,Le.height,pe,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe,Ee,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe,0,0,Le.width,Le.height,pe,ve,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe,Ee,Le.width,Le.height,0,pe,ve,Le.data)}}}else{Ce=R.mipmaps,ge&&_e&&(Ce.length>0&&lt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,lt,Ee,J[0].width,J[0].height));for(let xe=0;xe<6;xe++)if(W){ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,J[xe].width,J[xe].height,pe,ve,J[xe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ee,J[xe].width,J[xe].height,0,pe,ve,J[xe].data);for(let Oe=0;Oe<Ce.length;Oe++){let Le=Ce[Oe].image[xe].image;ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe+1,0,0,Le.width,Le.height,pe,ve,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe+1,Ee,Le.width,Le.height,0,pe,ve,Le.data)}}else{ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,pe,ve,J[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ee,pe,ve,J[xe]);for(let Oe=0;Oe<Ce.length;Oe++){let Le=Ce[Oe];ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe+1,0,0,pe,ve,Le.image[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe+1,Ee,pe,ve,Le.image[xe])}}}y(R,de)&&g(r.TEXTURE_CUBE_MAP),O.__version=N.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version})(C,M,x):t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+x)},this.rebindTextures=function(M,x,C){let D=n.get(M);x!==void 0&&re(D.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),C!==void 0&&ne(M)},this.setupRenderTarget=function(M){let x=M.texture,C=n.get(M),D=n.get(x);M.addEventListener("dispose",w),M.isWebGLMultipleRenderTargets!==!0&&(D.__webglTexture===void 0&&(D.__webglTexture=r.createTexture()),D.__version=x.version,a.memory.textures++);let R=M.isWebGLCubeRenderTarget===!0,U=M.isWebGLMultipleRenderTargets===!0,P=m(M)||o;if(R){C.__webglFramebuffer=[];for(let N=0;N<6;N++)if(o&&x.mipmaps&&x.mipmaps.length>0){C.__webglFramebuffer[N]=[];for(let O=0;O<x.mipmaps.length;O++)C.__webglFramebuffer[N][O]=r.createFramebuffer()}else C.__webglFramebuffer[N]=r.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){C.__webglFramebuffer=[];for(let N=0;N<x.mipmaps.length;N++)C.__webglFramebuffer[N]=r.createFramebuffer()}else C.__webglFramebuffer=r.createFramebuffer();if(U)if(i.drawBuffers){let N=M.texture;for(let O=0,V=N.length;O<V;O++){let j=n.get(N[O]);j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&z(M)===!1){let N=U?x:[x];C.__webglMultisampledFramebuffer=r.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let O=0;O<N.length;O++){let V=N[O];C.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,C.__webglColorRenderbuffer[O]);let j=s.convert(V.format,V.colorSpace),S=s.convert(V.type),ee=_(V.internalFormat,j,S,V.colorSpace,M.isXRRenderTarget===!0),W=q(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,W,ee,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,C.__webglColorRenderbuffer[O])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=r.createRenderbuffer(),Q(C.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(R){t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture),X(r.TEXTURE_CUBE_MAP,x,P);for(let N=0;N<6;N++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let O=0;O<x.mipmaps.length;O++)re(C.__webglFramebuffer[N][O],M,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+N,O);else re(C.__webglFramebuffer[N],M,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);y(x,P)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){let N=M.texture;for(let O=0,V=N.length;O<V;O++){let j=N[O],S=n.get(j);t.bindTexture(r.TEXTURE_2D,S.__webglTexture),X(r.TEXTURE_2D,j,P),re(C.__webglFramebuffer,M,j,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,0),y(j,P)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let N=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?N=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,D.__webglTexture),X(N,x,P),o&&x.mipmaps&&x.mipmaps.length>0)for(let O=0;O<x.mipmaps.length;O++)re(C.__webglFramebuffer[O],M,x,r.COLOR_ATTACHMENT0,N,O);else re(C.__webglFramebuffer,M,x,r.COLOR_ATTACHMENT0,N,0);y(x,P)&&g(N),t.unbindTexture()}M.depthBuffer&&ne(M)},this.updateRenderTargetMipmap=function(M){let x=m(M)||o,C=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let D=0,R=C.length;D<R;D++){let U=C[D];if(y(U,x)){let P=M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,N=n.get(U).__webglTexture;t.bindTexture(P,N),g(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(M){if(o&&M.samples>0&&z(M)===!1){let x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],C=M.width,D=M.height,R=r.COLOR_BUFFER_BIT,U=[],P=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,N=n.get(M),O=M.isWebGLMultipleRenderTargets===!0;if(O)for(let V=0;V<x.length;V++)t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,N.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let V=0;V<x.length;V++){U.push(r.COLOR_ATTACHMENT0+V),M.depthBuffer&&U.push(P);let j=N.__ignoreDepthValues!==void 0&&N.__ignoreDepthValues;if(j===!1&&(M.depthBuffer&&(R|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&(R|=r.STENCIL_BUFFER_BIT)),O&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,N.__webglColorRenderbuffer[V]),j===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[P]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])),O){let S=n.get(x[V]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,S,0)}r.blitFramebuffer(0,0,C,D,0,0,C,D,R,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,U)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),O)for(let V=0;V<x.length;V++){t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,N.__webglColorRenderbuffer[V]);let j=n.get(x[V]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,N.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D,j,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=re,this.useMultisampledRTT=z}function Hp(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=je.getTransfer(s);if(i===_i)return r.UNSIGNED_BYTE;if(i===jh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Yh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===Ol)return r.UNSIGNED_SHORT;if(i===Xh)return r.INT;if(i===Yn)return r.UNSIGNED_INT;if(i===qn)return r.FLOAT;if(i===bi)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===fn)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===xi)return r.DEPTH_COMPONENT;if(i===ar)return r.DEPTH_STENCIL;if(i===No)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===qh)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===Zh)return r.RG_INTEGER;if(i===Jh)return r.RGBA_INTEGER;if(i===Wa||i===Xa||i===ja||i===Ya)if(o===Qe){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===Wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===Wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===uc||i===dc||i===pc||i===mc){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===uc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===Kh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===fc||i===gc){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===fc)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===gc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===vc||i===_c||i===yc||i===xc||i===Mc||i===bc||i===Sc||i===Ec||i===Tc||i===wc||i===Ac||i===Rc||i===Cc||i===Pc){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===vc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ac)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===qa||i===Lc||i===Ic){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===qa)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===Dc||i===Nc||i===Uc){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===qa)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===yi?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var Zo=class extends at{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ye=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},kp={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),y=this._getHandJoint(c,v);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jo=class extends yn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,v=t.getContextAttributes(),m=null,y=null,g=[],_=[],E=new se,A=null,T=new at;T.layers.enable(1),T.viewport=new We;let w=new at;w.layers.enable(2),w.viewport=new We;let F=[T,w],B=new Zo;B.layers.enable(1),B.layers.enable(2);let k=null,Y=null;function I(q){let z=_.indexOf(q.inputSource);if(z===-1)return;let G=g[z];G!==void 0&&(G.update(q.inputSource,q.frame,c||a),G.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",X);for(let q=0;q<g.length;q++){let z=_[q];z!==null&&(_[q]=null,g[q].disconnect(z))}k=null,Y=null,e.setRenderTarget(m),p=null,u=null,d=null,i=null,y=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}function X(q){for(let z=0;z<q.removed.length;z++){let G=q.removed[z],M=_.indexOf(G);M>=0&&(_[M]=null,g[M].disconnect(G))}for(let z=0;z<q.added.length;z++){let G=q.added[z],M=_.indexOf(G);if(M===-1){for(let C=0;C<g.length;C++){if(C>=_.length){_.push(G),M=C;break}if(_[C]===null){_[C]=G,M=C;break}}if(M===-1)break}let x=g[M];x&&x.connect(G)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let z=g[q];return z===void 0&&(z=new Fr,g[q]=z),z.getTargetRaySpace()},this.getControllerGrip=function(q){let z=g[q];return z===void 0&&(z=new Fr,g[q]=z),z.getGripSpace()},this.getHand=function(q){let z=g[q];return z===void 0&&(z=new Fr,g[q]=z),z.getHandSpace()},this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let z={antialias:i.renderState.layers!==void 0||v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new sn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let z=null,G=null,M=null;v.depth&&(M=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=v.stencil?ar:xi,G=v.stencil?yi:Yn);let x={colorFormat:t.RGBA8,depthFormat:M,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(x),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new sn(u.textureWidth,u.textureHeight,{format:fn,type:_i,depthTexture:new sa(u.textureWidth,u.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let ie=new b,he=new b;function re(q,z){z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;B.near=w.near=T.near=q.near,B.far=w.far=T.far=q.far,k===B.near&&Y===B.far||(i.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,Y=B.far);let z=q.parent,G=B.cameras;re(B,z);for(let M=0;M<G.length;M++)re(G[M],z);G.length===2?(function(M,x,C){ie.setFromMatrixPosition(x.matrixWorld),he.setFromMatrixPosition(C.matrixWorld);let D=ie.distanceTo(he),R=x.projectionMatrix.elements,U=C.projectionMatrix.elements,P=R[14]/(R[10]-1),N=R[14]/(R[10]+1),O=(R[9]+1)/R[5],V=(R[9]-1)/R[5],j=(R[8]-1)/R[0],S=(U[8]+1)/U[0],ee=P*j,W=P*S,J=D/(-j+S),oe=J*-j;x.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(oe),M.translateZ(J),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert();let de=P+J,pe=N+J,ve=ee-oe,Ee=W+(D-oe),ge=O*N/pe*de,_e=V*N/pe*de;M.projectionMatrix.makePerspective(ve,Ee,ge,_e,de,pe),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()})(B,T,w):B.projectionMatrix.copy(T.projectionMatrix),(function(M,x,C){C===null?M.matrix.copy(x.matrixWorld):(M.matrix.copy(C.matrixWorld),M.matrix.invert(),M.matrix.multiply(x.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(x.projectionMatrix),M.projectionMatrixInverse.copy(x.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*lr*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)})(q,B,z)},this.getCamera=function(){return B},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let Q=null,ne=new nu;ne.setAnimationLoop((function(q,z){if(h=z.getViewerPose(c||a),f=z,h!==null){let G=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let M=!1;G.length!==B.cameras.length&&(B.cameras.length=0,M=!0);for(let x=0;x<G.length;x++){let C=G[x],D=null;if(p!==null)D=p.getViewport(C);else{let U=d.getViewSubImage(u,C);D=U.viewport,x===0&&(e.setRenderTargetTextures(y,U.colorTexture,u.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(y))}let R=F[x];R===void 0&&(R=new at,R.layers.enable(x),R.viewport=new We,F[x]=R),R.matrix.fromArray(C.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(C.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(D.x,D.y,D.width,D.height),x===0&&(B.matrix.copy(R.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),M===!0&&B.cameras.push(R)}}for(let G=0;G<g.length;G++){let M=_[G],x=g[G];M!==null&&x!==void 0&&x.update(M,z,c||a)}Q&&Q(q,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),f=null})),this.setAnimationLoop=function(q){Q=q},this.dispose=function(){}}};function Gp(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Lt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Lt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,tu(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Vp(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(d,u,p,f){let v=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let y=f[m];if(typeof v=="number"||typeof v=="boolean"){if(y!==v)return f[m]=v,!0}else if(y.equals(v)===!1)return y.copy(v),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[u.id]),delete i[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=i[d.id];p===void 0&&((function(m){let y=m.uniforms,g=0,_=16;for(let A=0,T=y.length;A<T;A++){let w=Array.isArray(y[A])?y[A]:[y[A]];for(let F=0,B=w.length;F<B;F++){let k=w[F],Y=Array.isArray(k.value)?k.value:[k.value];for(let I=0,Z=Y.length;I<Z;I++){let X=c(Y[I]),ie=g%_;ie!==0&&_-ie<X.boundary&&(g+=_-ie),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=g,g+=X.storage}}}let E=g%_;E>0&&(g+=_-E),m.__size=g,m.__cache={}})(d),p=(function(m){let y=(function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=y;let g=r.createBuffer(),_=m.__size,E=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,_,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,g),g})(d),i[d.id]=p,d.addEventListener("dispose",h));let f=u.program;n.updateUBOMapping(d,f);let v=e.render.frame;s[d.id]!==v&&((function(m){let y=i[m.id],g=m.uniforms,_=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,A=g.length;E<A;E++){let T=Array.isArray(g[E])?g[E]:[g[E]];for(let w=0,F=T.length;w<F;w++){let B=T[w];if(l(B,E,w,_)===!0){let k=B.__offset,Y=Array.isArray(B.value)?B.value:[B.value],I=0;for(let Z=0;Z<Y.length;Z++){let X=Y[Z],ie=c(X);typeof X=="number"||typeof X=="boolean"?(B.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,k+I,B.__data)):X.isMatrix3?(B.__data[0]=X.elements[0],B.__data[1]=X.elements[1],B.__data[2]=X.elements[2],B.__data[3]=0,B.__data[4]=X.elements[3],B.__data[5]=X.elements[4],B.__data[6]=X.elements[5],B.__data[7]=0,B.__data[8]=X.elements[6],B.__data[9]=X.elements[7],B.__data[10]=X.elements[8],B.__data[11]=0):(X.toArray(B.__data,I),I+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(d),s[d.id]=v)},dispose:function(){for(let d in i)r.deleteBuffer(i[d]);a=[],i={},s={}}}}var Si=class{constructor(e={}){let{canvas:t=Qu(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e,u;this.isWebGLRenderer=!0,u=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),v=null,m=null,y=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;let _=this,E=!1,A=0,T=0,w=null,F=-1,B=null,k=new We,Y=new We,I=null,Z=new be(0),X=0,ie=t.width,he=t.height,re=1,Q=null,ne=null,q=new We(0,0,ie,he),z=new We(0,0,ie,he),G=!1,M=new hr,x=!1,C=!1,D=null,R=new Re,U=new se,P=new b,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function O(){return w===null?re:1}let V,j,S,ee,W,J,oe,de,pe,ve,Ee,ge,_e,Ce,lt,xe,Oe,Le,ri,It,H,fe,Ae,Ge,K=n;function Dt(L,$){for(let te=0;te<L.length;te++){let le=L[te],ae=t.getContext(le,$);if(ae!==null)return ae}return null}try{let L={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ss,!1),t.addEventListener("webglcontextrestored",Er,!1),t.addEventListener("webglcontextcreationerror",Ht,!1),K===null){let $=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&$.shift(),K=Dt($,L),K===null)throw Dt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function gt(){V=new Ed(K),j=new xd(K,V,e),V.init(j),fe=new Hp(K,V,j),S=new Fp(K,V,j),ee=new Ad(K),W=new Cp,J=new zp(K,V,S,W,j,fe,ee),oe=new bd(_),de=new Sd(_),pe=new gd(K,j),Ae=new _d(K,V,pe,j),ve=new Td(K,pe,ee,Ae),Ee=new Ld(K,ve,pe,ee),ri=new Pd(K,j,J),xe=new Md(W),ge=new Rp(_,oe,de,V,j,Ae,xe),_e=new Gp(_,W),Ce=new Lp,lt=new Op(V,j),Le=new vd(_,oe,de,S,Ee,u,l),Oe=new Bp(_,Ee,j),Ge=new Vp(K,ee,j,S),It=new yd(K,V,ee,j),H=new wd(K,V,ee,j),ee.programs=ge.programs,_.capabilities=j,_.extensions=V,_.properties=W,_.renderLists=Ce,_.shadowMap=Oe,_.state=S,_.info=ee}gt();let _t=new Jo(_,K);function ss(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Er(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let L=ee.autoReset,$=Oe.enabled,te=Oe.autoUpdate,le=Oe.needsUpdate,ae=Oe.type;gt(),ee.autoReset=L,Oe.enabled=$,Oe.autoUpdate=te,Oe.needsUpdate=le,Oe.type=ae}function Ht(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function kt(L){let $=L.target;$.removeEventListener("dispose",kt),(function(te){(function(le){let ae=W.get(le).programs;ae!==void 0&&(ae.forEach((function(me){ge.releaseProgram(me)})),le.isShaderMaterial&&ge.releaseShaderCache(le))})(te),W.remove(te)})($)}function Di(L,$,te){L.transparent===!0&&L.side===2&&L.forceSinglePass===!1?(L.side=Lt,L.needsUpdate=!0,os(L,$,te),L.side=$n,L.needsUpdate=!0,os(L,$,te),L.side=2):os(L,$,te)}this.xr=_t,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let L=V.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=V.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(L){L!==void 0&&(re=L,this.setSize(ie,he,!1))},this.getSize=function(L){return L.set(ie,he)},this.setSize=function(L,$,te=!0){_t.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ie=L,he=$,t.width=Math.floor(L*re),t.height=Math.floor($*re),te===!0&&(t.style.width=L+"px",t.style.height=$+"px"),this.setViewport(0,0,L,$))},this.getDrawingBufferSize=function(L){return L.set(ie*re,he*re).floor()},this.setDrawingBufferSize=function(L,$,te){ie=L,he=$,re=te,t.width=Math.floor(L*te),t.height=Math.floor($*te),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(k)},this.getViewport=function(L){return L.copy(q)},this.setViewport=function(L,$,te,le){L.isVector4?q.set(L.x,L.y,L.z,L.w):q.set(L,$,te,le),S.viewport(k.copy(q).multiplyScalar(re).floor())},this.getScissor=function(L){return L.copy(z)},this.setScissor=function(L,$,te,le){L.isVector4?z.set(L.x,L.y,L.z,L.w):z.set(L,$,te,le),S.scissor(Y.copy(z).multiplyScalar(re).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(L){S.setScissorTest(G=L)},this.setOpaqueSort=function(L){Q=L},this.setTransparentSort=function(L){ne=L},this.getClearColor=function(L){return L.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(L=!0,$=!0,te=!0){let le=0;if(L){let ae=!1;if(w!==null){let me=w.texture.format;ae=me===Jh||me===Zh||me===qh}if(ae){let me=w.texture.type,Me=me===_i||me===Yn||me===Ol||me===yi||me===jh||me===Yh,Te=Le.getClearColor(),Ie=Le.getClearAlpha(),Ue=Te.r,Be=Te.g,Fe=Te.b;Me?(p[0]=Ue,p[1]=Be,p[2]=Fe,p[3]=Ie,K.clearBufferuiv(K.COLOR,0,p)):(f[0]=Ue,f[1]=Be,f[2]=Fe,f[3]=Ie,K.clearBufferiv(K.COLOR,0,f))}else le|=K.COLOR_BUFFER_BIT}$&&(le|=K.DEPTH_BUFFER_BIT),te&&(le|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ss,!1),t.removeEventListener("webglcontextrestored",Er,!1),t.removeEventListener("webglcontextcreationerror",Ht,!1),Ce.dispose(),lt.dispose(),W.dispose(),oe.dispose(),de.dispose(),Ee.dispose(),Ae.dispose(),Ge.dispose(),ge.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",kn),_t.removeEventListener("sessionend",si),D&&(D.dispose(),D=null),ai.stop()},this.renderBufferDirect=function(L,$,te,le,ae,me){$===null&&($=N);let Me=ae.isMesh&&ae.matrixWorld.determinant()<0,Te=(function(ut,Gt,Pt,ze,He){Gt.isScene!==!0&&(Gt=N),J.resetTextureUnits();let Tr=Gt.fog,za=ze.isMeshStandardMaterial?Gt.environment:null,Ou=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:On,ls=(ze.isMeshStandardMaterial?de:oe).get(ze.envMap||za),Bu=ze.vertexColors===!0&&!!Pt.attributes.color&&Pt.attributes.color.itemSize===4,Fu=!!Pt.attributes.tangent&&(!!ze.normalMap||ze.anisotropy>0),zu=!!Pt.morphAttributes.position,Hu=!!Pt.morphAttributes.normal,ku=!!Pt.morphAttributes.color,ac=Jn;ze.toneMapped&&(w!==null&&w.isXRRenderTarget!==!0||(ac=_.toneMapping));let oc=Pt.morphAttributes.position||Pt.morphAttributes.normal||Pt.morphAttributes.color,Gu=oc!==void 0?oc.length:0,Ve=W.get(ze),Vu=m.state.lights;if(x===!0&&(C===!0||ut!==B)){let Vt=ut===B&&ze.id===F;xe.setState(ze,ut,Vt)}let Kt=!1;ze.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==Vu.state.version||Ve.outputColorSpace!==Ou||He.isBatchedMesh&&Ve.batching===!1?Kt=!0:He.isBatchedMesh||Ve.batching!==!0?He.isInstancedMesh&&Ve.instancing===!1?Kt=!0:He.isInstancedMesh||Ve.instancing!==!0?He.isSkinnedMesh&&Ve.skinning===!1?Kt=!0:He.isSkinnedMesh||Ve.skinning!==!0?He.isInstancedMesh&&Ve.instancingColor===!0&&He.instanceColor===null||He.isInstancedMesh&&Ve.instancingColor===!1&&He.instanceColor!==null||Ve.envMap!==ls||ze.fog===!0&&Ve.fog!==Tr?Kt=!0:Ve.numClippingPlanes===void 0||Ve.numClippingPlanes===xe.numPlanes&&Ve.numIntersection===xe.numIntersection?(Ve.vertexAlphas!==Bu||Ve.vertexTangents!==Fu||Ve.morphTargets!==zu||Ve.morphNormals!==Hu||Ve.morphColors!==ku||Ve.toneMapping!==ac||j.isWebGL2===!0&&Ve.morphTargetsCount!==Gu)&&(Kt=!0):Kt=!0:Kt=!0:Kt=!0:Kt=!0:(Kt=!0,Ve.__version=ze.version);let li=Ve.currentProgram;Kt===!0&&(li=os(ze,Gt,He));let lc=!1,wr=!1,Ha=!1,xt=li.getUniforms(),ci=Ve.uniforms;if(S.useProgram(li.program)&&(lc=!0,wr=!0,Ha=!0),ze.id!==F&&(F=ze.id,wr=!0),lc||B!==ut){xt.setValue(K,"projectionMatrix",ut.projectionMatrix),xt.setValue(K,"viewMatrix",ut.matrixWorldInverse);let Vt=xt.map.cameraPosition;Vt!==void 0&&Vt.setValue(K,P.setFromMatrixPosition(ut.matrixWorld)),j.logarithmicDepthBuffer&&xt.setValue(K,"logDepthBufFC",2/(Math.log(ut.far+1)/Math.LN2)),(ze.isMeshPhongMaterial||ze.isMeshToonMaterial||ze.isMeshLambertMaterial||ze.isMeshBasicMaterial||ze.isMeshStandardMaterial||ze.isShaderMaterial)&&xt.setValue(K,"isOrthographic",ut.isOrthographicCamera===!0),B!==ut&&(B=ut,wr=!0,Ha=!0)}if(He.isSkinnedMesh){xt.setOptional(K,He,"bindMatrix"),xt.setOptional(K,He,"bindMatrixInverse");let Vt=He.skeleton;Vt&&(j.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),xt.setValue(K,"boneTexture",Vt.boneTexture,J)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}He.isBatchedMesh&&(xt.setOptional(K,He,"batchingTexture"),xt.setValue(K,"batchingTexture",He._matricesTexture,J));let ka=Pt.morphAttributes;(ka.position!==void 0||ka.normal!==void 0||ka.color!==void 0&&j.isWebGL2===!0)&&ri.update(He,Pt,li),(wr||Ve.receiveShadow!==He.receiveShadow)&&(Ve.receiveShadow=He.receiveShadow,xt.setValue(K,"receiveShadow",He.receiveShadow)),ze.isMeshGouraudMaterial&&ze.envMap!==null&&(ci.envMap.value=ls,ci.flipEnvMap.value=ls.isCubeTexture&&ls.isRenderTargetTexture===!1?-1:1),wr&&(xt.setValue(K,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&($t=Ha,(pn=ci).ambientLightColor.needsUpdate=$t,pn.lightProbe.needsUpdate=$t,pn.directionalLights.needsUpdate=$t,pn.directionalLightShadows.needsUpdate=$t,pn.pointLights.needsUpdate=$t,pn.pointLightShadows.needsUpdate=$t,pn.spotLights.needsUpdate=$t,pn.spotLightShadows.needsUpdate=$t,pn.rectAreaLights.needsUpdate=$t,pn.hemisphereLights.needsUpdate=$t),Tr&&ze.fog===!0&&_e.refreshFogUniforms(ci,Tr),_e.refreshMaterialUniforms(ci,ze,re,he,D),ir.upload(K,rc(Ve),ci,J));var pn,$t;if(ze.isShaderMaterial&&ze.uniformsNeedUpdate===!0&&(ir.upload(K,rc(Ve),ci,J),ze.uniformsNeedUpdate=!1),ze.isSpriteMaterial&&xt.setValue(K,"center",He.center),xt.setValue(K,"modelViewMatrix",He.modelViewMatrix),xt.setValue(K,"normalMatrix",He.normalMatrix),xt.setValue(K,"modelMatrix",He.matrixWorld),ze.isShaderMaterial||ze.isRawShaderMaterial){let Vt=ze.uniformsGroups;for(let Ga=0,Wu=Vt.length;Ga<Wu;Ga++)if(j.isWebGL2){let cc=Vt[Ga];Ge.update(cc,li),Ge.bind(cc,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li})(L,$,te,le,ae);S.setMaterial(le,Me);let Ie=te.index,Ue=1;if(le.wireframe===!0){if(Ie=ve.getWireframeAttribute(te),Ie===void 0)return;Ue=2}let Be=te.drawRange,Fe=te.attributes.position,nt=Be.start*Ue,Jt=(Be.start+Be.count)*Ue;me!==null&&(nt=Math.max(nt,me.start*Ue),Jt=Math.min(Jt,(me.start+me.count)*Ue)),Ie!==null?(nt=Math.max(nt,0),Jt=Math.min(Jt,Ie.count)):Fe!=null&&(nt=Math.max(nt,0),Jt=Math.min(Jt,Fe.count));let Rn=Jt-nt;if(Rn<0||Rn===1/0)return;let oi;Ae.setup(ae,le,Te,te,Ie);let it=It;if(Ie!==null&&(oi=pe.get(Ie),it=H,it.setIndex(oi)),ae.isMesh)le.wireframe===!0?(S.setLineWidth(le.wireframeLinewidth*O()),it.setMode(K.LINES)):it.setMode(K.TRIANGLES);else if(ae.isLine){let ut=le.linewidth;ut===void 0&&(ut=1),S.setLineWidth(ut*O()),ae.isLineSegments?it.setMode(K.LINES):ae.isLineLoop?it.setMode(K.LINE_LOOP):it.setMode(K.LINE_STRIP)}else ae.isPoints?it.setMode(K.POINTS):ae.isSprite&&it.setMode(K.TRIANGLES);if(ae.isBatchedMesh)it.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else if(ae.isInstancedMesh)it.renderInstances(nt,Rn,ae.count);else if(te.isInstancedBufferGeometry){let ut=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Gt=Math.min(te.instanceCount,ut);it.renderInstances(nt,Rn,Gt)}else it.render(nt,Rn)},this.compile=function(L,$,te=null){te===null&&(te=L),m=lt.get(te),m.init(),g.push(m),te.traverseVisible((function(ae){ae.isLight&&ae.layers.test($.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))})),L!==te&&L.traverseVisible((function(ae){ae.isLight&&ae.layers.test($.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))})),m.setupLights(_._useLegacyLights);let le=new Set;return L.traverse((function(ae){let me=ae.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){let Te=me[Me];Di(Te,te,ae),le.add(Te)}else Di(me,te,ae),le.add(me)})),g.pop(),m=null,le},this.compileAsync=function(L,$,te=null){let le=this.compile(L,$,te);return new Promise((ae=>{function me(){le.forEach((function(Me){W.get(Me).currentProgram.isReady()&&le.delete(Me)})),le.size!==0?setTimeout(me,10):ae(L)}V.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)}))};let An=null;function kn(){ai.stop()}function si(){ai.start()}let ai=new nu;function tc(L,$,te,le){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||M.intersectsSprite(L)){le&&P.setFromMatrixPosition(L.matrixWorld).applyMatrix4(R);let me=Ee.update(L),Me=L.material;Me.visible&&v.push(L,me,Me,te,P.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||M.intersectsObject(L))){let me=Ee.update(L),Me=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),P.copy(L.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),P.copy(me.boundingSphere.center)),P.applyMatrix4(L.matrixWorld).applyMatrix4(R)),Array.isArray(Me)){let Te=me.groups;for(let Ie=0,Ue=Te.length;Ie<Ue;Ie++){let Be=Te[Ie],Fe=Me[Be.materialIndex];Fe&&Fe.visible&&v.push(L,me,Fe,te,P.z,Be)}}else Me.visible&&v.push(L,me,Me,te,P.z,null)}}let ae=L.children;for(let me=0,Me=ae.length;me<Me;me++)tc(ae[me],$,te,le)}function nc(L,$,te,le){let ae=L.opaque,me=L.transmissive,Me=L.transparent;m.setupLightsView(te),x===!0&&xe.setGlobalState(_.clippingPlanes,te),me.length>0&&(function(Te,Ie,Ue,Be){if((Ue.isScene===!0?Ue.overrideMaterial:null)!==null)return;let nt=j.isWebGL2;D===null&&(D=new sn(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")?bi:_i,minFilter:Gs,samples:nt?4:0})),_.getDrawingBufferSize(U),nt?D.setSize(U.x,U.y):D.setSize(Zs(U.x),Zs(U.y));let Jt=_.getRenderTarget();_.setRenderTarget(D),_.getClearColor(Z),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear();let Rn=_.toneMapping;_.toneMapping=Jn,as(Te,Ue,Be),J.updateMultisampleRenderTarget(D),J.updateRenderTargetMipmap(D);let oi=!1;for(let it=0,ut=Ie.length;it<ut;it++){let Gt=Ie[it],Pt=Gt.object,ze=Gt.geometry,He=Gt.material,Tr=Gt.group;if(He.side===2&&Pt.layers.test(Be.layers)){let za=He.side;He.side=Lt,He.needsUpdate=!0,ic(Pt,Ue,Be,ze,He,Tr),He.side=za,He.needsUpdate=!0,oi=!0}}oi===!0&&(J.updateMultisampleRenderTarget(D),J.updateRenderTargetMipmap(D)),_.setRenderTarget(Jt),_.setClearColor(Z,X),_.toneMapping=Rn})(ae,me,$,te),le&&S.viewport(k.copy(le)),ae.length>0&&as(ae,$,te),me.length>0&&as(me,$,te),Me.length>0&&as(Me,$,te),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function as(L,$,te){let le=$.isScene===!0?$.overrideMaterial:null;for(let ae=0,me=L.length;ae<me;ae++){let Me=L[ae],Te=Me.object,Ie=Me.geometry,Ue=le===null?Me.material:le,Be=Me.group;Te.layers.test(te.layers)&&ic(Te,$,te,Ie,Ue,Be)}}function ic(L,$,te,le,ae,me){L.onBeforeRender(_,$,te,le,ae,me),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ae.onBeforeRender(_,$,te,le,L,me),ae.transparent===!0&&ae.side===2&&ae.forceSinglePass===!1?(ae.side=Lt,ae.needsUpdate=!0,_.renderBufferDirect(te,$,le,ae,L,me),ae.side=$n,ae.needsUpdate=!0,_.renderBufferDirect(te,$,le,ae,L,me),ae.side=2):_.renderBufferDirect(te,$,le,ae,L,me),L.onAfterRender(_,$,te,le,ae,me)}function os(L,$,te){$.isScene!==!0&&($=N);let le=W.get(L),ae=m.state.lights,me=m.state.shadowsArray,Me=ae.state.version,Te=ge.getParameters(L,ae.state,me,$,te),Ie=ge.getProgramCacheKey(Te),Ue=le.programs;le.environment=L.isMeshStandardMaterial?$.environment:null,le.fog=$.fog,le.envMap=(L.isMeshStandardMaterial?de:oe).get(L.envMap||le.environment),Ue===void 0&&(L.addEventListener("dispose",kt),Ue=new Map,le.programs=Ue);let Be=Ue.get(Ie);if(Be!==void 0){if(le.currentProgram===Be&&le.lightsStateVersion===Me)return sc(L,Te),Be}else Te.uniforms=ge.getUniforms(L),L.onBuild(te,Te,_),L.onBeforeCompile(Te,_),Be=ge.acquireProgram(Te,Ie),Ue.set(Ie,Be),le.uniforms=Te.uniforms;let Fe=le.uniforms;return(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(Fe.clippingPlanes=xe.uniform),sc(L,Te),le.needsLights=(function(nt){return nt.isMeshLambertMaterial||nt.isMeshToonMaterial||nt.isMeshPhongMaterial||nt.isMeshStandardMaterial||nt.isShadowMaterial||nt.isShaderMaterial&&nt.lights===!0})(L),le.lightsStateVersion=Me,le.needsLights&&(Fe.ambientLightColor.value=ae.state.ambient,Fe.lightProbe.value=ae.state.probe,Fe.directionalLights.value=ae.state.directional,Fe.directionalLightShadows.value=ae.state.directionalShadow,Fe.spotLights.value=ae.state.spot,Fe.spotLightShadows.value=ae.state.spotShadow,Fe.rectAreaLights.value=ae.state.rectArea,Fe.ltc_1.value=ae.state.rectAreaLTC1,Fe.ltc_2.value=ae.state.rectAreaLTC2,Fe.pointLights.value=ae.state.point,Fe.pointLightShadows.value=ae.state.pointShadow,Fe.hemisphereLights.value=ae.state.hemi,Fe.directionalShadowMap.value=ae.state.directionalShadowMap,Fe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Fe.spotShadowMap.value=ae.state.spotShadowMap,Fe.spotLightMatrix.value=ae.state.spotLightMatrix,Fe.spotLightMap.value=ae.state.spotLightMap,Fe.pointShadowMap.value=ae.state.pointShadowMap,Fe.pointShadowMatrix.value=ae.state.pointShadowMatrix),le.currentProgram=Be,le.uniformsList=null,Be}function rc(L){if(L.uniformsList===null){let $=L.currentProgram.getUniforms();L.uniformsList=ir.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function sc(L,$){let te=W.get(L);te.outputColorSpace=$.outputColorSpace,te.batching=$.batching,te.instancing=$.instancing,te.instancingColor=$.instancingColor,te.skinning=$.skinning,te.morphTargets=$.morphTargets,te.morphNormals=$.morphNormals,te.morphColors=$.morphColors,te.morphTargetsCount=$.morphTargetsCount,te.numClippingPlanes=$.numClippingPlanes,te.numIntersection=$.numClipIntersection,te.vertexAlphas=$.vertexAlphas,te.vertexTangents=$.vertexTangents,te.toneMapping=$.toneMapping}ai.setAnimationLoop((function(L){An&&An(L)})),typeof self!="undefined"&&ai.setContext(self),this.setAnimationLoop=function(L){An=L,_t.setAnimationLoop(L),L===null?ai.stop():ai.start()},_t.addEventListener("sessionstart",kn),_t.addEventListener("sessionend",si),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera($),$=_t.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,$,w),m=lt.get(L,g.length),m.init(),g.push(m),R.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),M.setFromProjectionMatrix(R),C=this.localClippingEnabled,x=xe.init(this.clippingPlanes,C),v=Ce.get(L,y.length),v.init(),y.push(v),tc(L,$,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Q,ne),this.info.render.frame++,x===!0&&xe.beginShadows();let te=m.state.shadowsArray;if(Oe.render(te,L,$),x===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Le.render(v,L),m.setupLights(_._useLegacyLights),$.isArrayCamera){let le=$.cameras;for(let ae=0,me=le.length;ae<me;ae++){let Me=le[ae];nc(v,L,Me,Me.viewport)}}else nc(v,L,$);w!==null&&(J.updateMultisampleRenderTarget(w),J.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(_,L,$),Ae.resetDefaultState(),F=-1,B=null,g.pop(),m=g.length>0?g[g.length-1]:null,y.pop(),v=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,$,te){W.get(L.texture).__webglTexture=$,W.get(L.depthTexture).__webglTexture=te;let le=W.get(L);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=te===void 0,le.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,$){let te=W.get(L);te.__webglFramebuffer=$,te.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,te=0){w=L,A=$,T=te;let le=!0,ae=null,me=!1,Me=!1;if(L){let Te=W.get(L);Te.__useDefaultFramebuffer!==void 0?(S.bindFramebuffer(K.FRAMEBUFFER,null),le=!1):Te.__webglFramebuffer===void 0?J.setupRenderTarget(L):Te.__hasExternalTextures&&J.rebindTextures(L,W.get(L.texture).__webglTexture,W.get(L.depthTexture).__webglTexture);let Ie=L.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);let Ue=W.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ae=Array.isArray(Ue[$])?Ue[$][te]:Ue[$],me=!0):ae=j.isWebGL2&&L.samples>0&&J.useMultisampledRTT(L)===!1?W.get(L).__webglMultisampledFramebuffer:Array.isArray(Ue)?Ue[te]:Ue,k.copy(L.viewport),Y.copy(L.scissor),I=L.scissorTest}else k.copy(q).multiplyScalar(re).floor(),Y.copy(z).multiplyScalar(re).floor(),I=G;if(S.bindFramebuffer(K.FRAMEBUFFER,ae)&&j.drawBuffers&&le&&S.drawBuffers(L,ae),S.viewport(k),S.scissor(Y),S.setScissorTest(I),me){let Te=W.get(L.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te.__webglTexture,te)}else if(Me){let Te=W.get(L.texture),Ie=$||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Te.__webglTexture,te||0,Ie)}F=-1},this.readRenderTargetPixels=function(L,$,te,le,ae,me,Me){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=W.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){S.bindFramebuffer(K.FRAMEBUFFER,Te);try{let Ie=L.texture,Ue=Ie.format,Be=Ie.type;if(Ue!==fn&&fe.convert(Ue)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Fe=Be===bi&&(V.has("EXT_color_buffer_half_float")||j.isWebGL2&&V.has("EXT_color_buffer_float"));if(!(Be===_i||fe.convert(Be)===K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)||Be===qn&&(j.isWebGL2||V.has("OES_texture_float")||V.has("WEBGL_color_buffer_float"))||Fe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");$>=0&&$<=L.width-le&&te>=0&&te<=L.height-ae&&K.readPixels($,te,le,ae,fe.convert(Ue),fe.convert(Be),me)}finally{let Ie=w!==null?W.get(w).__webglFramebuffer:null;S.bindFramebuffer(K.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(L,$,te=0){let le=Math.pow(2,-te),ae=Math.floor($.image.width*le),me=Math.floor($.image.height*le);J.setTexture2D($,0),K.copyTexSubImage2D(K.TEXTURE_2D,te,0,0,L.x,L.y,ae,me),S.unbindTexture()},this.copyTextureToTexture=function(L,$,te,le=0){let ae=$.image.width,me=$.image.height,Me=fe.convert(te.format),Te=fe.convert(te.type);J.setTexture2D(te,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,te.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,te.unpackAlignment),$.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,le,L.x,L.y,ae,me,Me,Te,$.image.data):$.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,le,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,Me,$.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,le,L.x,L.y,Me,Te,$.image),le===0&&te.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),S.unbindTexture()},this.copyTextureToTexture3D=function(L,$,te,le,ae=0){if(_.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let me=L.max.x-L.min.x+1,Me=L.max.y-L.min.y+1,Te=L.max.z-L.min.z+1,Ie=fe.convert(le.format),Ue=fe.convert(le.type),Be;if(le.isData3DTexture)J.setTexture3D(le,0),Be=K.TEXTURE_3D;else{if(!le.isDataArrayTexture&&!le.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");J.setTexture2DArray(le,0),Be=K.TEXTURE_2D_ARRAY}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,le.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,le.unpackAlignment);let Fe=K.getParameter(K.UNPACK_ROW_LENGTH),nt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Jt=K.getParameter(K.UNPACK_SKIP_PIXELS),Rn=K.getParameter(K.UNPACK_SKIP_ROWS),oi=K.getParameter(K.UNPACK_SKIP_IMAGES),it=te.isCompressedTexture?te.mipmaps[ae]:te.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,it.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,it.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,L.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,L.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,L.min.z),te.isDataTexture||te.isData3DTexture?K.texSubImage3D(Be,ae,$.x,$.y,$.z,me,Me,Te,Ie,Ue,it.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Be,ae,$.x,$.y,$.z,me,Me,Te,Ie,it.data)):K.texSubImage3D(Be,ae,$.x,$.y,$.z,me,Me,Te,Ie,Ue,it),K.pixelStorei(K.UNPACK_ROW_LENGTH,Fe),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,nt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Jt),K.pixelStorei(K.UNPACK_SKIP_ROWS,Rn),K.pixelStorei(K.UNPACK_SKIP_IMAGES,oi),ae===0&&le.generateMipmaps&&K.generateMipmap(Be),S.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?J.setTextureCube(L,0):L.isData3DTexture?J.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?J.setTexture2DArray(L,0):J.setTexture2D(L,0),S.unbindTexture()},this.resetState=function(){A=0,T=0,w=null,S.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bl?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===ba?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?Mi:$h}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mi?Ze:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ko=class extends Si{};Ko.prototype.isWebGL1Renderer=!0;var aa=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ur=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},$o=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Do,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tt=new b,oa=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jr=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ji,Ir=new b,Ki=new b,$i=new b,Qi=new se,Dr=new se,lu=new Re,Ls=new b,Nr=new b,Is=new b,Eh=new se,yo=new se,Th=new se,la=class extends dt{constructor(e=new jr){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new Je;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $o(t,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new oa(n,3,0,!1)),Ji.setAttribute("uv",new oa(n,2,3,!1))}this.geometry=Ji,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),lu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-$i.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Ds(Ls.set(-.5,-.5,0),$i,a,Ki,i,s),Ds(Nr.set(.5,-.5,0),$i,a,Ki,i,s),Ds(Is.set(.5,.5,0),$i,a,Ki,i,s),Eh.set(0,0),yo.set(1,0),Th.set(1,1);let o=e.ray.intersectTriangle(Ls,Nr,Is,!1,Ir);if(o===null&&(Ds(Nr.set(-.5,.5,0),$i,a,Ki,i,s),yo.set(0,1),o=e.ray.intersectTriangle(Ls,Is,Nr,!1,Ir),o===null))return;let l=e.ray.origin.distanceTo(Ir);l<e.near||l>e.far||t.push({distance:l,point:Ir.clone(),uv:Zn.getInterpolation(Ir,Ls,Nr,Is,Eh,yo,Th,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ds(r,e,t,n,i,s){Qi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Dr.x=s*Qi.x-i*Qi.y,Dr.y=i*Qi.x+s*Qi.y):Dr.copy(Qi),r.copy(e),r.x+=Dr.x,r.y+=Dr.y,r.applyMatrix4(lu)}var zm=new b,Hm=new b;var km=new b,Gm=new We,Vm=new We,Wm=new b,Xm=new Re,jm=new b,Ym=new Mn,qm=new Re,Zm=new Bn;var Jm=new Re,Km=new Re;var $m=new Re,Qm=new Re;var ef=new xn,tf=new Re,nf=new Ne,rf=new Mn;var Qo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var sf=new Re,af=new Re,of=new Re,lf=new Re,cf=new hr,hf=new xn,uf=new Mn,df=new b,pf=new Qo,mf=new Ne;var zn=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wh=new b,Ah=new b,Rh=new Re,xo=new Bn,Ns=new Mn,el=class extends dt{constructor(e=new Je,t=new zn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)wh.fromBufferAttribute(t,i-1),Ah.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=wh.distanceTo(Ah);e.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;Rh.copy(i).invert(),xo.copy(e.ray).applyMatrix4(Rh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new b,h=new b,d=new b,u=new b,p=this.isLineSegments?2:1,f=n.index,v=n.attributes.position;if(f!==null)for(let m=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count)-1;m<y;m+=p){let g=f.getX(m),_=f.getX(m+1);if(c.fromBufferAttribute(v,g),h.fromBufferAttribute(v,_),xo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}else for(let m=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count)-1;m<y;m+=p){if(c.fromBufferAttribute(v,m),h.fromBufferAttribute(v,m+1),xo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(u);g<e.near||g>e.far||t.push({distance:g,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}},Ch=new b,Ph=new b,Qn=class extends el{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ch.fromBufferAttribute(t,i),Ph.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ch.distanceTo(Ph);e.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ff=new Re,gf=new Bn,vf=new Mn,_f=new b;var ei=class extends Ot{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},jt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new se:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new b,i=[],s=[],a=[],o=new b,l=new Re;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new b)}s[0]=new b,a[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ht(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(ht(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yr=class extends jt{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new se,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tl=class extends Yr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hl(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,i(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Us=new b,Mo=new Hl,bo=new Hl,So=new Hl,nl=class extends jt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(Us.subVectors(i[0],i[1]).add(i[0]),o=Us);let d=i[c%s],u=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(Us.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=Us),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(l),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),Mo.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,f,v,m),bo.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,f,v,m),So.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,f,v,m)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),bo.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),So.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return n.set(Mo.calc(h),bo.calc(h),So.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lh(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function zr(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function Hr(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var ca=class extends jt{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,i.x,s.x,a.x,o.x),Hr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},il=class extends jt{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,i.x,s.x,a.x,o.x),Hr(e,i.y,s.y,a.y,o.y),Hr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends jt{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends jt{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends jt{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(zr(e,i.x,s.x,a.x),zr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends jt{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(zr(e,i.x,s.x,a.x),zr(e,i.y,s.y,a.y),zr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends jt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Lh(o,l.x,c.x,h.x,d.x),Lh(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new se().fromArray(i))}return this}},ma=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:nl,CubicBezierCurve:ca,CubicBezierCurve3:il,EllipseCurve:Yr,LineCurve:ha,LineCurve3:rl,QuadraticBezierCurve:ua,QuadraticBezierCurve3:da,SplineCurve:pa}),sl=class extends jt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ma[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ma[i.type]().fromJSON(i))}return this}},qr=class extends sl{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ha(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new ua(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ca(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new pa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Yr(e,t,n,i,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fa=class r extends Je{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ht(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,d=new b,u=new se,p=new b,f=new b,v=new b,m=0,y=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,y=e[g+1].y-e[g].y,p.x=1*y,p.y=-m,p.z=0*y,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[g+1].x-e[g].x,y=e[g+1].y-e[g].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let g=0;g<=t;g++){let _=n+g*h*i,E=Math.sin(_),A=Math.cos(_);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*E,d.y=e[T].y,d.z=e[T].x*A,a.push(d.x,d.y,d.z),u.x=g/t,u.y=T/(e.length-1),o.push(u.x,u.y);let w=l[3*T+0]*E,F=l[3*T+1],B=l[3*T+0]*A;c.push(w,F,B)}}for(let g=0;g<t;g++)for(let _=0;_<e.length-1;_++){let E=_+g*e.length,A=E,T=E+e.length,w=E+e.length+1,F=E+1;s.push(A,T,F),s.push(w,F,T)}this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},al=class r extends fa{constructor(e=1,t=1,n=4,i=8){let s=new qr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},ol=class r extends Je{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new b,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},on=class r extends Je{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,v=[],m=n/2,y=0;function g(_){let E=f,A=new se,T=new b,w=0,F=_===!0?e:t,B=_===!0?1:-1;for(let Y=1;Y<=i;Y++)d.push(0,m*B,0),u.push(0,B,0),p.push(.5,.5),f++;let k=f;for(let Y=0;Y<=i;Y++){let I=Y/i*l+o,Z=Math.cos(I),X=Math.sin(I);T.x=F*X,T.y=m*B,T.z=F*Z,d.push(T.x,T.y,T.z),u.push(0,B,0),A.x=.5*Z+.5,A.y=.5*X*B+.5,p.push(A.x,A.y),f++}for(let Y=0;Y<i;Y++){let I=E+Y,Z=k+Y;_===!0?h.push(Z,Z+1,I):h.push(Z+1,Z,I),w+=3}c.addGroup(y,w,_===!0?1:2),y+=w}(function(){let _=new b,E=new b,A=0,T=(t-e)/n;for(let w=0;w<=s;w++){let F=[],B=w/s,k=B*(t-e)+e;for(let Y=0;Y<=i;Y++){let I=Y/i,Z=I*l+o,X=Math.sin(Z),ie=Math.cos(Z);E.x=k*X,E.y=-B*n+m,E.z=k*ie,d.push(E.x,E.y,E.z),_.set(X,T,ie).normalize(),u.push(_.x,_.y,_.z),p.push(I,1-B),F.push(f++)}v.push(F)}for(let w=0;w<i;w++)for(let F=0;F<s;F++){let B=v[F][w],k=v[F+1][w],Y=v[F+1][w+1],I=v[F][w+1];h.push(B,k,I),h.push(k,Y,I),A+=6}c.addGroup(y,A,0),y+=A})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ll=class r extends on{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ei=class r extends Je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(u,p,f,v){let m=v+1,y=[];for(let g=0;g<=m;g++){y[g]=[];let _=u.clone().lerp(f,g/m),E=p.clone().lerp(f,g/m),A=m-g;for(let T=0;T<=A;T++)y[g][T]=T===0&&g===m?_:_.clone().lerp(E,T/A)}for(let g=0;g<m;g++)for(let _=0;_<2*(m-g)-1;_++){let E=Math.floor(_/2);_%2==0?(l(y[g][E+1]),l(y[g+1][E]),l(y[g][E])):(l(y[g][E+1]),l(y[g+1][E+1]),l(y[g+1][E]))}}function l(u){s.push(u.x,u.y,u.z)}function c(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,v){v<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=v/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new b,f=new b,v=new b;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],v),o(p,f,v,u)})(i),(function(u){let p=new b;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(u),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let u=new b;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let v=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-m)}var p;(function(){let f=new b,v=new b,m=new b,y=new b,g=new se,_=new se,E=new se;for(let A=0,T=0;A<s.length;A+=9,T+=6){f.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),m.set(s[A+6],s[A+7],s[A+8]),g.set(a[T+0],a[T+1]),_.set(a[T+2],a[T+3]),E.set(a[T+4],a[T+5]),y.copy(f).add(v).add(m).divideScalar(3);let w=d(y);h(g,T+0,f,w),h(_,T+2,v,w),h(E,T+4,m,w)}})(),(function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],y=a[f+4],g=Math.max(v,m,y),_=Math.min(v,m,y);g>.9&&_<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},cl=class r extends Ei{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Os=new b,Bs=new b,Eo=new b,Fs=new Zn,Ti=class extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(tr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:v,b:m,c:y}=Fs;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),Fs.getNormal(Eo),d[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let g=0;g<3;g++){let _=(g+1)%3,E=d[g],A=d[_],T=Fs[h[g]],w=Fs[h[_]],F=`${E}_${A}`,B=`${A}_${E}`;B in u&&u[B]?(Eo.dot(u[B].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(w.x,w.y,w.z)),u[B]=null):F in u||(u[F]={index0:c[g],index1:c[_],normal:Eo.clone()})}}for(let f in u)if(u[f]){let{index0:v,index1:m}=u[f];Os.fromBufferAttribute(o,v),Bs.fromBufferAttribute(o,m),p.push(Os.x,Os.y,Os.z),p.push(Bs.x,Bs.y,Bs.z)}this.setAttribute("position",new Se(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ga=class extends qr{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new qr().fromJSON(i))}return this}},Wp=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Ih(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(n&&(s=(function(f,v,m,y){let g=[],_,E,A,T,w;for(_=0,E=v.length;_<E;_++)A=v[_]*y,T=_<E-1?v[_+1]*y:f.length,w=Ih(f,A,T,y,!1),w===w.next&&(w.steiner=!0),g.push($p(w));for(g.sort(Zp),_=0;_<g.length;_++)m=Jp(g[_],m);return m})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<i;f+=t)d=r[f],u=r[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Zr(s,a,t,o,l,p,0),a};function Ih(r,e,t,n,i){let s,a;if(i===(function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Dh(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Dh(s,r[s],r[s+1],a);return a&&Ea(a,a.next)&&(Kr(a),a=a.next),a}function wi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Ea(n,n.next)&&rt(n.prev,n,n.next)!==0)n=n.next;else{if(Kr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Zr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,d,u,p){let f=h;do f.z===0&&(f.z=hl(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(v){let m,y,g,_,E,A,T,w,F=1;do{for(y=v,v=null,E=null,A=0;y;){for(A++,g=y,T=0,m=0;m<F&&(T++,g=g.nextZ,g);m++);for(w=F;T>0||w>0&&g;)T!==0&&(w===0||!g||y.z<=g.z)?(_=y,y=y.nextZ,T--):(_=g,g=g.nextZ,w--),E?E.nextZ=_:v=_,_.prevZ=E,E=_;y=g}E.nextZ=null,F*=2}while(A>1)})(f)})(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?jp(r,n,i,s):Xp(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Kr(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?Zr(r=Yp(wi(r),e,t),e,t,n,i,s,2):a===2&&qp(r,e,t,n,i,s):Zr(wi(r),e,t,n,i,s,1);break}}function Xp(r){let e=r.prev,t=r,n=r.next;if(rt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&er(i,o,s,l,a,c,f.x,f.y)&&rt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function jp(r,e,t,n){let i=r.prev,s=r,a=r.next;if(rt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,d=s.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,v=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,y=hl(p,f,e,t,n),g=hl(v,m,e,t,n),_=r.prevZ,E=r.nextZ;for(;_&&_.z>=y&&E&&E.z<=g;){if(_.x>=p&&_.x<=v&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&er(o,h,l,d,c,u,_.x,_.y)&&rt(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=p&&E.x<=v&&E.y>=f&&E.y<=m&&E!==i&&E!==a&&er(o,h,l,d,c,u,E.x,E.y)&&rt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=y;){if(_.x>=p&&_.x<=v&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&er(o,h,l,d,c,u,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=g;){if(E.x>=p&&E.x<=v&&E.y>=f&&E.y<=m&&E!==i&&E!==a&&er(o,h,l,d,c,u,E.x,E.y)&&rt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Yp(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!Ea(i,s)&&cu(i,n,n.next,s)&&Jr(i,s)&&Jr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Kr(n),Kr(n.next),n=r=s),n=n.next}while(n!==r);return wi(n)}function qp(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qp(a,o)){let l=hu(a,o);return a=wi(a,a.next),l=wi(l,l.next),Zr(a,e,t,n,i,s,0),void Zr(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Zp(r,e){return r.x-e.x}function Jp(r,e){let t=(function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,f,v=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&er(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Jr(o,i)&&(f<v||f===v&&(o.x>a.x||o.x===a.x&&Kp(a,o)))&&(a=o,v=f)),o=o.next;while(o!==d);return a})(r,e);if(!t)return e;let n=hu(t,r);return wi(n,n.next),wi(t,t.next)}function Kp(r,e){return rt(r.prev,r,e.prev)<0&&rt(e.next,r,r.next)<0}function hl(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function $p(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function er(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Qp(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&cu(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Jr(r,e)&&Jr(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(rt(r.prev,r,e.prev)||rt(r,e.prev,e))||Ea(r,e)&&rt(r.prev,r,r.next)>0&&rt(e.prev,e,e.next)>0)}function rt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ea(r,e){return r.x===e.x&&r.y===e.y}function cu(r,e,t,n){let i=Hs(rt(r,e,t)),s=Hs(rt(r,e,n)),a=Hs(rt(t,n,r)),o=Hs(rt(t,n,e));return i!==s&&a!==o||!(i!==0||!zs(r,t,e))||!(s!==0||!zs(r,n,e))||!(a!==0||!zs(t,r,n))||!(o!==0||!zs(t,e,n))}function zs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Hs(r){return r>0?1:r<0?-1:0}function Jr(r,e){return rt(r.prev,r,r.next)<0?rt(r,e,r.next)>=0&&rt(r,r.prev,e)>=0:rt(r,e,r.prev)<0||rt(r,r.next,e)<0}function hu(r,e){let t=new ul(r.i,r.x,r.y),n=new ul(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Dh(r,e,t,n){let i=new ul(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Kr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ul(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Kn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Nh(e),Uh(n,e);let a=e.length;t.forEach(Nh);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Uh(n,t[l]);let o=Wp(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Nh(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Uh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var dl=class r extends Je{constructor(e=new ga([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:em,_,E,A,T,w,F=!1;y&&(_=y.getSpacedPoints(h),F=!0,u=!1,E=y.computeFrenetFrames(h,!1),A=new b,T=new b,w=new b),u||(m=0,p=0,f=0,v=0);let B=o.extractPoints(c),k=B.shape,Y=B.holes;if(!Kn.isClockWise(k)){k=k.reverse();for(let P=0,N=Y.length;P<N;P++){let O=Y[P];Kn.isClockWise(O)&&(Y[P]=O.reverse())}}let I=Kn.triangulateShape(k,Y),Z=k;for(let P=0,N=Y.length;P<N;P++){let O=Y[P];k=k.concat(O)}function X(P,N,O){return N||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(N,O)}let ie=k.length,he=I.length;function re(P,N,O){let V,j,S,ee=P.x-N.x,W=P.y-N.y,J=O.x-P.x,oe=O.y-P.y,de=ee*ee+W*W,pe=ee*oe-W*J;if(Math.abs(pe)>Number.EPSILON){let ve=Math.sqrt(de),Ee=Math.sqrt(J*J+oe*oe),ge=N.x-W/ve,_e=N.y+ee/ve,Ce=((O.x-oe/Ee-ge)*oe-(O.y+J/Ee-_e)*J)/(ee*oe-W*J);V=ge+ee*Ce-P.x,j=_e+W*Ce-P.y;let lt=V*V+j*j;if(lt<=2)return new se(V,j);S=Math.sqrt(lt/2)}else{let ve=!1;ee>Number.EPSILON?J>Number.EPSILON&&(ve=!0):ee<-Number.EPSILON?J<-Number.EPSILON&&(ve=!0):Math.sign(W)===Math.sign(oe)&&(ve=!0),ve?(V=-W,j=ee,S=Math.sqrt(de)):(V=ee,j=W,S=Math.sqrt(de/2))}return new se(V/S,j/S)}let Q=[];for(let P=0,N=Z.length,O=N-1,V=P+1;P<N;P++,O++,V++)O===N&&(O=0),V===N&&(V=0),Q[P]=re(Z[P],Z[O],Z[V]);let ne=[],q,z=Q.concat();for(let P=0,N=Y.length;P<N;P++){let O=Y[P];q=[];for(let V=0,j=O.length,S=j-1,ee=V+1;V<j;V++,S++,ee++)S===j&&(S=0),ee===j&&(ee=0),q[V]=re(O[V],O[S],O[ee]);ne.push(q),z=z.concat(q)}for(let P=0;P<m;P++){let N=P/m,O=p*Math.cos(N*Math.PI/2),V=f*Math.sin(N*Math.PI/2)+v;for(let j=0,S=Z.length;j<S;j++){let ee=X(Z[j],Q[j],V);x(ee.x,ee.y,-O)}for(let j=0,S=Y.length;j<S;j++){let ee=Y[j];q=ne[j];for(let W=0,J=ee.length;W<J;W++){let oe=X(ee[W],q[W],V);x(oe.x,oe.y,-O)}}}let G=f+v;for(let P=0;P<ie;P++){let N=u?X(k[P],z[P],G):k[P];F?(T.copy(E.normals[0]).multiplyScalar(N.x),A.copy(E.binormals[0]).multiplyScalar(N.y),w.copy(_[0]).add(T).add(A),x(w.x,w.y,w.z)):x(N.x,N.y,0)}for(let P=1;P<=h;P++)for(let N=0;N<ie;N++){let O=u?X(k[N],z[N],G):k[N];F?(T.copy(E.normals[P]).multiplyScalar(O.x),A.copy(E.binormals[P]).multiplyScalar(O.y),w.copy(_[P]).add(T).add(A),x(w.x,w.y,w.z)):x(O.x,O.y,d/h*P)}for(let P=m-1;P>=0;P--){let N=P/m,O=p*Math.cos(N*Math.PI/2),V=f*Math.sin(N*Math.PI/2)+v;for(let j=0,S=Z.length;j<S;j++){let ee=X(Z[j],Q[j],V);x(ee.x,ee.y,d+O)}for(let j=0,S=Y.length;j<S;j++){let ee=Y[j];q=ne[j];for(let W=0,J=ee.length;W<J;W++){let oe=X(ee[W],q[W],V);F?x(oe.x,oe.y+_[h-1].y,_[h-1].x+O):x(oe.x,oe.y,d+O)}}}function M(P,N){let O=P.length;for(;--O>=0;){let V=O,j=O-1;j<0&&(j=P.length-1);for(let S=0,ee=h+2*m;S<ee;S++){let W=ie*S,J=ie*(S+1);D(N+V+W,N+j+W,N+j+J,N+V+J)}}}function x(P,N,O){l.push(P),l.push(N),l.push(O)}function C(P,N,O){R(P),R(N),R(O);let V=i.length/3,j=g.generateTopUV(n,i,V-3,V-2,V-1);U(j[0]),U(j[1]),U(j[2])}function D(P,N,O,V){R(P),R(N),R(V),R(N),R(O),R(V);let j=i.length/3,S=g.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);U(S[0]),U(S[1]),U(S[3]),U(S[1]),U(S[2]),U(S[3])}function R(P){i.push(l[3*P+0]),i.push(l[3*P+1]),i.push(l[3*P+2])}function U(P){s.push(P.x),s.push(P.y)}(function(){let P=i.length/3;if(u){let N=0,O=ie*N;for(let V=0;V<he;V++){let j=I[V];C(j[2]+O,j[1]+O,j[0]+O)}N=h+2*m,O=ie*N;for(let V=0;V<he;V++){let j=I[V];C(j[0]+O,j[1]+O,j[2]+O)}}else{for(let N=0;N<he;N++){let O=I[N];C(O[2],O[1],O[0])}for(let N=0;N<he;N++){let O=I[N];C(O[0]+ie*h,O[1]+ie*h,O[2]+ie*h)}}n.addGroup(P,i.length/3-P,0)})(),(function(){let P=i.length/3,N=0;M(Z,N),N+=Z.length;for(let O=0,V=Y.length;O<V;O++){let j=Y[O];M(j,N),N+=j.length}n.addGroup(P,i.length/3-P,1)})()}this.setAttribute("position",new Se(i,3)),this.setAttribute("uv",new Se(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ma[i.type]().fromJSON(i)),new r(n,e.options)}},em={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new se(s,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*i],p=e[3*i+1],f=e[3*i+2],v=e[3*s],m=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-d),new se(u,1-f),new se(v,1-y)]:[new se(o,1-l),new se(h,1-d),new se(p,1-f),new se(m,1-y)]}},pl=class r extends Ei{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ml=class r extends Ei{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},fl=class r extends Je{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(i=Math.max(1,i)),p=new b,f=new se;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){let y=s+m/n*a;p.x=d*Math.cos(y),p.y=d*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let v=0;v<i;v++){let m=v*(n+1);for(let y=0;y<n;y++){let g=y+m,_=g,E=g+n+1,A=g+n+2,T=g+1;o.push(_,E,T),o.push(E,A,T)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},gl=class r extends Je{constructor(e=new ga([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=i.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;Kn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let g=f[m];Kn.isClockWise(g)===!0&&(f[m]=g.reverse())}let v=Kn.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let g=f[m];p=p.concat(g)}for(let m=0,y=p.length;m<y;m++){let g=p[m];i.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let m=0,y=v.length;m<y;m++){let g=v[m],_=g[0]+d,E=g[1]+d,A=g[2]+d;n.push(_,E,A),l+=3}}this.setIndex(n),this.setAttribute("position",new Se(i,3)),this.setAttribute("normal",new Se(s,3)),this.setAttribute("uv",new Se(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Ai=class r extends Je{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new b,u=new b,p=[],f=[],v=[],m=[];for(let y=0;y<=n;y++){let g=[],_=y/n,E=0;y===0&&a===0?E=.5/t:y===n&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){let T=A/t;d.x=-e*Math.cos(i+T*s)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(i+T*s)*Math.sin(a+_*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(T+E,1-_),g.push(c++)}h.push(g)}for(let y=0;y<n;y++)for(let g=0;g<t;g++){let _=h[y][g+1],E=h[y][g],A=h[y+1][g],T=h[y+1][g+1];(y!==0||a>0)&&p.push(_,E,T),(y!==n-1||l<Math.PI)&&p.push(E,A,T)}this.setIndex(p),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},vl=class r extends Ei{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},$r=class r extends Je{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new b,d=new b,u=new b;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let v=f/i*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let v=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,y=(i+1)*(p-1)+f,g=(i+1)*p+f;a.push(v,m,g),a.push(m,y,g)}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},_l=class r extends Je{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],d=new b,u=new b,p=new b,f=new b,v=new b,m=new b,y=new b;for(let _=0;_<=n;++_){let E=_/n*s*Math.PI*2;g(E,s,a,e,p),g(E+.01,s,a,e,f),m.subVectors(f,p),y.addVectors(f,p),v.crossVectors(m,y),y.crossVectors(v,m),v.normalize(),y.normalize();for(let A=0;A<=i;++A){let T=A/i*Math.PI*2,w=-t*Math.cos(T),F=t*Math.sin(T);d.x=p.x+(w*y.x+F*v.x),d.y=p.y+(w*y.y+F*v.y),d.z=p.z+(w*y.z+F*v.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(_/n),h.push(A/i)}}for(let _=1;_<=n;_++)for(let E=1;E<=i;E++){let A=(i+1)*(_-1)+(E-1),T=(i+1)*_+(E-1),w=(i+1)*_+E,F=(i+1)*(_-1)+E;o.push(A,T,F),o.push(T,w,F)}function g(_,E,A,T,w){let F=Math.cos(_),B=Math.sin(_),k=A/E*_,Y=Math.cos(k);w.x=T*(2+Y)*.5*F,w.y=T*(2+Y)*B*.5,w.z=T*Math.sin(k)*.5}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},yl=class r extends Je{constructor(e=new da(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,c=new se,h=new b,d=[],u=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let y=a.normals[m],g=a.binormals[m];for(let _=0;_<=i;_++){let E=_/i*Math.PI*2,A=Math.sin(E),T=-Math.cos(E);l.x=T*y.x+A*g.x,l.y=T*y.y+A*g.y,l.z=T*y.z+A*g.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let y=0;y<=i;y++)c.x=m/t,c.y=y/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let y=1;y<=i;y++){let g=(i+1)*(m-1)+(y-1),_=(i+1)*m+(y-1),E=(i+1)*m+y,A=(i+1)*(m-1)+y;f.push(g,_,A),f.push(_,E,A)}})()})(),this.setIndex(f),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new ma[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},xl=class extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new b,s=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),y=o.getX(p+(v+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),Oh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Oh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Oh(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var yf=Object.freeze({__proto__:null,BoxGeometry:bn,CapsuleGeometry:al,CircleGeometry:ol,ConeGeometry:ll,CylinderGeometry:on,DodecahedronGeometry:cl,EdgesGeometry:Ti,ExtrudeGeometry:dl,IcosahedronGeometry:pl,LatheGeometry:fa,OctahedronGeometry:ml,PlaneGeometry:St,PolyhedronGeometry:Ei,RingGeometry:fl,ShapeGeometry:gl,SphereGeometry:Ai,TetrahedronGeometry:vl,TorusGeometry:$r,TorusKnotGeometry:_l,TubeGeometry:yl,WireframeGeometry:xl});var Ke=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ri=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ks(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function tm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var dr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ml=class extends dr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bc:s=e,o=2*t-n;break;case Fc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:a=e,l=2*n-t;break;case Fc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),v=f*f,m=v*f,y=-u*m+2*u*v-u*f,g=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*f+1,_=(-1-p)*m+(1.5+p)*v+.5*f,E=p*m-p*v;for(let A=0;A!==o;++A)s[A]=y*a[h+A]+g*a[c+A]+_*a[l+A]+E*a[d+A];return s}},bl=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},Sl=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},rn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ml(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&tm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Za,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};rn.prototype.TimeBufferType=Float32Array,rn.prototype.ValueBufferType=Float32Array,rn.prototype.DefaultInterpolation=Ws;var gi=class extends rn{};gi.prototype.ValueTypeName="bool",gi.prototype.ValueBufferType=Array,gi.prototype.DefaultInterpolation=Vs,gi.prototype.InterpolantFactoryMethodLinear=void 0,gi.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends rn{};El.prototype.ValueTypeName="color";var Tl=class extends rn{};Tl.prototype.ValueTypeName="number";var wl=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Bt.slerpFlat(s,0,a,c-o,a,c,l);return s}},kr=class extends rn{InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};kr.prototype.ValueTypeName="quaternion",kr.prototype.DefaultInterpolation=Ws,kr.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends rn{};vi.prototype.ValueTypeName="string",vi.prototype.ValueBufferType=Array,vi.prototype.DefaultInterpolation=Vs,vi.prototype.InterpolantFactoryMethodLinear=void 0,vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends rn{};Al.prototype.ValueTypeName="vector";var Bh={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Rl=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},nm=new Rl,Qr=class{constructor(e){this.manager=e!==void 0?e:nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cl=class extends Qr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Bh.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=Vr("img");function l(){h(),Bh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var va=class extends Qr{constructor(e){super(e)}load(e,t,n,i){let s=new Ot,a=new Cl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},pr=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},_a=class extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},To=new Re,Fh=new b,zh=new b,es=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zh),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pl=class extends es{constructor(){super(new at(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*lr*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ya=class extends pr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Pl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Hh=new Re,Ur=new b,wo=new b,Ll=class extends es{constructor(){super(new at(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ur),wo.copy(n.position),wo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wo),n.updateMatrixWorld(),i.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh)}},ts=class extends pr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ll}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Il=class extends es{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xa=class extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xf=new Re,Mf=new Re,bf=new Re;var Sf=new b,Ef=new Bt,Tf=new b,wf=new b;var Af=new b,Rf=new Bt,Cf=new b,Pf=new b;var kl="\\[\\]\\.:\\/",im=new RegExp("["+kl+"]","g"),Ao="[^"+kl+"]",rm="[^"+kl.replace("\\.","")+"]",sm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ao)+/(WCOD+)?/.source.replace("WCOD",rm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ao)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ao)+"$"),am=["material","materials","bones","map"],tt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(im,"")}static parseTrackName(e){let t=sm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);am.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=class{constructor(r,e,t){let n=t||tt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray],tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lf=new Float32Array(1);var mr=class{constructor(e,t,n=0,i=1/0){this.ray=new Bn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Dl(e,this,n,t),n.sort(kh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Dl(e[i],this,n,t);return n.sort(kh),n}};function kh(r,e){return r.distance-e.distance}function Dl(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)Dl(i[s],e,t,!0)}}var Hn=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var If=new se;var Df=new b,Nf=new b;var Uf=new b;var Of=new b,Bf=new Re,Ff=new Re;var zf=new b,Hf=new be,kf=new be;var Gf=new b,Vf=new b,Wf=new b;var Xf=new b,jf=new Xr;var Yf=new xn;var qf=new b;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var uu={type:"change"},Gl={type:"start"},du={type:"end"},Ta=new Bn,pu=new Rt,om=Math.cos(70*ti.DEG2RAD),wa=class extends yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sn.ROTATE,MIDDLE:Sn.DOLLY,RIGHT:Sn.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",_e),this._domElementKeyEvents=H},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(uu),n.update(),s=i.NONE},this.update=(function(){let H=new b,fe=new Bt().setFromUnitVectors(e.up,new b(0,1,0)),Ae=fe.clone().invert(),Ge=new b,K=new Bt,Dt=new b,gt=2*Math.PI;return function(ss=null){let Er=n.object.position;H.copy(Er).sub(n.target),H.applyQuaternion(fe),o.setFromVector3(H),n.autoRotate&&s===i.NONE&&Y(B(ss)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ht=n.minAzimuthAngle,kt=n.maxAzimuthAngle;isFinite(Ht)&&isFinite(kt)&&(Ht<-Math.PI?Ht+=gt:Ht>Math.PI&&(Ht-=gt),kt<-Math.PI?kt+=gt:kt>Math.PI&&(kt-=gt),Ht<=kt?o.theta=Math.max(Ht,Math.min(kt,o.theta)):o.theta=o.theta>(Ht+kt)/2?Math.max(Ht,o.theta):Math.min(kt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=ne(o.radius):o.radius=ne(o.radius*c),H.setFromSpherical(o),H.applyQuaternion(Ae),Er.copy(n.target).add(H),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Di=!1;if(n.zoomToCursor&&T){let An=null;if(n.object.isPerspectiveCamera){let kn=H.length();An=ne(kn*c);let si=kn-An;n.object.position.addScaledVector(E,si),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let kn=new b(A.x,A.y,0);kn.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Di=!0;let si=new b(A.x,A.y,0);si.unproject(n.object),n.object.position.sub(si).add(kn),n.object.updateMatrixWorld(),An=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;An!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(An).add(n.object.position):(Ta.origin.copy(n.object.position),Ta.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ta.direction))<om?e.lookAt(n.target):(pu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ta.intersectPlane(pu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Di=!0);return c=1,T=!1,Di||Ge.distanceToSquared(n.object.position)>a||8*(1-K.dot(n.object.quaternion))>a||Dt.distanceToSquared(n.target)>0?(n.dispatchEvent(uu),Ge.copy(n.object.position),K.copy(n.object.quaternion),Dt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",xe),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",pe),n.domElement.removeEventListener("wheel",ge),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",pe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,a=1e-6,o=new Hn,l=new Hn,c=1,h=new b,d=new se,u=new se,p=new se,f=new se,v=new se,m=new se,y=new se,g=new se,_=new se,E=new b,A=new se,T=!1,w=[],F={};function B(H){return H!==null?2*Math.PI/60*n.autoRotateSpeed*H:2*Math.PI/60/60*n.autoRotateSpeed}function k(H){let fe=Math.abs(H)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*fe)}function Y(H){l.theta-=H}function I(H){l.phi-=H}let Z=(function(){let H=new b;return function(Ae,Ge){H.setFromMatrixColumn(Ge,0),H.multiplyScalar(-Ae),h.add(H)}})(),X=(function(){let H=new b;return function(Ae,Ge){n.screenSpacePanning===!0?H.setFromMatrixColumn(Ge,1):(H.setFromMatrixColumn(Ge,0),H.crossVectors(n.object.up,H)),H.multiplyScalar(Ae),h.add(H)}})(),ie=(function(){let H=new b;return function(Ae,Ge){let K=n.domElement;if(n.object.isPerspectiveCamera){let Dt=n.object.position;H.copy(Dt).sub(n.target);let gt=H.length();gt*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*Ae*gt/K.clientHeight,n.object.matrix),X(2*Ge*gt/K.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z(Ae*(n.object.right-n.object.left)/n.object.zoom/K.clientWidth,n.object.matrix),X(Ge*(n.object.top-n.object.bottom)/n.object.zoom/K.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function he(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(H,fe){if(!n.zoomToCursor)return;T=!0;let Ae=n.domElement.getBoundingClientRect(),Ge=H-Ae.left,K=fe-Ae.top,Dt=Ae.width,gt=Ae.height;A.x=Ge/Dt*2-1,A.y=-(K/gt)*2+1,E.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function ne(H){return Math.max(n.minDistance,Math.min(n.maxDistance,H))}function q(H){d.set(H.clientX,H.clientY)}function z(H){Q(H.clientX,H.clientX),y.set(H.clientX,H.clientY)}function G(H){f.set(H.clientX,H.clientY)}function M(H){u.set(H.clientX,H.clientY),p.subVectors(u,d).multiplyScalar(n.rotateSpeed);let fe=n.domElement;Y(2*Math.PI*p.x/fe.clientHeight),I(2*Math.PI*p.y/fe.clientHeight),d.copy(u),n.update()}function x(H){g.set(H.clientX,H.clientY),_.subVectors(g,y),_.y>0?he(k(_.y)):_.y<0&&re(k(_.y)),y.copy(g),n.update()}function C(H){v.set(H.clientX,H.clientY),m.subVectors(v,f).multiplyScalar(n.panSpeed),ie(m.x,m.y),f.copy(v),n.update()}function D(H){Q(H.clientX,H.clientY),H.deltaY<0?re(k(H.deltaY)):H.deltaY>0&&he(k(H.deltaY)),n.update()}function R(H){let fe=!1;switch(H.code){case n.keys.UP:H.ctrlKey||H.metaKey||H.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ie(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:H.ctrlKey||H.metaKey||H.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ie(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:H.ctrlKey||H.metaKey||H.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ie(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:H.ctrlKey||H.metaKey||H.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ie(-n.keyPanSpeed,0),fe=!0;break}fe&&(H.preventDefault(),n.update())}function U(H){if(w.length===1)d.set(H.pageX,H.pageY);else{let fe=It(H),Ae=.5*(H.pageX+fe.x),Ge=.5*(H.pageY+fe.y);d.set(Ae,Ge)}}function P(H){if(w.length===1)f.set(H.pageX,H.pageY);else{let fe=It(H),Ae=.5*(H.pageX+fe.x),Ge=.5*(H.pageY+fe.y);f.set(Ae,Ge)}}function N(H){let fe=It(H),Ae=H.pageX-fe.x,Ge=H.pageY-fe.y,K=Math.sqrt(Ae*Ae+Ge*Ge);y.set(0,K)}function O(H){n.enableZoom&&N(H),n.enablePan&&P(H)}function V(H){n.enableZoom&&N(H),n.enableRotate&&U(H)}function j(H){if(w.length==1)u.set(H.pageX,H.pageY);else{let Ae=It(H),Ge=.5*(H.pageX+Ae.x),K=.5*(H.pageY+Ae.y);u.set(Ge,K)}p.subVectors(u,d).multiplyScalar(n.rotateSpeed);let fe=n.domElement;Y(2*Math.PI*p.x/fe.clientHeight),I(2*Math.PI*p.y/fe.clientHeight),d.copy(u)}function S(H){if(w.length===1)v.set(H.pageX,H.pageY);else{let fe=It(H),Ae=.5*(H.pageX+fe.x),Ge=.5*(H.pageY+fe.y);v.set(Ae,Ge)}m.subVectors(v,f).multiplyScalar(n.panSpeed),ie(m.x,m.y),f.copy(v)}function ee(H){let fe=It(H),Ae=H.pageX-fe.x,Ge=H.pageY-fe.y,K=Math.sqrt(Ae*Ae+Ge*Ge);g.set(0,K),_.set(0,Math.pow(g.y/y.y,n.zoomSpeed)),he(_.y),y.copy(g);let Dt=(H.pageX+fe.x)*.5,gt=(H.pageY+fe.y)*.5;Q(Dt,gt)}function W(H){n.enableZoom&&ee(H),n.enablePan&&S(H)}function J(H){n.enableZoom&&ee(H),n.enableRotate&&j(H)}function oe(H){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(H.pointerId),n.domElement.addEventListener("pointermove",de),n.domElement.addEventListener("pointerup",pe)),Oe(H),H.pointerType==="touch"?Ce(H):ve(H))}function de(H){n.enabled!==!1&&(H.pointerType==="touch"?lt(H):Ee(H))}function pe(H){Le(H),w.length===0&&(n.domElement.releasePointerCapture(H.pointerId),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",pe)),n.dispatchEvent(du),s=i.NONE}function ve(H){let fe;switch(H.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case Sn.DOLLY:if(n.enableZoom===!1)return;z(H),s=i.DOLLY;break;case Sn.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enablePan===!1)return;G(H),s=i.PAN}else{if(n.enableRotate===!1)return;q(H),s=i.ROTATE}break;case Sn.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enableRotate===!1)return;q(H),s=i.ROTATE}else{if(n.enablePan===!1)return;G(H),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Gl)}function Ee(H){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;M(H);break;case i.DOLLY:if(n.enableZoom===!1)return;x(H);break;case i.PAN:if(n.enablePan===!1)return;C(H);break}}function ge(H){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(H.preventDefault(),n.dispatchEvent(Gl),D(H),n.dispatchEvent(du))}function _e(H){n.enabled===!1||n.enablePan===!1||R(H)}function Ce(H){switch(ri(H),w.length){case 1:switch(n.touches.ONE){case Ci.ROTATE:if(n.enableRotate===!1)return;U(H),s=i.TOUCH_ROTATE;break;case Ci.PAN:if(n.enablePan===!1)return;P(H),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(H),s=i.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V(H),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Gl)}function lt(H){switch(ri(H),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;j(H),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;S(H),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(H),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;J(H),n.update();break;default:s=i.NONE}}function xe(H){n.enabled!==!1&&H.preventDefault()}function Oe(H){w.push(H.pointerId)}function Le(H){delete F[H.pointerId];for(let fe=0;fe<w.length;fe++)if(w[fe]==H.pointerId){w.splice(fe,1);return}}function ri(H){let fe=F[H.pointerId];fe===void 0&&(fe=new se,F[H.pointerId]=fe),fe.set(H.pageX,H.pageY)}function It(H){let fe=H.pointerId===w[0]?w[1]:w[0];return F[fe]}n.domElement.addEventListener("contextmenu",xe),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",pe),n.domElement.addEventListener("wheel",ge,{passive:!1}),this.update()}};var we={width:11.416666666666666,depth:11.666666666666666,height:9,wall:.18,powderWidth:3.875,powderLength:7.375},vr={depth:14+3/12,northZ:we.depth/2,southZ:we.depth/2+14+3/12},ft={benchDepth:1.6,benchLength:3,benchCenterZ:2.5,closetDepth:2},qe={bathSouthPixelY:158,doorWestPixelX:232,doorEastPixelX:258,benchWidth:3},et={closetLength:4.5,benchWidth:3,benchDepth:1.6,mirrorWidth:5.25,mirrorHeight:5},ln={scaleX:9.02,scaleZ:9.08,originX:215.5,originY:174.5},yt={wallPixelY:260,basementScreenWestPixelX:249,basementScreenEndPixelX:282,workNookWallPixelX:382,beamBottom:7.85,postSize:.84,wallThickness:.42},st={centerPixelX:356,centeredPixelY:304,bayPixelY:309,topWidth:3.5,topLength:5.5,baseWidth:3,baseLength:5,counterHeight:3},ce=r=>(r-ln.originX)/ln.scaleX,ye=r=>(r-ln.originY)/ln.scaleZ,_r=[{id:5,side:"east",interface:"open",title:"East wall + full-width opening",short:"Former wall removed to ceiling beam",status:"BEST TO DEVELOP",description:"The den doors and the entire former den-to-foyer wall are removed. Only a ceiling beam remains across the opening beside the new powder room."},{id:6,side:"west",interface:"open",title:"West wall + full-width opening",short:"Former wall removed to ceiling beam",status:"WEST-WALL MIRROR",description:"The den doors and the entire former den-to-foyer wall are removed. Only a ceiling beam remains across the opening beside the square-cornered powder room."},{id:7,side:"north",interface:"north-bath",title:"North bath + front built-in wall",short:"Bathroom-backed storage, bench and left mirror",status:"NORTH-END BUILT-IN WALL",description:"The full-width half bath retains the three-panel window. A nearly full-width millwork wall backs onto the bathroom and combines mirrored coat storage, an integrated sitting bench, the recessed bathroom doorway and a narrow utility cabinet. A large mirror occupies the left wall."},{id:8,side:"north",interface:"north-bath",title:"North bath + left-wall closet",short:"Closet left; bench and frameless mirror ahead",status:"LEFT-WALL STORAGE TEST",description:"The bathroom is identical to Option 7. The coat closet moves to the left wall in place of the large mirror. A three-foot sitting bench is directly opposite the entrance, with a frameless real-time mirror above it on the bathroom partition."}];function lm(r){let e=document.createElement("canvas");e.width=640,e.height=112;let t=e.getContext("2d");t.fillStyle="rgba(9, 83, 96, 0.92)",t.roundRect(4,4,632,104,18),t.fill(),t.fillStyle="#ffffff",t.font="700 38px Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(r,320,57);let n=new ei(e);n.colorSpace=Ze;let i=new la(new jr({map:n,transparent:!0,depthTest:!1}));return i.scale.set(4.7,.82,1),i.renderOrder=20,i}function mu(r,e,t,n){let i=new zn({color:482153,depthTest:!1,transparent:!0,opacity:.95}),s=new Qn(new Je().setFromPoints(e),i);s.renderOrder=19,r.add(s);let a=lm(t);a.position.copy(n),r.add(a)}function Yt(r,e,t,n,i){mu(r,[new b(e,.22,n),new b(t,.22,n),new b(e,.22,n-.25),new b(e,.22,n+.25),new b(t,.22,n-.25),new b(t,.22,n+.25)],i,new b((e+t)/2,.22+.3,n))}function En(r,e,t,n,i){mu(r,[new b(e,.22,t),new b(e,.22,n),new b(e-.25,.22,t),new b(e+.25,.22,t),new b(e-.25,.22,n),new b(e+.25,.22,n)],i,new b(e,.22+.3,(t+n)/2))}function Vl(r,e,t="existing",n=null,i="vertical"){let s=ce(164),a=ce(267),o=ye(116),l=ye(228);if(Yt(e,s,a,l-.45,`Den width 11'5"`),En(e,s+.38,o,l,`Den depth 11'8"`),Yt(e,ce(185),ce(244),o+.38,`Window 6'6\xBD"`),t==="open"&&Yt(e,ce(yt.basementScreenEndPixelX),ce(yt.workNookWallPixelX),ye(yt.wallPixelY)-.62,`Kitchen opening span ~11'1"`),t==="open"&&n){let g=ce(st.centerPixelX),_=ye(n==="bay"?st.bayPixelY:st.centeredPixelY),E=i==="horizontal",A=E?st.topLength:st.topWidth,T=E?st.topWidth:st.topLength;Yt(e,g-A/2,g+A/2,_+T/2+.38,`Island ${E?`5'6" long`:`3'6" wide`}`),En(e,g+A/2+.38,_-T/2,_+T/2,`Island ${E?`3'6" deep`:`5'6" long`}`)}if(r.interface==="north-bath"){let g=ye(qe.bathSouthPixelY);if(Yt(e,s,a,g-.38,`Bath overall 11'5"`),En(e,a-.4,o,g,`Bath depth 4'7\xBD"`),r.id===7){let _=g+ft.closetDepth,A=ce(qe.doorWestPixelX)-.16,T=A-qe.benchWidth,w=T-.08;Yt(e,s,a,_+.7,`Built-in wall 11'5"`),En(e,a-.38,g,_,`Depth 2'0"`),Yt(e,s,w,_+.08,`Closet 4'3\xBD"`),Yt(e,T,A,_+1.32,`Bench 3'0"`),En(e,s+.95,.7,5.2,`Wall mirror 4'6"`)}else{let E=.7+et.closetLength,A=(s+a)/2,T=A-et.benchWidth/2,w=A+et.benchWidth/2,F=g+et.benchDepth;En(e,s+ft.closetDepth+.3,.7,E,`Left closet 4'6"`),Yt(e,s,s+ft.closetDepth,E+.3,`Depth 2'0"`),Yt(e,T,w,F+.4,`Bench 3'0"`),En(e,a-.55,g,F,`Bench depth 1'7"`)}return}let c=r.side==="east"?a:s,h=r.side==="east"?c-we.powderWidth:c+we.powderWidth,d=l-we.powderLength;Yt(e,Math.min(h,c),Math.max(h,c),l-.38,`Powder overall 3'10\xBD"`),En(e,h+(r.side==="east"?-.32:.32),d,l,`Powder overall 7'4\xBD"`);let u=r.side==="east"?s:a,p=r.side==="east"?1:-1,f=ft.benchCenterZ-ft.benchLength/2,v=ft.benchCenterZ+ft.benchLength/2;En(e,u+p*(ft.benchDepth+.3),f,v,`Bench 3'0"`);let m=o+.18,y=f-.12;En(e,u+p*(ft.closetDepth+.3),m,y,`Coat closet 7'1"`),Yt(e,Math.min(u,u+p*ft.closetDepth),Math.max(u,u+p*ft.closetDepth),y-.3,`Depth 2'0"`)}var yr=class r extends Ne{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new at;let n=this,i=t.color!==void 0?new be(t.color):new be(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||r.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Rt,d=new b,u=new b,p=new b,f=new Re,v=new b(0,0,-1),m=new We,y=new b,g=new b,_=new We,E=new Re,A=this.camera,T=new sn(s,a,{samples:c,type:bi}),w=new an({name:l.name!==void 0?l.name:"unspecified",uniforms:Fl.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});w.uniforms.tDiffuse.value=T.texture,w.uniforms.color.value=i,w.uniforms.textureMatrix.value=E,this.material=w,this.onBeforeRender=function(F,B,k){if(u.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(k.matrixWorld),f.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(f),y.subVectors(u,p),y.dot(d)>0)return;y.reflect(d).negate(),y.add(u),f.extractRotation(k.matrixWorld),v.set(0,0,-1),v.applyMatrix4(f),v.add(p),g.subVectors(u,v),g.reflect(d).negate(),g.add(u),A.position.copy(y),A.up.set(0,1,0),A.up.applyMatrix4(f),A.up.reflect(d),A.lookAt(g),A.far=k.far,A.updateMatrixWorld(),A.projectionMatrix.copy(k.projectionMatrix),E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),E.multiply(A.projectionMatrix),E.multiply(A.matrixWorldInverse),E.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(A.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let Y=A.projectionMatrix;_.x=(Math.sign(m.x)+Y.elements[8])/Y.elements[0],_.y=(Math.sign(m.y)+Y.elements[9])/Y.elements[5],_.z=-1,_.w=(1+Y.elements[10])/Y.elements[14],m.multiplyScalar(2/m.dot(_)),Y.elements[2]=m.x,Y.elements[6]=m.y,Y.elements[10]=m.z+1-o,Y.elements[14]=m.w,n.visible=!1;let I=F.getRenderTarget(),Z=F.xr.enabled,X=F.shadowMap.autoUpdate;F.xr.enabled=!1,F.shadowMap.autoUpdate=!1,F.setRenderTarget(T),F.state.buffers.depth.setMask(!0),F.autoClear===!1&&F.clear(),F.render(B,A),F.xr.enabled=Z,F.shadowMap.autoUpdate=X,F.setRenderTarget(I);let ie=k.viewport;ie!==void 0&&F.state.viewport(ie),n.visible=!0},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}};yr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function cm(r){let{meshBox:e,mudroomGroup:t,cabinetInteriorMaterial:n,cabinetMaterial:i,hardwareMaterial:s,oakMaterial:a}=r,o=ce(164),l=ce(267),c=ye(qe.bathSouthPixelY),h=ce(qe.doorWestPixelX),d=ce(qe.doorEastPixelX),u=ft.closetDepth,p=c+u,f=c+u/2,v=8.15,m=.14,y=.08,g=new Ri({color:12110800,roughness:.16,metalness:.55,transparent:!0,opacity:.82}),_=h-.16,E=_-qe.benchWidth,A=E-y,T=A-o,w=(o+A)/2;e([T,m,u],[w,m/2,f],n,t),e([T,m,u],[w,v,f],i,t),e([m,v,u],[o+m/2,v/2,f],i,t),e([m,v,u],[A-m/2,v/2,f],i,t),e([T,v,m],[w,v/2,c+m/2],n,t);let F=.05,B=(T-F*3)/2;for(let D=0;D<2;D++){let R=o+F+B/2+D*(B+F);e([B,v-.35,.1],[R,v/2,p],g,t);let U=D===0?R+B*.37:R-B*.37;e([.07,.7,.12],[U,4.15,p+.08],s,t)}let k=new Ne(new on(.055,.055,T-.35,16),s);k.rotation.z=Math.PI/2,k.position.set(w,5.55,c+1.02),t.add(k);let Y=(E+_)/2;e([qe.benchWidth,m,u],[Y,.18,f],i,t),e([qe.benchWidth,m,u],[Y,.72,f],i,t),e([qe.benchWidth+.08,.2,u+.08],[Y,1.48,f],a,t),e([qe.benchWidth,4.75,.12],[Y,3.86,c+.08],i,t),e([qe.benchWidth,.16,u],[Y,6.26,f],a,t),e([m,6.34,u],[E,3.17,f],i,t),e([m,6.34,u],[_,3.17,f],i,t);for(let D of[-.82,0,.82])e([.18,.18,.16],[Y+D,4.48,c+.18],s,t);let I=v-6.34;e([qe.benchWidth,I,m],[Y,6.34+I/2,c+m/2],n,t);for(let D of[-qe.benchWidth/4,qe.benchWidth/4])e([qe.benchWidth/2-.05,I-.12,.1],[Y+D,6.34+I/2,p],i,t);let Z=d-h;e([m,7.05,u],[h+m/2,3.525,f],i,t),e([m,7.05,u],[d-m/2,3.525,f],i,t),e([Z,v-7.05,u],[(h+d)/2,7.05+(v-7.05)/2,f],i,t);let X=d+y,ie=l-X,he=(X+l)/2;ie>.35&&(e([ie,m,u],[he,m/2,f],n,t),e([ie,m,u],[he,v,f],i,t),e([m,v,u],[X+m/2,v/2,f],i,t),e([m,v,u],[l-m/2,v/2,f],i,t),e([ie,v,m],[he,v/2,c+m/2],n,t),e([ie-.1,v-.3,.1],[he,v/2,p],i,t),e([.07,.7,.12],[X+.22,4.15,p+.08],s,t));let re=4.5,Q=6.5,ne=2.95,q=3.85,z=o+.24,G=Math.min(window.devicePixelRatio||1,2),M=new yr(new St(re,Q),{clipBias:.003,textureWidth:Math.round(512*G),textureHeight:Math.round(768*G),color:10135464});M.rotation.y=Math.PI/2,M.position.set(z,q,ne),M.renderOrder=2,t.add(M);let x=.12,C=.1;for(let D of[ne-re/2,ne+re/2])e([C,Q+x*2,x],[z+.02,q,D],a,t);for(let D of[q-Q/2,q+Q/2])e([C,x,re+x*2],[z+.02,D,ne],a,t)}function hm(r){let{meshBox:e,mudroomGroup:t,cabinetInteriorMaterial:n,cabinetMaterial:i,hardwareMaterial:s,oakMaterial:a}=r,o=ce(164),l=ce(267),c=ye(qe.bathSouthPixelY),h=ce(qe.doorWestPixelX),d=ft.closetDepth,u=.7,p=u+et.closetLength,f=(u+p)/2,v=o+d/2,m=o+d,y=8.15,g=.14,_=new Ri({color:12110800,roughness:.16,metalness:.55,transparent:!0,opacity:.82});e([d,g,et.closetLength],[v,g/2,f],n,t),e([d,g,et.closetLength],[v,y,f],i,t),e([d,y,g],[v,y/2,u],i,t),e([d,y,g],[v,y/2,p],i,t),e([g,y,et.closetLength],[o+g/2,y/2,f],n,t);let E=.05,A=(et.closetLength-E*3)/2;for(let X=0;X<2;X++){let ie=u+E+A/2+X*(A+E);e([.1,y-.35,A],[m,y/2,ie],_,t);let he=X===0?ie+A*.35:ie-A*.35;e([.12,.7,.07],[m+.08,4.15,he],s,t)}let T=new Ne(new on(.055,.055,et.closetLength-.35,16),s);T.rotation.x=Math.PI/2,T.position.set(o+1.02,5.55,f),t.add(T);let w=(o+l)/2,F=w-et.benchWidth/2,B=w+et.benchWidth/2,k=c+et.benchDepth/2;e([et.benchWidth,.16,et.benchDepth],[w,.18,k],i,t),e([et.benchWidth,.16,et.benchDepth],[w,.72,k],i,t),e([et.benchWidth+.08,.2,et.benchDepth+.08],[w,1.48,k],a,t),e([g,.72,et.benchDepth],[F,.36,k],i,t),e([g,.72,et.benchDepth],[B,.36,k],i,t);let Y=(m+h)/2,I=Math.min(window.devicePixelRatio||1,2),Z=new yr(new St(et.mirrorWidth,et.mirrorHeight),{clipBias:.003,textureWidth:Math.round(512*I),textureHeight:Math.round(640*I),color:10135464});Z.position.set(Y,4.35,c+.2),Z.renderOrder=2,t.add(Z)}function fu(r,e){let{meshBox:t,mudroomGroup:n,cabinetInteriorMaterial:i,cabinetMaterial:s,hardwareMaterial:a,oakMaterial:o}=e;if(r.id===7){cm(e);return}if(r.id===8){hm(e);return}let l=r.side==="east"?"west":"east",c=l==="west"?ce(164):ce(267),h=l==="west"?1:-1,d=ft.benchDepth,u=ft.benchLength,p=ft.benchCenterZ,f=c+h*d/2,v=c+h*d,m=p+u/2,y=p-u/2;t([d,.16,u],[f,.18,p],s,n),t([d,.16,u],[f,.72,p],s,n),t([.14,.72,u],[v,.36,p],s,n),t([d+.08,.2,u+.08],[f,1.48,p],o,n),t([.12,4.75,u],[c+h*.08,3.86,p],s,n),t([d-.08,.16,u+.08],[f,6.26,p],o,n);for(let X of[-.82,0,.82])t([.16,.18,.18],[c+h*.18,4.48,p+X],a,n);let g=ft.closetDepth,_=y-.12,E=ye(116)+.18,A=_-E,T=(_+E)/2,w=c+h*g/2,F=c+h*g,B=8.15,k=.14;t([g,k,A],[w,k/2,T],i,n),t([g,k,A],[w,B,T],s,n),t([g,B,k],[w,B/2,E],s,n),t([g,B,k],[w,B/2,_],s,n),t([k,B,A],[c+h*k/2,B/2,T],i,n);let Y=.05,I=(A-Y*3)/2;for(let X=0;X<2;X++){let ie=E+Y+I/2+X*(I+Y);t([.13,B-.3,I],[F,B/2,ie],s,n);let he=X===0?ie+I*.37:ie-I*.37;t([.12,.78,.08],[F+h*.09,4.25,he],a,n)}let Z=new Ne(new on(.055,.055,A-.35,16),a);Z.rotation.x=Math.PI/2,Z.position.set(c+h*1.02,5.55,T),n.add(Z)}function um(r,e,t,n,i,s,a){let{meshBox:o}=a,l=.17;o([l,n,.22],[r,n/2,t],i,s),o([l,n,.22],[e,n/2,t],i,s),o([e-r+l,l,.22],[(r+e)/2,n,t],i,s)}function dm(r,e,t,n,i,s){var u,p;let{meshBox:a,powderGroup:o,whiteTrimMaterial:l}=s,c=Math.sign(t)||1,h=Math.abs(t)/ln.scaleX,d=new Ye;return a([h,6.9,.13],[c*h/2,3.45,0],(u=i.material)!=null?u:l,d),d.position.set(ce(e),0,ye(r)),d.rotation.y=n,((p=i.parent)!=null?p:o).add(d),d}function pm(r){let{meshBox:e,powderGroup:t,fixtureGroup:n,powderWallMaterial:i,woodMaterial:s,whiteTrimMaterial:a,tileMaterial:o,porcelainMaterial:l,oakMaterial:c,addWallZSegment:h}=r,d=ce(164),u=ce(267),p=ye(116),f=ye(qe.bathSouthPixelY),v=ce(qe.doorWestPixelX),m=ce(qe.doorEastPixelX);h(d,v,f,0,we.height,i,t,.375),h(v,m,f,7.05,we.height,i,t,.375),h(m,u,f,0,we.height,i,t,.375),um(v,m,f,7.05,s,t,r);let y=dm(qe.bathSouthPixelY,qe.doorEastPixelX,-(qe.doorEastPixelX-qe.doorWestPixelX),-Math.PI/2,{material:a,parent:t},r);e([u-d-.2,.05,f-p-.2],[(d+u)/2,.045,(p+f)/2],o,n,{cast:!1});let g=new Ye;e([1.25,.95,.38],[0,.7,-.55],l,g);let _=new Ne(new Ai(.62,30,18),l);_.scale.set(1,.42,1.25),_.position.set(0,.54,.04),_.castShadow=!0,g.add(_),g.position.set(d+2.45,0,p+1.4),n.add(g);let E=3.5,A=1.75,T=u-E/2-.45;e([E,2.45,A],[T,1.225,p+A/2+.32],c,n),e([E+.12,.12,A+.1],[T,2.52,p+A/2+.32],new Ke({color:15065559,roughness:.34}),n);let w=new Ne(new Ai(.46,28,16),l);w.scale.set(1.45,.23,.82),w.position.set(T,2.59,p+A/2+.28),n.add(w);let F=new Ne(new St(ce(244)-ce(185),4.25),new Xt({color:14282223,transparent:!0,opacity:.46,side:Pi}));return F.rotation.y=Math.PI,F.position.set((ce(185)+ce(244))/2,4.82,p+.1),n.add(F),{door:y}}function gu(r,e){let{meshBox:t,powderGroup:n,fixtureGroup:i,powderWallMaterial:s,woodMaterial:a,tileMaterial:o,addWallZSegment:l,addWallXWithDoorOpening:c}=e;if(r.interface==="north-bath")return pm(e);let h=r.side==="east"?ce(267):ce(164),d=r.side==="east"?h-we.powderWidth:h+we.powderWidth,u=ye(228),p=u-we.powderLength,f=(h+d)/2;t([we.powderWidth-.18,.045,we.powderLength-.18],[f,.045,(p+u)/2],o,i,{cast:!1}),c(d,p,u,[1.18,3.9]),mm(r.side,d,1.18,3.9,e),l(Math.min(d,h),Math.max(d,h),p,0,we.height,s,n,.375),l(Math.min(d,h),Math.max(d,h),u,0,we.height,s,n,.375);let v=d+(r.side==="east"?-.21:.21),m=we.powderLength,y=p+m/2;t([.12,.34,m],[v,.17,y],a,n),t([.12,.27,m],[v,we.height-.14,y],a,n),fm(r,f,d,h,p,u,e)}function mm(r,e,t,n,i){let{meshBox:s,powderGroup:a,powderWallMaterial:o,woodMaterial:l}=i,c=n-t-.12,d=t-c/2+.32;s([.14,6.85,c],[e,3.425,d],o,a);let u=e+(r==="east"?-.1:.1);s([.1,.12,c*2+.15],[u,6.98,t],l,a)}function fm(r,e,t,n,i,s,a){let{meshBox:o,fixtureGroup:l,porcelainMaterial:c,oakMaterial:h,wallMaterial:d,glassMaterial:u}=a,p=new Ye;o([1.25,.95,.38],[0,.7,-.55],c,p);let f=new Ne(new Ai(.62,30,18),c);f.scale.set(1,.42,1.25),f.position.set(0,.54,.04),f.castShadow=!0,p.add(f);let v=new Ne(new $r(.37,.07,12,32),new Ke({color:12503241,roughness:.4}));if(v.rotation.x=Math.PI/2,v.scale.z=1.2,v.position.set(0,.81,.03),p.add(v),p.position.set(e,0,i+1.25),l.add(p),r.interface==="foyer"){let m=r.side==="east"?n-.55:n+.55,y=o([.82,2.75,2],[m,1.37,s-2],h,l),g=o([.96,.18,2.12],[m,2.78,s-2],c,l);y.castShadow=g.castShadow=!0}else{let m=o([2.15,2.65,1.48],[e,1.325,s-.92],h,l),y=o([2.28,.17,1.58],[e,2.72,s-.92],c,l);m.castShadow=y.castShadow=!0}}var Et=Object.freeze({EXISTING:"existing",OPEN:"open"});function vu(r,e){let{meshBox:t,addPlanHorizontalWall:n,architectureGroup:i,kitchenBeamGroup:s,kitchenPostGroup:a,wallMaterial:o,whiteTrimMaterial:l}=e,c=yt.wallPixelY,h=yt.basementScreenWestPixelX,d=yt.basementScreenEndPixelX,u=yt.workNookWallPixelX;if(r!==Et.OPEN){n(c,h,u,[],{thickness:yt.wallThickness,trim:l});return}n(c,h,d,[],{thickness:yt.wallThickness,trim:l});let p=ce(d),f=ce(u),v=ye(c),m=we.height-yt.beamBottom,y=t([yt.postSize,yt.beamBottom,yt.postSize],[p,yt.beamBottom/2,v],o,a);y.name="Kitchen-dining opening - basement-side post";let g=t([f-p,m,.76],[(p+f)/2,yt.beamBottom+m/2,v],o,s);g.name="Kitchen-dining opening - conceptual support beam"}function _u(r){let{meshBox:e,addWallZSegment:t,addWallXSegment:n,architectureGroup:i,planUnderlayGroup:s,kitchenBeamGroup:a,kitchenPostGroup:o,kitchenFurnitureGroup:l,wallMaterial:c,woodMaterial:h,whiteTrimMaterial:d,floorMaterial:u,tileMaterial:p,glassMaterial:f,stairMaterial:v,oakMaterial:m}=r;function y(z,G,M,x,C,D){let R=M-z,U=x-G,P=Math.hypot(R,U),N=Math.atan2(R,U);return e([.375,we.height,P],[(z+M)/2,we.height/2,(G+x)/2],C,D,{rotationY:N})}function g(z,G,M={}){var S,ee,W,J;let x=G.x-z.x,C=G.y-z.y,D=Math.hypot(x,C),R=Math.atan2(x,C),U=(S=M.sill)!=null?S:2.55,P=(ee=M.height)!=null?ee:4.45,N=(W=M.thickness)!=null?W:.42,O=.18,V=new Ye;V.position.set((z.x+G.x)/2,0,(z.y+G.y)/2),V.rotation.y=R,i.add(V),e([N,U,D],[0,U/2,0],c,V),e([N,we.height-U-P,D],[0,U+P+(we.height-U-P)/2,0],c,V);for(let oe of[-D/2+O/2,D/2-O/2])e([N+.08,P,O],[0,U+P/2,oe],h,V);e([.07,P-.16,D-O*2],[0,U+P/2,0],f,V,{cast:!1});let j=(J=M.sillDepth)!=null?J:N+.2;e([j,.16,D],[0,U+.08,0],m,V),e([N+.16,.14,D],[0,U+P-.07,0],h,V),M.parapet&&e([N+.12,.46,D-.1],[0,.29,0],d,V)}function _(z,G,M,x,C,D=c,R=.42){let U=z-R/2,P=z+R/2,N=new Float32Array([U,0,G,U,0,M,U,C,M,U,x,G,P,0,G,P,0,M,P,C,M,P,x,G]),O=[0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,3,2,6,3,6,7,0,3,7,0,7,4,1,5,6,1,6,2],V=new Je;V.setAttribute("position",new Ct(N,3)),V.setIndex(O),V.computeVertexNormals();let j=new Ne(V,D);return j.castShadow=!0,j.receiveShadow=!0,i.add(j),j}function E(z,G,M,x,C){let D=ce(z),R=ce(M),U=ye(G),P=ye(x);e([R-D,.1,P-U],[(D+R)/2,-.04,(U+P)/2],C,i,{cast:!1})}function A(z,G,M,x=[],C={}){var V,j,S,ee;let D=ye(z),R=(V=C.material)!=null?V:c,U=(j=C.thickness)!=null?j:.42,P=(S=C.parent)!=null?S:i,N=x.slice().sort((W,J)=>W.a-J.a),O=G;for(let W of N)t(ce(O),ce(W.a),D,0,we.height,R,P,U),T(D,W,R,P,U,(ee=C.trim)!=null?ee:h),O=W.b;t(ce(O),ce(M),D,0,we.height,R,P,U)}function T(z,G,M,x,C,D){var P,N,O,V;let R=ce(G.a),U=ce(G.b);if(G.type==="window"){let j=(P=G.sill)!=null?P:2.65,S=(N=G.height)!=null?N:4.15;t(R,U,z,0,j,M,x,C),t(R,U,z,j+S,we.height,M,x,C),B(R,U,z,j,S,D,x,(O=G.panes)!=null?O:2)}else{let j=(V=G.height)!=null?V:7.05;t(R,U,z,j,we.height,M,x,C),Y(R,U,z,j,D,x)}}function w(z,G,M,x=[],C={}){var V,j,S,ee;let D=ce(z),R=(V=C.material)!=null?V:c,U=(j=C.thickness)!=null?j:.42,P=(S=C.parent)!=null?S:i,N=x.slice().sort((W,J)=>W.a-J.a),O=G;for(let W of N)n(D,ye(O),ye(W.a),0,we.height,R,P,U),F(D,W,R,P,U,(ee=C.trim)!=null?ee:h),O=W.b;n(D,ye(O),ye(M),0,we.height,R,P,U)}function F(z,G,M,x,C,D){var P,N,O;let R=ye(G.a),U=ye(G.b);if(G.type==="window"){let V=(P=G.sill)!=null?P:2.65,j=(N=G.height)!=null?N:4.15;n(z,R,U,0,V,M,x,C),n(z,R,U,V+j,we.height,M,x,C),k(z,R,U,V,j,D,x)}else{let V=(O=G.height)!=null?O:7.05;n(z,R,U,V,we.height,M,x,C),I(z,R,U,V,D,x)}}function B(z,G,M,x,C,D,R,U=2){let P=new Ne(new St(G-z-.12,C-.12),f);P.position.set((z+G)/2,x+C/2,M+.03),R.add(P);let N=.14;e([G-z+.22,N,.2],[(z+G)/2,x,M],D,R),e([G-z+.22,N,.2],[(z+G)/2,x+C,M],D,R),e([N,C+.2,.2],[z,x+C/2,M],D,R),e([N,C+.2,.2],[G,x+C/2,M],D,R);for(let O=1;O<U;O++){let V=z+(G-z)*O/U;e([.1,C-.12,.16],[V,x+C/2,M+.05],D,R)}}function k(z,G,M,x,C,D,R){let U=new Ne(new St(M-G-.12,C-.12),f);U.rotation.y=Math.PI/2,U.position.set(z+.03,x+C/2,(G+M)/2),R.add(U);let P=.14;e([.2,P,M-G+.22],[z,x,(G+M)/2],D,R),e([.2,P,M-G+.22],[z,x+C,(G+M)/2],D,R),e([.2,C+.2,P],[z,x+C/2,G],D,R),e([.2,C+.2,P],[z,x+C/2,M],D,R),e([.16,C-.12,.1],[z+.05,x+C/2,(G+M)/2],D,R)}function Y(z,G,M,x,C,D){e([.17,x,.22],[z,x/2,M],C,D),e([.17,x,.22],[G,x/2,M],C,D),e([G-z+.17,.17,.22],[(z+G)/2,x,M],C,D)}function I(z,G,M,x,C,D){e([.22,x,.17],[z,x/2,G],C,D),e([.22,x,.17],[z,x/2,M],C,D),e([.22,.17,M-G+.17],[z,x,(G+M)/2],C,D)}function Z(z,G,M,x,C={}){var N,O;let D=Math.sign(M)||1,R=Math.abs(M)/ln.scaleX,U=new Ye,P=(N=C.material)!=null?N:d;e([R,6.9,.13],[D*R/2,3.45,0],P,U),U.position.set(ce(G),0,ye(z)),U.rotation.y=x,((O=C.parent)!=null?O:i).add(U)}function X(z,G,M,x,C={}){var O,V,j;let D=Math.sign(M)||1,R=Math.abs(M)/ln.scaleZ,U=(O=C.height)!=null?O:6.9,P=new Ye,N=(V=C.material)!=null?V:d;e([.13,U,R],[0,U/2,D*R/2],N,P),P.position.set(ce(z),0,ye(G)),P.rotation.y=x,((j=C.parent)!=null?j:i).add(P)}function ie(z,G,M,x=7.1){let C=ce(G),D=ce(M),R=ye(z),U=D-C,P=U/2;for(let N=0;N<2;N++){let O=C+P*(N+.5);e([P-.18,x-.3,.07],[O,(x-.3)/2+.12,R],f,i,{cast:!1}),e([.15,x,.13],[C+P*N,x/2,R],h,i)}e([.15,x,.15],[D,x/2,R],h,i),e([U,.16,.15],[(C+D)/2,.08,R],h,i),e([U,.16,.15],[(C+D)/2,x-.08,R],h,i),e([.1,.7,.1],[C+P+.22,3.35,R-.08],h,i)}function he(){new va().load("assets/Background/floor-plans/first-floor.png",G=>{G.colorSpace=Ze;let M=497,x=438,C=M/ln.scaleX,D=x/ln.scaleZ,R=ce(M/2),U=ye(x/2),P=new Xt({map:G,transparent:!0,opacity:.68,side:Pi,depthWrite:!1}),N=new Ne(new St(C,D),P);N.rotation.x=-Math.PI/2,N.position.set(R,.025,U),s.add(N),s.visible=document.getElementById("planToggle").checked})}function re(){let G=new se(ce(326),ye(357)),M=new se(ce(344),ye(378)),x=new se(ce(393),ye(378)),C=new se(ce(411),ye(357)),D=3.05,R=new Je;R.setAttribute("position",new Se([G.x,D,G.y,M.x,D,M.y,x.x,D,x.y,C.x,D,C.y],3)),R.setIndex([0,2,1,0,3,2]),R.computeVertexNormals();let U=m.clone();U.side=Pi;let P=new Ne(R,U);P.receiveShadow=!0,i.add(P),e([C.x-G.x,D,.56],[(G.x+C.x)/2,D/2,G.y],c,i),e([C.x-G.x+.1,.18,.24],[(G.x+C.x)/2,D+.09,G.y-.03],m,i),e([C.x-G.x-.12,.46,.12],[(G.x+C.x)/2,.29,G.y-.31],d,i);let N={sill:D,height:3.7,thickness:.68,sillDepth:1.2,parapet:!0};g(G,M,N),g(M,x,N),g(x,C,N);let O=ce(368.5),V=ye(342),j=new Ne(new on(1.82,1.82,.18,40),m);j.position.set(O,2.52,V),j.castShadow=!0,l.add(j);let S=new Ne(new on(.34,.58,2.45,24),h);S.position.set(O,1.23,V),S.castShadow=!0,l.add(S);for(let[ee,W,J]of[[O-2.35,V,Math.PI/2],[O+2.35,V,-Math.PI/2],[O,V-2.25,0]]){let oe=new Ye;e([1.45,.16,1.35],[0,1.48,0],m,oe),e([1.45,2.55,.14],[0,2.3,-.61],h,oe);for(let de of[-.56,.56])for(let pe of[-.48,.48])e([.12,1.45,.12],[de,.73,pe],h,oe);oe.position.set(ee,0,W),oe.rotation.y=J,l.add(oe)}}function Q(){let z=ce(164),G=ce(196),M=ye(269),x=ye(323),C=10,D=.66;for(let O=0;O<C;O++){let V=M+(x-M)*O/C,j=M+(x-M)*(O+1)/C,S=D*(O+1);e([G-z,.12,j-V+.08],[(z+G)/2,S,(V+j)/2],m,i),e([G-z,D,.1],[(z+G)/2,S-D/2,V],v,i)}_(G,M,x,D,D*C,c,.34);let R=ce(249),U=ce(282),P=ye(289),N=ye(357);for(let O=0;O<10;O++){let V=P+(N-P)*O/10,j=P+(N-P)*(O+1)/10,S=Math.max(.06,.82-O*.08);e([U-R-.35,S,j-V],[(R+U)/2,S/2,(V+j)/2],v,i)}}function ne(z){let G=new Ke({color:2435371,roughness:.38}),M=new Ke({color:11450298,roughness:.28,metalness:.62});if(z!==Et.OPEN){let j=ce(302),S=ce(379),ee=(j+S)/2,W=ye(268);e([S-j,2.9,1.9],[ee,1.45,W],m,i),e([S-j,.16,2.02],[ee,2.98,W],G,i),e([S-j-.35,2.45,1.05],[ee,6.35,ye(263.5)],m,i),e([2,.08,1.2],[ee,3.08,W],M,i,{cast:!1})}let x=ye(314),C=ye(350);e([2,2.9,C-x],[ce(421),1.45,(x+C)/2],m,i),e([2.12,.16,C-x],[ce(421),2.98,(x+C)/2],G,i),e([1.05,2.45,C-x-.35],[ce(425.5),6.35,(x+C)/2],m,i),e([2.05,6.95,3],[ce(421),3.475,ye(330)],M,i);let D=ye(298),R=ye(349);e([1.95,2.9,R-D],[ce(291),1.45,(D+R)/2],m,i),e([2.08,.16,R-D],[ce(291),2.98,(D+R)/2],G,i),e([1.02,2.45,R-D-.35],[ce(286.5),6.35,(D+R)/2],m,i);let U=ce(385),P=ce(427),N=ye(207);e([P-U,2.9,1.65],[(U+P)/2,1.45,N],m,i),e([P-U,.16,1.78],[(U+P)/2,2.98,N],G,i);let O=ye(214),V=ye(255);e([1.65,2.9,V-O],[ce(422),1.45,(O+V)/2],m,i),e([1.78,.16,V-O],[ce(422),2.98,(O+V)/2],G,i),e([1.02,2.35,V-O-.25],[ce(426),6.25,(O+V)/2],m,i),e([1.2,.08,2],[ce(291),3.08,ye(337)],M,i,{cast:!1}),e([1.65,.08,1.1],[ce(404),3.08,N],M,i,{cast:!1})}function q(z,G=Et.EXISTING){E(41,121,164,357,u),E(164,121,267,228,u),E(267,121,382,262,u),E(382,199,430,260,p),E(164,228,267,357,u),E(249,260,430,357,p),A(116,40,382,[{a:72,b:116,type:"door",height:7},{a:185,b:244,type:"window",sill:2.65,height:4.35,panes:3},{a:293,b:354,type:"door",height:7.1}],{thickness:.68,trim:h}),w(40,116,357,[{a:145,b:171,type:"window"},{a:214,b:240,type:"window"},{a:286,b:312,type:"window"}],{thickness:.68,trim:h});let M=[{a:151,b:177,type:"window"}];G!==Et.OPEN&&M.push({a:230,b:260,type:"door",height:7.1}),w(382,116,260,M,{thickness:.68,trim:h}),A(199,382,430,[{a:394,b:420,type:"window",sill:3.2,height:3.5}],{thickness:.68,trim:d}),w(430,199,260,[],{thickness:.68,trim:d}),w(430,260,357,[{a:280,b:313,type:"door"}],{thickness:.68,trim:d}),A(357,40,326,[{a:91,b:136,type:"window",sill:2.7,height:4.1},{a:182,b:201,type:"window",sill:4.4,height:2},{a:211,b:252,type:"door",height:7.1}],{thickness:.68,trim:d}),A(357,411,430,[],{thickness:.68,trim:d}),re(),w(164,116,357,[{a:229,b:268,type:"door",height:7.25}],{thickness:.42,trim:h}),w(267,116,260,[{a:230,b:260,type:"door",height:7.1}],{thickness:.42,trim:h}),vu(G,{meshBox:e,addPlanHorizontalWall:A,architectureGroup:i,kitchenBeamGroup:a,kitchenPostGroup:o,wallMaterial:c,whiteTrimMaterial:d});let x=6.4,C=6.15,D=ce(164),R=ce(211),U=ye(323),P=ye(357),N=ye(331),O=ye(354);t(D,R,U,0,x,c,i,.42),n(R,U,N,0,x,c,i,.42),n(R,N,O,C,x,c,i,.42),n(R,O,P,0,x,c,i,.42),I(R,N,O,C,d,i),e([R-D,.2,P-U],[(D+R)/2,x,(U+P)/2],v,i),e([R-D,.08,P-U],[(D+R)/2,x+.14,(U+P)/2],m,i),w(249,258,357,[{a:262,b:289,type:"door",height:7}],{thickness:.42,trim:d}),w(282,289,357,[],{thickness:.42,trim:d}),X(164,229,19,-Math.PI/2,{material:d}),X(164,268,-19,Math.PI/2,{material:d}),X(267,230,29,Math.PI/2,{material:d}),ie(116,293,354,7.1),G!==Et.OPEN&&X(382,260,-29,Math.PI/2,{material:d}),X(249,289,-26,-Math.PI/2,{material:d}),X(430,313,-32,Math.PI/2,{material:d}),Z(357,252,-40,-Math.PI/2,{material:d}),X(211,354,-22,Math.PI/2,{material:d,height:6.15}),Q(),ne(G),he()}return{build:q}}var cn=Object.freeze({CENTERED:"center",BAY:"bay"}),Ft=Object.freeze({VERTICAL:"vertical",HORIZONTAL:"horizontal"});function Wl(r,e,t){let{meshBox:n,kitchenIslandGroup:i,cabinetMaterial:s,hardwareMaterial:a,islandCounterMaterial:o}=t,l=ce(st.centerPixelX),c=ye(r===cn.BAY?st.bayPixelY:st.centeredPixelY),h=st.counterHeight,d=e===Ft.HORIZONTAL,u=d?st.topLength:st.topWidth,p=d?st.topWidth:st.topLength,f=d?st.baseLength:st.baseWidth,v=d?st.baseWidth:st.baseLength,m=n([f-.26,.18,v-.28],[l,.09,c],a,i);m.name="Kitchen island toe kick";let y=n([f,h-.28,v],[l,.18+(h-.28)/2,c],s,i);y.name="Kitchen island cabinet base";let g=n([u,.16,p],[l,h+.08,c],o,i);if(g.name="Kitchen island countertop - 3 feet 6 inches by 5 feet 6 inches",d)for(let _ of[-1.58,0,1.58])n([.045,2.08,.035],[l+_,1.48,c+v/2+.02],a,i,{cast:!1}),n([.72,.08,.09],[l+_,2.3,c+v/2+.065],a,i,{cast:!1});else for(let _ of[-1.58,0,1.58])n([.035,2.08,.045],[l+f/2+.02,1.48,c+_],a,i,{cast:!1}),n([.09,.08,.72],[l+f/2+.065,2.3,c+_],a,i,{cast:!1});i.userData.position=r,i.userData.orientation=d?Ft.HORIZONTAL:Ft.VERTICAL,i.userData.plan={topWidth:st.topWidth,topLength:st.topLength,note:"Conceptual footprint; field measurements and appliance clearances control."}}var gm=["right","left","top","bottom","front","back"];function xr(r,e){let t=document.createElement("canvas");t.width=192,t.height=192;let n=t.getContext("2d");n.fillStyle=e,n.fillRect(0,0,t.width,t.height),n.strokeStyle="#5d6b72",n.lineWidth=8,n.strokeRect(4,4,t.width-8,t.height-8),n.fillStyle="#18333e",n.font="800 31px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(r.toUpperCase(),t.width/2,t.height/2);let i=new ei(t);return i.colorSpace=Ze,new Xt({map:i})}function yu({canvas:r,homeButton:e,mainCamera:t,controls:n,onFace:i,onHome:s}){let a=new Si({canvas:r,antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.setSize(104,104,!1),a.outputColorSpace=Ze;let o=new ur,l=new at(34,1,.1,20),c=[xr("Right","#d9e8ec"),xr("Left","#d9e8ec"),xr("Top","#eef4f5"),xr("Bottom","#c9d9dd"),xr("Front","#e4eef0"),xr("Back","#d3e1e5")],h=new Ne(new bn(1.65,1.65,1.65),c);o.add(h);let d=new Qn(new Ti(h.geometry),new zn({color:5399403,transparent:!0,opacity:.9}));h.add(d);let u=new mr,p=new se,f=null,v=!1;function m(){let g=t.position.clone().sub(n.target).normalize();l.position.copy(g.multiplyScalar(5)),l.up.copy(t.up),l.lookAt(0,0,0),a.render(o,l)}function y(g,_){let E=t.position.clone().sub(n.target),A=new Hn().setFromVector3(E);A.theta-=g*.012,A.phi=ti.clamp(A.phi-_*.012,.03,Math.PI-.03),t.up.set(0,1,0),t.position.copy(n.target).add(new b().setFromSpherical(A)),t.lookAt(n.target),n.update()}return r.addEventListener("pointerdown",g=>{f={x:g.clientX,y:g.clientY,lastX:g.clientX,lastY:g.clientY},v=!1,r.setPointerCapture(g.pointerId),g.preventDefault()}),r.addEventListener("pointermove",g=>{if(!f)return;let _=g.clientX-f.lastX,E=g.clientY-f.lastY;Math.hypot(g.clientX-f.x,g.clientY-f.y)>4&&(v=!0),v&&y(_,E),f.lastX=g.clientX,f.lastY=g.clientY}),r.addEventListener("pointerup",g=>{if(f){if(!v){let _=r.getBoundingClientRect();p.set((g.clientX-_.left)/_.width*2-1,-((g.clientY-_.top)/_.height)*2+1),u.setFromCamera(p,l);let E=u.intersectObject(h,!1)[0];E&&i(gm[E.face.materialIndex])}f=null,v=!1,r.releasePointerCapture(g.pointerId)}}),r.addEventListener("pointercancel",()=>{f=null,v=!1}),e.addEventListener("click",s),{render:m}}var Pa=document.getElementById("viewer"),Xl=document.getElementById("sceneCanvas"),vm=document.getElementById("loadingMessage"),Zt=new Si({canvas:Xl,antialias:!0,preserveDrawingBuffer:!0});Zt.setPixelRatio(Math.min(window.devicePixelRatio,2));Zt.shadowMap.enabled=!0;Zt.shadowMap.type=Nl;Zt.outputColorSpace=Ze;Zt.toneMapping=Ul;Zt.toneMappingExposure=1.05;var wn=new ur;wn.background=new be(14543083);wn.fog=new aa(14543083,220,1e3);var $e=new at(62,1,.08,1600);$e.position.set(0,5.5,15.5);var ke=new wa($e,Zt.domElement);ke.enableDamping=!0;ke.dampingFactor=.065;ke.enablePan=!0;ke.screenSpacePanning=!0;ke.mouseButtons.LEFT=Sn.ROTATE;ke.mouseButtons.MIDDLE=Sn.PAN;ke.mouseButtons.RIGHT=-1;ke.minDistance=2;ke.maxDistance=500;ke.zoomSpeed=5;ke.panSpeed=1.05;ke.maxPolarAngle=Math.PI*.49;ke.target.set(0,3.3,.7);ke.update();Xl.addEventListener("wheel",r=>{var n;r.preventDefault(),r.stopImmediatePropagation();let e=$e.position.distanceTo(ke.target);if(r.ctrlKey){let i=Xl.getBoundingClientRect(),s=new se((r.clientX-i.left)/i.width*2-1,-((r.clientY-i.top)/i.height)*2+1),a=new mr;a.setFromCamera(s,$e);let o=$e.getWorldDirection(new b),l=new Rt().setFromNormalAndCoplanarPoint(o,ke.target),c=(n=a.ray.intersectPlane(l,new b))!=null?n:ke.target.clone(),h=Math.exp(r.deltaY*.008),u=ti.clamp(e*h,ke.minDistance,ke.maxDistance)/e,p=$e.position.clone().sub(ke.target).multiplyScalar(u);ke.target.lerp(c,1-u),$e.position.copy(ke.target).add(p),ke.update();return}let t=2*e*Math.tan(ti.degToRad($e.fov/2))/Math.max(1,Pa.clientHeight);if(r.shiftKey){let i=$e.position.clone().sub(ke.target),s=new Hn().setFromVector3(i);s.theta-=r.deltaX*.006,s.phi=ti.clamp(s.phi-r.deltaY*.006,.03,Math.PI-.03),$e.up.set(0,1,0),$e.position.copy(ke.target).add(new b().setFromSpherical(s)),$e.lookAt(ke.target)}else{let i=new b().setFromMatrixColumn($e.matrix,0).multiplyScalar(r.deltaX*t),s=new b().setFromMatrixColumn($e.matrix,1).multiplyScalar(-r.deltaY*t);$e.position.add(i).add(s),ke.target.add(i).add(s)}ke.update()},{capture:!0,passive:!1});var _m=new _a(16055295,7297859,2.15);wn.add(_m);var ii=new xa(16774365,3.1);ii.position.set(-2,12,-10);ii.castShadow=!0;ii.shadow.mapSize.set(2048,2048);ii.shadow.camera.left=-12;ii.shadow.camera.right=12;ii.shadow.camera.top=12;ii.shadow.camera.bottom=-12;wn.add(ii);var Su=new ts(16769980,35,22,1.6);Su.position.set(0,8.1,1.3);wn.add(Su);var Eu=new ts(16771529,42,28,1.6);Eu.position.set(0,8,vr.northZ+6.4);wn.add(Eu);var La=new ya(15398911,72,34,Math.PI/4.2,.72,1.35);La.position.set(ce(383/2),6.25,ye(357)-.3);La.target.position.set(-.8,3.2,1.8);wn.add(La,La.target);var Ii=new Ye,ni=new Ye,Ia=new Ye,Da=new Ye,Li=new Ye,Tu=new Ye,Ua=new Ye,is=new Ye,Oa=new Ye,Ba=new Ye,Fa=new Ye,Mr=new Ye;wn.add(Ua,Ii,ni,Ia,Da,Li,Tu,is,Oa,Ba,Fa,Mr);var ym=new Ke({map:Em(),roughness:.63,metalness:0}),rs=new Ke({color:15657439,roughness:.86}),Na=new Ke({color:15657439,roughness:.86,transparent:!0,opacity:1}),ns=new Ke({color:4924692,roughness:.46}),wu=new Ke({color:15921386,roughness:.72}),xm=new Ke({color:15328732,roughness:.78}),jl=new Ke({color:11828035,roughness:.62}),Yl=new Ke({color:13017975,roughness:.68}),Mm=new Ke({color:8413252,roughness:.78}),ql=new Ke({color:3946032,roughness:.36,metalness:.48}),Au=new Ke({color:2435371,roughness:.34,metalness:.04}),Ru=new Ri({color:12244959,transparent:!0,opacity:.28,roughness:.08,transmission:.38}),Cu=new Ke({color:14080469,roughness:.76}),bm=new Ke({color:16316661,roughness:.24}),Rg=new Ke({color:14210250,roughness:.95}),Cg=new Ke({color:3234373,roughness:1}),Pg=new Ke({color:7306872,roughness:1}),xu=new Xt({color:6322309,transparent:!0,opacity:.23,side:Pi,depthWrite:!1}),hn=new URLSearchParams(window.location.search),Mu,Sm=Number.parseInt((Mu=hn.get("option"))!=null?Mu:"",10),bu,ot=(bu=_r.find(r=>r.id===Sm))!=null?bu:_r[0],zt=hn.get("kitchen")===Et.OPEN?Et.OPEN:Et.EXISTING,un=hn.get("island")===cn.BAY?cn.BAY:cn.CENTERED,dn=hn.get("orientation")===Ft.HORIZONTAL?Ft.HORIZONTAL:Ft.VERTICAL;document.getElementById("kitchenBeamToggle").checked=hn.get("beam")!=="hidden";document.getElementById("kitchenPostToggle").checked=hn.get("post")!=="hidden";document.getElementById("kitchenTableToggle").checked=hn.get("table")!=="hidden";document.getElementById("kitchenIslandToggle").checked=["center","bay"].includes(hn.get("island"));var br=["frontdoor","away","foyer","threshold","living","den","window","kitchen","dining","patio","island","kitchenplan","breakfast","overhead"].includes(hn.get("view"))?hn.get("view"):"frontdoor",Aa=null,Tn=null,Ra=null;document.getElementById("bathroomDoorToggle").checked=hn.get("door")==="closed";function Em(){let r=document.createElement("canvas");r.width=512,r.height=512;let e=r.getContext("2d");e.fillStyle="#bd8954",e.fillRect(0,0,r.width,r.height);let t=46;for(let i=0;i<r.height;i+=t){e.strokeStyle="rgba(70,39,20,.28)",e.lineWidth=2,e.beginPath(),e.moveTo(0,i),e.lineTo(r.width,i),e.stroke();let s=Math.floor(i/t)%3*90;for(let a=s;a<r.width;a+=180)e.strokeStyle="rgba(75,42,20,.20)",e.beginPath(),e.moveTo(a,i),e.lineTo(a,i+t),e.stroke();for(let a=0;a<9;a++){let o=i+5+a*4;e.strokeStyle=`rgba(85,48,24,${.025+a%3*.012})`,e.beginPath(),e.moveTo(0,o),e.bezierCurveTo(120,o+2,360,o-2,512,o+1),e.stroke()}}let n=new ei(r);return n.wrapS=n.wrapT=Gr,n.repeat.set(2.7,2.7),n.colorSpace=Ze,n.anisotropy=Zt.capabilities.getMaxAnisotropy(),n}function qt(r,e,t,n,i={}){var o,l;let s=new bn(r[0],r[1],r[2]),a=new Ne(s,t);return a.position.set(e[0],e[1],e[2]),a.castShadow=(o=i.cast)!=null?o:!0,a.receiveShadow=(l=i.receive)!=null?l:!0,i.rotationY&&(a.rotation.y=i.rotationY),n.add(a),a}function Zl(r){var e;for(;r.children.length;){let t=r.children.pop();(e=t.traverse)==null||e.call(t,n=>{var i;n.geometry&&n.geometry.dispose(),(i=n.getRenderTarget)==null||i.call(n).dispose()})}}function Pu(r,e,t,n=0,i=we.height,s=rs,a=Ii,o=we.wall){if(!(e-r<=.01||i-n<=.01))return qt([e-r,i-n,o],[(r+e)/2,(n+i)/2,t],s,a)}function Ca(r,e,t,n=0,i=we.height,s=rs,a=Ii,o=we.wall){if(!(t-e<=.01||i-n<=.01))return qt([o,i-n,t-e],[r,(n+i)/2,(e+t)/2],s,a)}function Tm(r,e,t,n,i=Na){let[s,a]=n;Ca(r,e,s,0,we.height,i,ni,.375),Ca(r,s,a,7.05,we.height,i,ni,.375),Ca(r,a,t,0,we.height,i,ni,.375),wm(r,s,a,ni)}function wm(r,e,t,n=ni){qt([.3,7.05,.17],[r,7.05/2,e],ns,n),qt([.3,7.05,.17],[r,7.05/2,t],ns,n),qt([.3,.17,t-e+.15],[r,7.05,(e+t)/2],ns,n)}function Am(){let r=ce(164),e=ce(267),t=ye(228),n=.44;qt([e-r,n,.56],[(r+e)/2,we.height-n/2,t],rs,Ii)}function Rm(){let t=new Ne(new St(2.8,7),xu);t.rotation.y=Math.PI/2,t.position.set(-we.width/2+.12,7/2,-1.85),is.add(t);let n=new Ne(new St(2.8,7),xu);n.rotation.y=-Math.PI/2,n.position.set(we.width/2-.12,7/2,1.35),is.add(n),[t,n].forEach(i=>{let s=new Qn(new Ti(i.geometry),new zn({color:3495011,transparent:!0,opacity:.65}));i.add(s)})}var Cm=_u({meshBox:qt,addWallZSegment:Pu,addWallXSegment:Ca,architectureGroup:Ii,planUnderlayGroup:Ua,kitchenBeamGroup:Oa,kitchenPostGroup:Ba,kitchenFurnitureGroup:Fa,wallMaterial:rs,woodMaterial:ns,whiteTrimMaterial:wu,floorMaterial:ym,tileMaterial:Cu,glassMaterial:Ru,stairMaterial:xm,oakMaterial:jl});function Jl(r){var t;[Ua,Ii,ni,Ia,Da,Li,Tu,is,Oa,Ba,Fa,Mr].forEach(Zl),qt([70,.08,65],[3.5,-.18,5],new Ke({color:13947078,roughness:1}),Ii,{cast:!1}),Cm.build(r,zt),Am();let e=gu(r,{meshBox:qt,powderGroup:ni,fixtureGroup:Ia,powderWallMaterial:Na,woodMaterial:ns,whiteTrimMaterial:wu,tileMaterial:Cu,porcelainMaterial:bm,oakMaterial:jl,wallMaterial:rs,glassMaterial:Ru,addWallZSegment:Pu,addWallXWithDoorOpening:Tm});Aa=(t=e==null?void 0:e.door)!=null?t:null,Lu(!1),fu(r,{meshBox:qt,mudroomGroup:Da,cabinetInteriorMaterial:Mm,cabinetMaterial:Yl,hardwareMaterial:ql,oakMaterial:jl}),Vl(r,Li,zt,document.getElementById("kitchenIslandToggle").checked?un:null,dn),Wl(un,dn,{meshBox:qt,kitchenIslandGroup:Mr,cabinetMaterial:Yl,hardwareMaterial:ql,islandCounterMaterial:Au}),Rm(),Kl()}function Lu(r=!0){let e=document.getElementById("bathroomDoorToggle"),t=ot.interface==="north-bath"&&Aa;if(e.disabled=!t,document.getElementById("bathroomDoorRow").classList.toggle("disabled",!t),Aa&&(Aa.rotation.y=e.checked?0:-Math.PI/2),r){let n=new URL(window.location.href);n.searchParams.set("door",e.checked?"closed":"open"),window.history.replaceState({},"",n)}}function Kl(){let r=document.getElementById("cutawayToggle").checked;Na.opacity=r?.34:1,Na.depthWrite=!r,Ia.visible=r,Ua.visible=document.getElementById("planToggle").checked,Da.visible=document.getElementById("mudroomToggle").checked,Li.visible=document.getElementById("dimensionToggle").checked,is.visible=document.getElementById("ghostToggle").checked;let e=zt===Et.OPEN;Oa.visible=e&&document.getElementById("kitchenBeamToggle").checked,Ba.visible=e&&document.getElementById("kitchenPostToggle").checked,Fa.visible=document.getElementById("kitchenTableToggle").checked,Mr.visible=e&&document.getElementById("kitchenIslandToggle").checked;for(let t of["kitchenBeamRow","kitchenPostRow","kitchenIslandRow"])document.getElementById(t).classList.toggle("disabled",!e);document.getElementById("kitchenBeamToggle").disabled=!e,document.getElementById("kitchenPostToggle").disabled=!e,document.getElementById("kitchenIslandToggle").disabled=!e,document.querySelectorAll("[data-island-position]").forEach(t=>{t.disabled=!e||!document.getElementById("kitchenIslandToggle").checked,t.classList.toggle("active",t.dataset.islandPosition===un)}),document.querySelectorAll("[data-island-orientation]").forEach(t=>{t.disabled=!e||!document.getElementById("kitchenIslandToggle").checked,t.classList.toggle("active",t.dataset.islandOrientation===dn)})}function Iu(){let r=document.getElementById("optionList");r.innerHTML="";for(let e of _r){let t=document.createElement("button");t.className=`option-button${e.id===ot.id?" active":""}`,t.innerHTML=`
      <span class="option-number">${e.id}</span>
      <span class="option-copy"><strong>${e.title}</strong><small>${e.short}</small></span>
      <span class="option-side">${e.side.toUpperCase()}</span>
    `,t.addEventListener("click",()=>Dm(e.id)),r.appendChild(t)}}function $l(){let r=zt===Et.OPEN,e=r&&document.getElementById("kitchenBeamToggle").checked,t=r&&document.getElementById("kitchenPostToggle").checked,n=r&&document.getElementById("kitchenIslandToggle").checked,i=document.getElementById("kitchenTableToggle").checked,s=r?`Open kitchen \xB7 ${e?"dropped beam shown":"no visible beam"}`:"Existing kitchen wall";document.getElementById("viewerOptionName").textContent=`Option ${ot.id}`,document.getElementById("viewerOptionFootprint").textContent=`${ot.title} \xB7 ${s}`,document.getElementById("windowCalloutText").textContent=ot.interface==="north-bath"?"Window incorporated into half bath":"North window preserved",document.getElementById("optionSummary").innerHTML=`
    <span class="status">${ot.status}</span>
    <h3>${ot.title}</h3>
    <p>${ot.description}</p>
    <p><strong>Kitchen-dining:</strong> ${r?`Large opening with the work-nook wall and basement screen retained. Wall cabinetry removed. ${e?"Dropped beam shown.":"No visible beam shown."} ${t?"Basement-side post shown.":"Post hidden."}`:"Existing wall, work-nook door and wall cabinetry retained."}</p>
    <p><strong>Kitchen furniture:</strong> ${n?`3'6" x 5'6" island, ${dn===Ft.HORIZONTAL?"east-west":"north-south"}, ${un===cn.BAY?"shifted toward the bay":"centered for balanced circulation"}`:"No island"}; ${i?"breakfast table shown":"breakfast table removed"}.</p>
  `;let a;ot.id===7?a=[["Half bath overall",`11'5" x 4'7\xBD"`],["Bathroom-backed built-in",`11'5" x 2'0"`],["Mirrored coat closet",`about 4'3\xBD" wide`],["Integrated sitting bench",`3'0" wide`],["Left-wall mirror",`4'6" x 6'6"`]]:ot.id===8?a=[["Half bath overall",`11'5" x 4'7\xBD"`],["Left-wall coat closet",`4'6" x 2'0"`],["Opposite-entry bench",`3'0" x 1'7"`],["Frameless bench mirror",`5'3" x 5'0"`]]:a=[["Powder overall",`3'10\xBD" x 7'4\xBD"`],["Powder clear",`about 3'6" x 7'0"`],["Coat closet",`about 7'1" x 2'0"`],["Entrance bench",`3'0" x 1'7"`]];let o=[["Den / future mudroom",`11'5" x 11'8"`],["Three-panel window",`about 6'6\xBD"`],["Kitchen-dining interface",r?`about 11'1" opening span`:"existing wall"],["Kitchen island",n?`3'6" x 5'6" - ${dn===Ft.HORIZONTAL?"east-west":"north-south"}, ${un===cn.BAY?"toward bay":"centered"}`:"not shown"]];document.getElementById("dimensionGrid").innerHTML=[...o,...a].map(([l,c])=>`<div><span>${l}</span><strong>${c}</strong></div>`).join("")}function Du(){Zl(Mr),Wl(un,dn,{meshBox:qt,kitchenIslandGroup:Mr,cabinetMaterial:Yl,hardwareMaterial:ql,islandCounterMaterial:Au})}function Ql(){Zl(Li),Vl(ot,Li,zt,document.getElementById("kitchenIslandToggle").checked?un:null,dn),Li.visible=document.getElementById("dimensionToggle").checked}function Sr(r=!0){Kl(),$l();let e=zt===Et.OPEN&&document.getElementById("kitchenIslandToggle").checked,t=document.getElementById("kitchenFurnitureWarning");t.hidden=!(e&&document.getElementById("kitchenTableToggle").checked);let n=document.getElementById("islandClearanceNote");if(n.hidden=!e,e){let s=dn===Ft.HORIZONTAL,a=un===cn.BAY,o=!s&&a;n.classList.toggle("warning-note",o),n.textContent=s?a?`East-west toward bay: about 3'6" at both north and sill ends, with about 3'6" side aisles.`:`East-west centered: about 3'1" north, 4'1" at the bay sill and 3'6" side aisles.`:a?`North-south toward bay: only about 2'6" at the bay sill - likely too tight. Shown for comparison, not recommended.`:`North-south centered: about 4'5" side aisles and 3'1" at the bay sill; the short north end opens into dining.`}if(!r)return;let i=new URL(window.location.href);i.searchParams.set("option",ot.id),i.searchParams.set("kitchen",zt),i.searchParams.set("beam",document.getElementById("kitchenBeamToggle").checked?"visible":"hidden"),i.searchParams.set("post",document.getElementById("kitchenPostToggle").checked?"visible":"hidden"),i.searchParams.set("table",document.getElementById("kitchenTableToggle").checked?"shown":"hidden"),i.searchParams.set("island",document.getElementById("kitchenIslandToggle").checked?un:"none"),i.searchParams.set("orientation",dn),i.searchParams.set("view",br),window.history.replaceState({},"",i)}function Pm(r){un=r===cn.BAY?cn.BAY:cn.CENTERED,document.getElementById("kitchenIslandToggle").checked=!0,Du(),Ql(),Sr(!0)}function Lm(r){dn=r===Ft.HORIZONTAL?Ft.HORIZONTAL:Ft.VERTICAL,document.getElementById("kitchenIslandToggle").checked=!0,Du(),Ql(),Sr(!0)}function Im(r){zt=r===Et.OPEN?Et.OPEN:Et.EXISTING,document.querySelectorAll("[data-kitchen-mode]").forEach(t=>t.classList.toggle("active",t.dataset.kitchenMode===zt));let e=new URL(window.location.href);e.searchParams.set("option",ot.id),e.searchParams.set("kitchen",zt),e.searchParams.set("view",br),window.history.replaceState({},"",e),Jl(ot),Sr(!0)}function Dm(r){var t;ot=(t=_r.find(n=>n.id===r))!=null?t:_r[0];let e=new URL(window.location.href);e.searchParams.set("option",ot.id),e.searchParams.set("kitchen",zt),e.searchParams.set("view",br),window.history.replaceState({},"",e),Iu(),$l(),Jl(ot)}var Nm={frontdoor:r=>({position:new b(1.8,5.35,ye(357)-.95),target:new b(r.side==="east"?.65:-.65,3.15,1.6)}),away:()=>({position:new b(.55,5.25,vr.northZ-1.1),target:new b(-.35,3.15,vr.southZ-1.4)}),foyer:r=>({position:new b(-.3,5.3,vr.northZ+7.2),target:new b(r.side==="east"?.9:-.9,3.2,1.1)}),threshold:r=>({position:new b(r.side==="east"?-1:1,5.25,vr.northZ+1.35),target:new b(r.side==="east"?1.6:-1.6,3.15,-.6)}),living:()=>({position:new b(-15.6,5.2,3),target:new b(-4.9,3.25,8.6)}),den:r=>({position:new b(r.side==="east"?-4.9:4.9,5.1,-3.45),target:new b(r.side==="east"?2:-2,3.15,2.25)}),window:r=>({position:new b(r.side==="east"?-1.5:1.5,5,-4.85),target:new b(r.side==="east"?2.2:-2.2,3.05,3.25)}),kitchen:()=>({position:new b(19.2,5.7,13),target:new b(21,3.2,6)}),dining:()=>({position:new b(13,5.8,-1.2),target:new b(12.5,3.4,10.2)}),patio:()=>({position:new b(12.2,5.4,7),target:new b(12.2,3.4,-6.1)}),island:()=>({position:new b(21,8,9.8),target:new b(15.5,1.4,16.4)}),kitchenplan:()=>({position:new b(15.5,24,16),target:new b(15.5,0,16)}),breakfast:()=>({position:new b(10.5,7.2,10.5),target:new b(16.6,2.6,19)}),overhead:()=>({position:new b(2,72,9),target:new b(2,0,9)})};function Um(r){var s;Tn=null;let e=ke.target.clone(),t=Math.max(18,$e.position.distanceTo(e)),n={front:new b(0,0,1),back:new b(0,0,-1),right:new b(1,0,0),left:new b(-1,0,0),top:new b(0,1,0),bottom:new b(0,-1,0)},i=(s=n[r])!=null?s:n.front;$e.up.set(0,Math.abs(i.y)>.5?0:1,i.y>.5?-1:i.y<-.5?1:0),$e.position.copy(e).addScaledVector(i,t),$e.lookAt(e),ke.update()}function ec(r){br=r;let e=r==="overhead"||r==="kitchenplan";$e.up.set(0,e?0:1,e?-1:0);let t=new URL(window.location.href);t.searchParams.set("option",ot.id),t.searchParams.set("view",br),window.history.replaceState({},"",t);let n=Nm[r](ot);Tn={start:performance.now(),duration:720,fromPosition:$e.position.clone(),fromTarget:ke.target.clone(),toPosition:n.position,toTarget:n.target}}function Om(r){if(!Tn)return;let e=Math.min(1,(r-Tn.start)/Tn.duration),t=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;$e.position.lerpVectors(Tn.fromPosition,Tn.toPosition,t),ke.target.lerpVectors(Tn.fromTarget,Tn.toTarget,t),e>=1&&(Tn=null)}function Nu(){let r=Math.max(1,Pa.clientWidth),e=Math.max(1,Pa.clientHeight);Zt.setSize(r,e,!1),$e.aspect=r/e,$e.updateProjectionMatrix()}function Uu(r){requestAnimationFrame(Uu),Om(r),ke.update(),Zt.render(wn,$e),Ra==null||Ra.render()}function Bm(){document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>ec(e.dataset.camera))),document.querySelectorAll("[data-kitchen-mode]").forEach(e=>e.addEventListener("click",()=>Im(e.dataset.kitchenMode))),document.querySelectorAll("[data-island-position]").forEach(e=>e.addEventListener("click",()=>Pm(e.dataset.islandPosition))),document.querySelectorAll("[data-island-orientation]").forEach(e=>e.addEventListener("click",()=>Lm(e.dataset.islandOrientation))),["kitchenBeamToggle","kitchenPostToggle","kitchenTableToggle"].forEach(e=>{document.getElementById(e).addEventListener("change",()=>Sr(!0))}),document.getElementById("kitchenIslandToggle").addEventListener("change",()=>{Ql(),Sr(!0)}),["cutawayToggle","planToggle","mudroomToggle","dimensionToggle","ghostToggle"].forEach(e=>document.getElementById(e).addEventListener("change",Kl)),document.getElementById("bathroomDoorToggle").addEventListener("change",()=>Lu(!0));let r={foyerAway:{src:"assets/Background/listing/photos/12_Foyer-Entrance.jpg",caption:"Existing foyer looking away from the den",alt:"Existing foyer with front door, staircase and living-room opening"},denToFoyer:{src:"assets/Background/listing/photos/11_Living-Room_5.jpg",caption:"Existing den looking toward the foyer and side doors",alt:"Existing den looking toward the foyer and side doors"},livingScale:{src:"assets/Background/listing/photos/03_Living-Room_2.jpg",caption:"Living-room volume opening off the foyer",alt:"Existing living room showing its broad proportions and foyer connection"},window:{src:"assets/Background/listing/photos/10_Living-Room_4.jpg",caption:"Existing den looking toward the north window",alt:"Existing den looking toward the north window"},plan:{src:"assets/Background/floor-plans/first-floor.png",caption:"Approximate first-floor marketing plan",alt:"Approximate first-floor marketing plan"}};document.querySelectorAll("[data-photo]").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll("[data-photo]").forEach(i=>i.classList.toggle("active",i===e));let t=r[e.dataset.photo],n=document.getElementById("referencePhoto");n.src=t.src,n.alt=t.alt,document.getElementById("photoCaption").textContent=t.caption})}),document.getElementById("helpButton").addEventListener("click",()=>document.getElementById("helpDialog").showModal()),document.getElementById("photoExpand").addEventListener("click",()=>{let e=document.getElementById("referencePhoto"),t=document.getElementById("expandedPhoto");t.src=e.src,t.alt=e.alt,document.getElementById("photoDialog").showModal()}),document.querySelectorAll(".dialog-close").forEach(e=>e.addEventListener("click",()=>e.closest("dialog").close())),document.getElementById("screenshotButton").addEventListener("click",()=>{Zt.render(wn,$e);let e=document.createElement("a");e.download=`90-hull-option-${ot.id}-kitchen-${zt}.png`,e.href=Zt.domElement.toDataURL("image/png"),e.click()})}Iu();document.querySelectorAll("[data-kitchen-mode]").forEach(r=>r.classList.toggle("active",r.dataset.kitchenMode===zt));document.querySelectorAll("[data-island-position]").forEach(r=>r.classList.toggle("active",r.dataset.islandPosition===un));document.querySelectorAll("[data-island-orientation]").forEach(r=>r.classList.toggle("active",r.dataset.islandOrientation===dn));$l();Bm();Jl(ot);Sr(!1);Nu();Ra=yu({canvas:document.getElementById("viewCubeCanvas"),homeButton:document.getElementById("viewCubeHome"),mainCamera:$e,controls:ke,onFace:Um,onHome:()=>ec("frontdoor")});new ResizeObserver(Nu).observe(Pa);requestAnimationFrame(Uu);ec(br);vm.classList.add("hidden");window.__visualizerReady=!0;})();
