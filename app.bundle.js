(()=>{var Ln={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var au=1,ec=2,kn=3,ci=0,Ft=1,Vi=2;var Ri=100;var qo=204,Zo=205;var ou=0,od=1,ld=2,oi=0,cd=1,hd=2,ud=3,tc=4,dd=5,pd=6;var lu=300,_r=301,yr=302,Jo=303,Ko=304,Na=306,ts=1e3,Gn=1001,$o=1002,Lt=1003,Rc=1004;var co=1005;var pn=1006,md=1007;var ta=1008;var Li=1009;var nc=1012,cu=1013,ri=1014,si=1015,Ui=1016,hu=1017,uu=1018,Ii=1020;var bn=1023;var Di=1026,xr=1027;var du=1029;var pu=1031,mu=1033,ho=33776,uo=33777,po=33778,mo=33779,Cc=35840,Pc=35841,Lc=35842,Ic=35843,fu=36196,Dc=37492,Nc=37496,Uc=37808,Oc=37809,Bc=37810,Fc=37811,Hc=37812,zc=37813,kc=37814,Gc=37815,Vc=37816,Wc=37817,Xc=37818,jc=37819,Yc=37820,qc=37821,fo=36492,Zc=36494,Jc=36495;var Kc=36284,$c=36285,Qc=36286;var na=2300,ia=2301,go=2302,eh=2400,th=2401,nh=2402;var gu=3e3,Ni=3001;var Sn="",Ke="srgb",Vn="srgb-linear",ic="display-p3",Ua="display-p3-linear",ra="linear",tt="srgb",sa="rec709",aa="p3";var qi=7680;var Qo=35044;var ih="300 es",el=1035,Mr=2e3,oa=2001,Tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=1234567,fr=Math.PI/180,br=180/Math.PI;function wn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Tt[255&r]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]+"-"+Tt[255&e]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[63&t|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[255&n]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function tl(r,e){return(r%e+e)%e}function Zr(r,e,t){return(1-t)*r+t*e}function nl(r){return(r&r-1)==0&&r!==0}function la(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var di={DEG2RAD:fr,RAD2DEG:br,generateUUID:wn,clamp:ut,euclideanModulo:tl,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Zr,damp:function(r,e,t,n){return Zr(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(tl(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(rh=r);let e=rh+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*fr},radToDeg:function(r){return r*br},isPowerOfTwo:nl,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:la,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*f,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*f,o*l);break;case"ZYZ":r.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Ze,denormalize:En},se=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ne=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],_=i[0],m=i[3],y=i[6],g=i[1],v=i[4],E=i[7],R=i[2],w=i[5],T=i[8];return s[0]=a*_+o*g+c*R,s[3]=a*m+o*v+c*w,s[6]=a*y+o*E+c*T,s[1]=l*_+h*g+u*R,s[4]=l*m+h*v+u*w,s[7]=l*y+h*E+u*T,s[2]=d*_+p*g+f*R,s[5]=d*m+p*v+f*w,s[8]=d*y+p*E+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vo=new Ne;function vu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ns(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fd(){let r=ns("canvas");return r.style.display="block",r}var sh={};function Jr(r){r in sh||(sh[r]=!0,console.warn(r))}var ah=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oh=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[Vn]:{transfer:ra,primaries:sa,toReference:r=>r,fromReference:r=>r},[Ke]:{transfer:tt,primaries:sa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ua]:{transfer:ra,primaries:aa,toReference:r=>r.applyMatrix3(oh),fromReference:r=>r.applyMatrix3(ah)},[ic]:{transfer:tt,primaries:aa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(oh),fromReference:r=>r.applyMatrix3(ah).convertLinearToSRGB()}},gd=new Set([Vn,Ua]),Je={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!gd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=bs[e].toReference;return(0,bs[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return bs[r].primaries},getTransfer:function(r){return r===Sn?ra:bs[r].transfer}};function gr(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function _o(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Zi,ca=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=ns("canvas")),Zi.width=e.width,Zi.height=e.height;let n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ns("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*gr(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*gr(t[n]/255)):t[n]=gr(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vd=0,ha=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=wn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(yo(i[a].image)):s.push(yo(i[a]))}else s=yo(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function yo(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?ca.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _d=0,Wt=class r extends Tn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=wn(),this.name="",this.source=new ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ni?Ke:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ke?Ni:gu}set encoding(e){Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ni?Ke:Sn}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=lu,Wt.DEFAULT_ANISOTROPY=1;var je=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],_=c[2],m=c[6],y=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,E=(p+1)/2,R=(y+1)/2,w=(h+d)/4,T=(u+_)/4,O=(f+m)/4;return v>E&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=T/n):E>R?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=w/i,s=O/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=O/s),this.set(n,i,s,t),this}let g=Math.sqrt((m-f)*(m-f)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-f)/g,this.y=(u-_)/g,this.z=(d-h)/g,this.w=Math.acos((l+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},il=class extends Tn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ni?Ke:Sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ha(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends il{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ua=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rl=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],_=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=_);if(u!==_||c!==d||l!==p||h!==f){let m=1-o,y=c*d+l*p+h*f+u*_,g=y>=0?1:-1,v=1-y*y;if(v>Number.EPSILON){let R=Math.sqrt(v),w=Math.atan2(R,y*g);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}let E=o*g;if(c=c*m+d*E,l=l*m+p*E,h=h*m+f*E,u=u*m+_*E,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),p=c(i/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xo=new b,lh=new Xt,An=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Es.subVectors(this.max,zr),Ji.subVectors(e.a,zr),Ki.subVectors(e.b,zr),$i.subVectors(e.c,zr),Qn.subVectors(Ki,Ji),ei.subVectors($i,Ki),Si.subVectors(Ji,$i);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-Si.z,Si.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,Si.z,0,-Si.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-Si.y,Si.x,0];return!!Mo(t,Ji,Ki,$i,Es)&&(t=[1,0,0,0,1,0,0,0,1],!!Mo(t,Ji,Ki,$i,Es)&&(ws.crossVectors(Qn,ei),t=[ws.x,ws.y,ws.z],Mo(t,Ji,Ki,$i,Es)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(hn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},On=[new b,new b,new b,new b,new b,new b,new b,new b],hn=new b,Ss=new An,Ji=new b,Ki=new b,$i=new b,Qn=new b,ei=new b,Si=new b,zr=new b,Es=new b,ws=new b,Ei=new b;function Mo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ei.fromArray(r,s);let o=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),c=e.dot(Ei),l=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var yd=new An,kr=new b,bo=new b,Rn=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(kr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(bo)),this.expandByPoint(kr.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bn=new b,So=new b,Ts=new b,ti=new b,Eo=new b,As=new b,wo=new b,Wn=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){So.copy(e).add(t).multiplyScalar(.5),Ts.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(So);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ts),o=ti.dot(this.direction),c=-ti.dot(Ts),l=ti.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*c-o,d=a*o-c,f=s*h,u>=0)if(d>=-f)if(d<=f){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(So).addScaledVector(Ts,d),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);let n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,s){Eo.subVectors(t,e),As.subVectors(n,e),wo.crossVectors(Eo,As);let a,o=this.direction.dot(wo);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ti.subVectors(this.origin,e);let c=a*this.direction.dot(As.crossVectors(ti,As));if(c<0)return null;let l=a*this.direction.dot(Eo.cross(ti));if(l<0||c+l>o)return null;let h=-a*ti.dot(wo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class r{constructor(e,t,n,i,s,a,o,c,l,h,u,d,p,f,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,p,f,_,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,p,f,_,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=o,y[13]=c,y[2]=l,y[6]=h,y[10]=u,y[14]=d,y[3]=p,y[7]=f,y[11]=_,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,_=l*u;t[0]=d+_*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,_=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,Md)}lookAt(e,t,n){let i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),ni.crossVectors(n,Gt),ni.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),ni.crossVectors(n,Gt)),ni.normalize(),Rs.crossVectors(Gt,ni),i[0]=ni.x,i[4]=Rs.x,i[8]=Gt.x,i[1]=ni.y,i[5]=Rs.y,i[9]=Gt.y,i[2]=ni.z,i[6]=Rs.z,i[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],_=n[6],m=n[10],y=n[14],g=n[3],v=n[7],E=n[11],R=n[15],w=i[0],T=i[4],O=i[8],B=i[12],z=i[1],Y=i[5],P=i[9],X=i[13],V=i[2],te=i[6],ce=i[10],ne=i[14],K=i[3],ie=i[7],q=i[11],ee=i[15];return s[0]=a*w+o*z+c*V+l*K,s[4]=a*T+o*Y+c*te+l*ie,s[8]=a*O+o*P+c*ce+l*q,s[12]=a*B+o*X+c*ne+l*ee,s[1]=h*w+u*z+d*V+p*K,s[5]=h*T+u*Y+d*te+p*ie,s[9]=h*O+u*P+d*ce+p*q,s[13]=h*B+u*X+d*ne+p*ee,s[2]=f*w+_*z+m*V+y*K,s[6]=f*T+_*Y+m*te+y*ie,s[10]=f*O+_*P+m*ce+y*q,s[14]=f*B+_*X+m*ne+y*ee,s[3]=g*w+v*z+E*V+R*K,s[7]=g*T+v*Y+E*te+R*ie,s[11]=g*O+v*P+E*ce+R*q,s[15]=g*B+v*X+E*ne+R*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-i*a*p+i*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+e[15]*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],_=e[13],m=e[14],y=e[15],g=u*m*l-_*d*l+_*c*p-o*m*p-u*c*y+o*d*y,v=f*d*l-h*m*l-f*c*p+a*m*p+h*c*y-a*d*y,E=h*_*l-f*u*l+f*o*p-a*_*p-h*o*y+a*u*y,R=f*u*c-h*_*c-f*o*d+a*_*d+h*o*m-a*u*m,w=t*g+n*v+i*E+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return e[0]=g*T,e[1]=(_*d*s-u*m*s-_*i*p+n*m*p+u*i*y-n*d*y)*T,e[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*y+n*c*y)*T,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*p-n*c*p)*T,e[4]=v*T,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*y+t*d*y)*T,e[6]=(f*c*s-a*m*s-f*i*l+t*m*l+a*i*y-t*c*y)*T,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*p+t*c*p)*T,e[8]=E*T,e[9]=(f*u*s-h*_*s-f*n*p+t*_*p+h*n*y-t*u*y)*T,e[10]=(a*_*s-f*o*s+f*n*l-t*_*l-a*n*y+t*o*y)*T,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*T,e[12]=R*T,e[13]=(h*_*i-f*u*i+f*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(f*o*i-a*_*i-f*n*c+t*_*c+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,f=s*u,_=a*h,m=a*u,y=o*u,g=c*l,v=c*h,E=c*u,R=n.x,w=n.y,T=n.z;return i[0]=(1-(_+y))*R,i[1]=(p+E)*R,i[2]=(f-v)*R,i[3]=0,i[4]=(p-E)*w,i[5]=(1-(d+y))*w,i[6]=(m+g)*w,i[7]=0,i[8]=(f+v)*T,i[9]=(m-g)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Qi.set(i[0],i[1],i[2]).length(),a=Qi.set(i[4],i[5],i[6]).length(),o=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);let c=1/s,l=1/a,h=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=l,un.elements[5]*=l,un.elements[6]*=l,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===Mr)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==oa)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*l,p=(n+i)*h,f,_;if(o===Mr)f=(a+s)*u,_=-2*u;else{if(o!==oa)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,_=-1*u}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qi=new b,un=new Ce,xd=new b(0,0,0),Md=new b(1,1,1),ni=new b,Rs=new b,Gt=new b,ch=new Ce,hh=new Xt,da=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};da.DEFAULT_ORDER="XYZ";var is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},bd=0,uh=new b,er=new Xt,Fn=new Ce,Cs=new b,Gr=new b,Sd=new b,Ed=new Xt,dh=new b(1,0,0),ph=new b(0,1,0),mh=new b(0,0,1),wd={type:"added"},Td={type:"removed"},mt=class r extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new b,t=new da,n=new Xt,i=new b(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Ne}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cs.copy(e):Cs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Gr,Cs,this.up):Fn.lookAt(Cs,Gr,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),er.setFromRotationMatrix(Fn),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mt.DEFAULT_UP=new b(0,1,0),mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new b,Hn=new b,To=new b,zn=new b,tr=new b,nr=new b,fh=new b,Ao=new b,Ro=new b,Co=new b,Ps=!1,ai=class r{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){dn.subVectors(i,t),Hn.subVectors(n,t),To.subVectors(e,t);let a=dn.dot(dn),o=dn.dot(Hn),c=dn.dot(To),l=Hn.dot(Hn),h=Hn.dot(To),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(a*h-o*c)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zn)!==null&&zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(e,t,n,i,s,a,o,c){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),Hn.subVectors(e,t),dn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),.5*dn.cross(Hn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;tr.subVectors(i,n),nr.subVectors(s,n),Ao.subVectors(e,n);let c=tr.dot(Ao),l=nr.dot(Ao);if(c<=0&&l<=0)return t.copy(n);Ro.subVectors(e,i);let h=tr.dot(Ro),u=nr.dot(Ro);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(tr,a);Co.subVectors(e,s);let p=tr.dot(Co),f=nr.dot(Co);if(f>=0&&p<=f)return t.copy(s);let _=p*l-c*f;if(_<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(nr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return fh.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(fh,o);let y=1/(m+_+d);return a=_*y,o=d*y,t.copy(n).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Po(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=tl(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Po(a,s,e+1/3),this.g=Po(a,s,e),this.b=Po(a,s,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=Ke){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ke){let n=_u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ke){return Je.fromWorkingColorSpace(At.copy(this),e),65536*Math.round(ut(255*At.r,0,255))+256*Math.round(ut(255*At.g,0,255))+Math.round(ut(255*At.b,0,255))}getHexString(e=Ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(At.copy(this),t);let n=At.r,i=At.g,s=At.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ke){Je.fromWorkingColorSpace(At.copy(this),e);let t=At.r,n=At.g,i=At.b;return e!==Ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Ls);let n=Zr(ii.h,Ls.h,t),i=Zr(ii.s,Ls.s,t),s=Zr(ii.l,Ls.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new be;be.NAMES=_u;var Ad=0,Xn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=1,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Zo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sf=Rd();function Rd(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(8388608&l)==0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var ht=new b,Is=new se,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}};var pa=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ma=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Se=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Cd=0,tn=new Ce,Lo=new mt,ir=new b,Vt=new An,Vr=new An,yt=new b,$e=class r extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vu(e)?ma:pa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Se(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new b,1/0);if(e){let n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Vt.min,Vr.min),Vt.expandByPoint(yt),yt.addVectors(Vt.max,Vr.max),Vt.expandByPoint(yt)):(Vt.expandByPoint(Vr.min),Vt.expandByPoint(Vr.max))}Vt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)yt.fromBufferAttribute(o,l),c&&(ir.fromBufferAttribute(e,l),yt.add(ir)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let z=0;z<o;z++)l[z]=new b,h[z]=new b;let u=new b,d=new b,p=new b,f=new se,_=new se,m=new se,y=new b,g=new b;function v(z,Y,P){u.fromArray(i,3*z),d.fromArray(i,3*Y),p.fromArray(i,3*P),f.fromArray(a,2*z),_.fromArray(a,2*Y),m.fromArray(a,2*P),d.sub(u),p.sub(u),_.sub(f),m.sub(f);let X=1/(_.x*m.y-m.x*_.y);isFinite(X)&&(y.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(X),g.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(X),l[z].add(y),l[Y].add(y),l[P].add(y),h[z].add(g),h[Y].add(g),h[P].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let z=0,Y=E.length;z<Y;++z){let P=E[z],X=P.start;for(let V=X,te=X+P.count;V<te;V+=3)v(n[V+0],n[V+1],n[V+2])}let R=new b,w=new b,T=new b,O=new b;function B(z){T.fromArray(s,3*z),O.copy(T);let Y=l[z];R.copy(Y),R.sub(T.multiplyScalar(T.dot(Y))).normalize(),w.crossVectors(O,Y);let P=w.dot(h[z])<0?-1:1;c[4*z]=R.x,c[4*z+1]=R.y,c[4*z+2]=R.z,c[4*z+3]=P}for(let z=0,Y=E.length;z<Y;++z){let P=E[z],X=P.start;for(let V=X,te=X+P.count;V<te;V+=3)B(n[V+0]),B(n[V+1]),B(n[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new b,s=new b,a=new b,o=new b,c=new b,l=new b,h=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let _=0,m=c.length;_<m;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let y=0;y<h;y++)d[f++]=l[p++]}return new Dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gh=new Ce,wi=new Wn,Ds=new Rn,vh=new b,rr=new b,sr=new b,ar=new b,Io=new b,Ns=new b,Us=new se,Os=new se,Bs=new se,_h=new b,yh=new b,xh=new b,Fs=new b,Hs=new b,Ae=class extends mt{constructor(e=new $e,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Ns.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Io.fromBufferAttribute(u,e),a?Ns.addScaledVector(Io,h):Ns.addScaledVector(Io.sub(t),h))}t.add(Ns)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),wi.copy(e.ray).recast(e.near),Ds.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Ds,vh)===null||wi.origin.distanceToSquared(vh)>(e.far-e.near)**2))return;gh.copy(s).invert(),wi.copy(e.ray).applyMatrix4(gh),n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,wi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],y=a[m.materialIndex];for(let g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));g<v;g+=3)i=zs(this,y,e,n,l,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);f<_;f+=3)i=zs(this,a,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(c!==void 0)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],y=a[m.materialIndex];for(let g=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));g<v;g+=3)i=zs(this,y,e,n,l,h,u,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);f<_;f+=3)i=zs(this,a,e,n,l,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function zs(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,rr),r.getVertexPosition(c,sr),r.getVertexPosition(l,ar);let h=(function(u,d,p,f,_,m,y,g){let v;if(v=d.side===Ft?f.intersectTriangle(y,m,_,!0,g):f.intersectTriangle(_,m,y,d.side===ci,g),v===null)return null;Hs.copy(g),Hs.applyMatrix4(u.matrixWorld);let E=p.ray.origin.distanceTo(Hs);return E<p.near||E>p.far?null:{distance:E,point:Hs.clone(),object:u}})(r,e,t,n,rr,sr,ar,Fs);if(h){i&&(Us.fromBufferAttribute(i,o),Os.fromBufferAttribute(i,c),Bs.fromBufferAttribute(i,l),h.uv=ai.getInterpolation(Fs,rr,sr,ar,Us,Os,Bs,new se)),s&&(Us.fromBufferAttribute(s,o),Os.fromBufferAttribute(s,c),Bs.fromBufferAttribute(s,l),h.uv1=ai.getInterpolation(Fs,rr,sr,ar,Us,Os,Bs,new se),h.uv2=h.uv1),a&&(_h.fromBufferAttribute(a,o),yh.fromBufferAttribute(a,c),xh.fromBufferAttribute(a,l),h.normal=ai.getInterpolation(Fs,rr,sr,ar,_h,yh,xh,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new b,materialIndex:0};ai.getNormal(rr,sr,ar,u.normal),h.face=u}return h}var Cn=class r extends $e{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function f(_,m,y,g,v,E,R,w,T,O,B){let z=E/T,Y=R/O,P=E/2,X=R/2,V=w/2,te=T+1,ce=O+1,ne=0,K=0,ie=new b;for(let q=0;q<ce;q++){let ee=q*Y-X;for(let Z=0;Z<te;Z++){let x=Z*z-P;ie[_]=x*g,ie[m]=ee*v,ie[y]=V,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[y]=w>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Z/T),u.push(1-q/O),ne+=1}}for(let q=0;q<O;q++)for(let ee=0;ee<T;ee++){let Z=d+ee+te*q,x=d+ee+te*(q+1),M=d+(ee+1)+te*(q+1),L=d+(ee+1)+te*q;c.push(Z,x,L),c.push(x,M,L),K+=6}o.addGroup(p,K,B),p+=K,d+=ne}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Sr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(r){let e={};for(let t=0;t<r.length;t++){let n=Sr(r[t]);for(let i in n)e[i]=n[i]}return e}function yu(r){return r.getRenderTarget()===null?r.outputColorSpace:Je.workingColorSpace}var rc={clone:Sr,merge:Pt},gn=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},rs=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Mr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ot=class extends rs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*br*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*fr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*br*Math.atan(Math.tan(.5*fr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*fr*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,sl=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ot(or,1,e,t);i.layers=this.layers,this.add(i);let s=new ot(or,1,e,t);s.layers=this.layers,this.add(s);let a=new ot(or,1,e,t);a.layers=this.layers,this.add(a);let o=new ot(or,1,e,t);o.layers=this.layers,this.add(o);let c=new ot(or,1,e,t);c.layers=this.layers,this.add(c);let l=new ot(or,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Mr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==oa)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},fa=class extends Wt{constructor(e,t,n,i,s,a,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:_r,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},al=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ni?Ke:Sn),this.texture=new fa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Cn(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:0});s.uniforms.tEquirect.value=t;let a=new Ae(i,s),o=t.minFilter;return t.minFilter===ta&&(t.minFilter=pn),new sl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Do=new b,Pd=new b,Ld=new Ne,It=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Do.subVectors(n,t).cross(Pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Do),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ld.getNormalMatrix(e),i=this.coplanarPoint(Do).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new Rn,ks=new b,Er=class{constructor(e=new It,t=new It,n=new It,i=new It,s=new It,a=new It){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],_=i[10],m=i[11],y=i[12],g=i[13],v=i[14],E=i[15];if(n[0].setComponents(c-s,d-l,m-p,E-y).normalize(),n[1].setComponents(c+s,d+l,m+p,E+y).normalize(),n[2].setComponents(c+a,d+h,m+f,E+g).normalize(),n[3].setComponents(c-a,d-h,m-f,E-g).normalize(),n[4].setComponents(c-o,d-u,m-_,E-v).normalize(),t===Mr)n[5].setComponents(c+o,d+u,m+_,E+v).normalize();else{if(t!==oa)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,_,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ks.x=i.normal.x>0?e.max.x:e.min.x,ks.y=i.normal.y>0?e.max.y:e.min.y,ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Id(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,(function(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer(),p;if(r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback(),l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);p=r.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}})(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,c,l){let h=c.array,u=c._updateRange,d=c.updateRanges;if(r.bindBuffer(l,o),u.count===-1&&d.length===0&&r.bufferSubData(l,0,h),d.length!==0){for(let p=0,f=d.length;p<f;p++){let _=d[p];t?r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count):r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h.subarray(_.start,_.start+_.count))}c.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),c.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var Nt=class r extends $e{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],_=[],m=[];for(let y=0;y<h;y++){let g=y*d-a;for(let v=0;v<l;v++){let E=v*u-s;f.push(E,-g,0),_.push(0,0,1),m.push(v/o),m.push(1-y/c)}}for(let y=0;y<c;y++)for(let g=0;g<o;g++){let v=g+l*y,E=g+l*(y+1),R=g+1+l*(y+1),w=g+1+l*y;p.push(v,E,w),p.push(E,R,w)}this.setIndex(p),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Le={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ue={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Mn={basic:{uniforms:Pt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Pt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new be(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Pt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Pt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Pt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new be(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Pt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Pt([ue.points,ue.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Pt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Pt([ue.common,ue.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Pt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Pt([ue.sprite,ue.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Pt([ue.common,ue.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Pt([ue.lights,ue.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Mn.physical={uniforms:Pt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var Gs={r:0,b:0,g:0};function Dd(r,e,t,n,i,s,a){let o=new be(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function f(_,m){_.getRGB(Gs,yu(r)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(_,m=1){o.set(_),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,f(o,h)},render:function(_,m){let y=!1,g=m.isScene===!0?m.background:null;g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g===null?f(o,h):g&&g.isColor&&(f(g,1),y=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Na)?(l===void 0&&(l=new Ae(new Cn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Sr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Je.getTransfer(g.colorSpace)!==tt,u===g&&d===g.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Ae(new Nt(2,2),new gn({name:"BackgroundMaterial",uniforms:Sr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Je.getTransfer(g.colorSpace)!==tt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}}}function Nd(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null),l=c,h=!1;function u(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function d(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R){let w=[],T=[],O=[];for(let B=0;B<i;B++)w[B]=0,T[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:T,attributeDivisors:O,object:R,attributes:{},index:null}}function f(){let R=l.newAttributes;for(let w=0,T=R.length;w<T;w++)R[w]=0}function _(R){m(R,0)}function m(R,w){let T=l.newAttributes,O=l.enabledAttributes,B=l.attributeDivisors;T[R]=1,O[R]===0&&(r.enableVertexAttribArray(R),O[R]=1),B[R]!==w&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,w),B[R]=w)}function y(){let R=l.newAttributes,w=l.enabledAttributes;for(let T=0,O=w.length;T<O;T++)w[T]!==R[T]&&(r.disableVertexAttribArray(T),w[T]=0)}function g(R,w,T,O,B,z,Y){Y===!0?r.vertexAttribIPointer(R,w,T,B,z):r.vertexAttribPointer(R,w,T,O,B,z)}function v(){E(),h=!0,l!==c&&(l=c,u(l.object))}function E(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(R,w,T,O,B){let z=!1;if(a){let Y=(function(P,X,V){let te=V.wireframe===!0,ce=o[P.id];ce===void 0&&(ce={},o[P.id]=ce);let ne=ce[X.id];ne===void 0&&(ne={},ce[X.id]=ne);let K=ne[te];return K===void 0&&(K=p(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),ne[te]=K),K})(O,T,w);l!==Y&&(l=Y,u(l.object)),z=(function(P,X,V,te){let ce=l.attributes,ne=X.attributes,K=0,ie=V.getAttributes();for(let q in ie)if(ie[q].location>=0){let ee=ce[q],Z=ne[q];if(Z===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),ee===void 0||ee.attribute!==Z||Z&&ee.data!==Z.data)return!0;K++}return l.attributesNum!==K||l.index!==te})(R,O,T,B),z&&(function(P,X,V,te){let ce={},ne=X.attributes,K=0,ie=V.getAttributes();for(let q in ie)if(ie[q].location>=0){let ee=ne[q];ee===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let Z={};Z.attribute=ee,ee&&ee.data&&(Z.data=ee.data),ce[q]=Z,K++}l.attributes=ce,l.attributesNum=K,l.index=te})(R,O,T,B)}else{let Y=w.wireframe===!0;l.geometry===O.id&&l.program===T.id&&l.wireframe===Y||(l.geometry=O.id,l.program=T.id,l.wireframe=Y,z=!0)}B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,(function(Y,P,X,V){if(n.isWebGL2===!1&&(Y.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let te=V.attributes,ce=X.getAttributes(),ne=P.defaultAttributeValues;for(let K in ce){let ie=ce[K];if(ie.location>=0){let q=te[K];if(q===void 0&&(K==="instanceMatrix"&&Y.instanceMatrix&&(q=Y.instanceMatrix),K==="instanceColor"&&Y.instanceColor&&(q=Y.instanceColor)),q!==void 0){let ee=q.normalized,Z=q.itemSize,x=t.get(q);if(x===void 0)continue;let M=x.buffer,L=x.type,U=x.bytesPerElement,A=n.isWebGL2===!0&&(L===r.INT||L===r.UNSIGNED_INT||q.gpuType===cu);if(q.isInterleavedBufferAttribute){let N=q.data,C=N.stride,I=q.offset;if(N.isInstancedInterleavedBuffer){for(let F=0;F<ie.locationSize;F++)m(ie.location+F,N.meshPerAttribute);Y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let F=0;F<ie.locationSize;F++)_(ie.location+F);r.bindBuffer(r.ARRAY_BUFFER,M);for(let F=0;F<ie.locationSize;F++)g(ie.location+F,Z/ie.locationSize,L,ee,C*U,(I+Z/ie.locationSize*F)*U,A)}else{if(q.isInstancedBufferAttribute){for(let N=0;N<ie.locationSize;N++)m(ie.location+N,q.meshPerAttribute);Y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let N=0;N<ie.locationSize;N++)_(ie.location+N);r.bindBuffer(r.ARRAY_BUFFER,M);for(let N=0;N<ie.locationSize;N++)g(ie.location+N,Z/ie.locationSize,L,ee,Z*U,Z/ie.locationSize*N*U,A)}}else if(ne!==void 0){let ee=ne[K];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(ie.location,ee);break;case 3:r.vertexAttrib3fv(ie.location,ee);break;case 4:r.vertexAttrib4fv(ie.location,ee);break;default:r.vertexAttrib1fv(ie.location,ee)}}}}y()})(R,w,T,O),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))},reset:v,resetDefaultState:E,dispose:function(){v();for(let R in o){let w=o[R];for(let T in w){let O=w[T];for(let B in O)d(O[B].object),delete O[B];delete w[T]}delete o[R]}},releaseStatesOfGeometry:function(R){if(o[R.id]===void 0)return;let w=o[R.id];for(let T in w){let O=w[T];for(let B in O)d(O[B].object),delete O[B];delete w[T]}delete o[R.id]},releaseStatesOfProgram:function(R){for(let w in o){let T=o[w];if(T[R.id]===void 0)continue;let O=T[R.id];for(let B in O)d(O[B].object),delete O[B];delete T[R.id]}},initAttributes:f,enableAttribute:_,disableUnusedAttributes:y}}function Ud(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,c){if(c===0)return;let l,h;if(i)l=r,h="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",l===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[h](s,a,o,c),t.update(o,s,c)},this.renderMultiDraw=function(a,o,c){if(c===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<c;h++)this.render(a[h],o[h]);else{l.multiDrawArraysWEBGL(s,a,0,o,0,c);let h=0;for(let u=0;u<c;u++)h+=o[u];t.update(h,s,1)}}}function Od(r,e,t){let n;function i(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:_,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:g&&v,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function Bd(r){let e=this,t=null,n=0,i=!1,s=!1,a=new It,o=new Ne,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,_=null;if(f!==0){if(_=c.value,p!==!0||_===null){let m=d+4*f,y=u.matrixWorldInverse;o.getNormalMatrix(y),(_===null||_.length<m)&&(_=new Float32Array(m));for(let g=0,v=d;g!==f;++g,v+=4)a.copy(h[g]).applyMatrix4(y,o),a.normal.toArray(_,v),_[v+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,_=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!_)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let y=s?0:n,g=4*y,v=m.clippingState||null;c.value=v,v=l(p,u,g,d);for(let E=0;E!==g;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function Fd(r){let e=new WeakMap;function t(i,s){return s===Jo?i.mapping=_r:s===Ko&&(i.mapping=yr),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Jo||s===Ko){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new al(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var ga=class extends rs{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mh=[.125,.215,.35,.446,.526,.582],Wr=20,No=new ga,bh=new be,Uo=null,Oo=0,Bo=0,Ai=(1+Math.sqrt(5))/2,lr=1/Ai,Sh=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Ai,lr),new b(0,Ai,-lr),new b(lr,0,Ai),new b(-lr,0,Ai),new b(Ai,lr,0),new b(-Ai,lr,0)],va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Uo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,Oo,Bo),e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ui,format:bn,colorSpace:Vn,depthBuffer:!1},i=Eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+Mh.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let f=1/p;d>a-4?f=Mh[d-a+4-1]:d===0&&(f=0),l.push(f);let _=1/(p-2),m=-_,y=1+_,g=[m,m,y,m,y,y,m,m,y,y,m,y],v=6,E=6,R=3,w=2,T=1,O=new Float32Array(R*E*v),B=new Float32Array(w*E*v),z=new Float32Array(T*E*v);for(let P=0;P<v;P++){let X=P%3*2/3-1,V=P>2?0:-1,te=[X,V,0,X+2/3,V,0,X+2/3,V+1,0,X,V,0,X+2/3,V+1,0,X,V+1,0];O.set(te,R*E*P),B.set(g,w*E*P);let ce=[P,P,P,P,P,P];z.set(ce,T*E*P)}let Y=new $e;Y.setAttribute("position",new Dt(O,R)),Y.setAttribute("uv",new Dt(B,w)),Y.setAttribute("faceIndex",new Dt(z,T)),o.push(Y),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Wr),h=new b(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:sc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,i){let s=new ot(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(bh),c.toneMapping=oi,c.autoClear=!1;let u=new nn({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),d=new Ae(new Cn,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(bh),p=!0);for(let _=0;_<6;_++){let m=_%3;m===0?(s.up.set(0,a[_],0),s.lookAt(o[_],0,0)):m===1?(s.up.set(0,0,a[_]),s.lookAt(0,o[_],0)):(s.up.set(0,a[_],0),s.lookAt(0,0,o[_]));let y=this._cubeSize;Vs(i,m*y,_>2?y:0,y,y),c.setRenderTarget(i),p&&c.render(d,s),c.render(e,s)}d.geometry.dispose(),d.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===_r||e.mapping===yr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Vs(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,No)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Sh[(i-1)%Sh.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ae(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,_=isFinite(s)?1+Math.floor(3*f):Wr;_>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],y=0;for(let E=0;E<Wr;++E){let R=E/f,w=Math.exp(-R*R/2);m.push(w),E===0?y+=w:E<_&&(y+=2*w)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let v=this._sizeLods[i];Vs(t,3*v*(i>g-4?i-g+4:0),4*(this._cubeSize-v),3*v,2*v),c.setRenderTarget(t),c.render(h,No)}};function Eh(r,e,t){let n=new fn(r,e,t);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function wh(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Th(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}function Hd(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Jo||s===Ko,o=s===_r||s===yr;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let c=e.get(i);return t===null&&(t=new va(r)),c=a?t.fromEquirectangular(i,c):t.fromCubemap(i,c),e.set(i,c),c.texture}if(e.has(i))return e.get(i).texture;{let c=i.image;if(a&&c&&c.height>0||o&&c&&(function(l){let h=0,u=6;for(let d=0;d<u;d++)l[d]!==void 0&&h++;return h===u})(c)){t===null&&(t=new va(r));let l=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,l),i.addEventListener("dispose",n),l.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function zd(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kd(r,e,t,n){let i={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);for(let u in l.morphAttributes){let d=l.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}l.removeEventListener("dispose",a),delete i[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let m=0,y=_.length;m<y;m+=3){let g=_[m+0],v=_[m+1],E=_[m+2];l.push(g,v,v,E,E,g)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let m=0,y=_.length/3-1;m<y;m+=3){let g=m+0,v=m+1,E=m+2;l.push(g,v,v,E,E,g)}}}let p=new(vu(l)?ma:pa)(l,1);p.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let u in l)e.update(l[u],r.ARRAY_BUFFER);let h=c.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Gd(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(c){s=c},this.setIndex=function(c){a=c.type,o=c.bytesPerElement},this.render=function(c,l){r.drawElements(s,l,a,c*o),t.update(l,s,1)},this.renderInstances=function(c,l,h){if(h===0)return;let u,d;if(i)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,l,a,c*o,h),t.update(l,s,h)},this.renderMultiDraw=function(c,l,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(c[d]/o,l[d]);else{u.multiDrawElementsWEBGL(s,l,0,a,c,0,h);let d=0;for(let p=0;p<h;p++)d+=l[p];t.update(d,s,1)}}}function Vd(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Wd(r,e){return r[0]-e[0]}function Xd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function jd(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new je,o=[];for(let c=0;c<8;c++)o[c]=[c,0];return{update:function(c,l,h){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=d!==void 0?d.length:0,f=s.get(l);if(f===void 0||f.count!==p){let X=function(){Y.dispose(),s.delete(l),l.removeEventListener("dispose",X)};f!==void 0&&f.texture.dispose();let y=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,E=l.morphAttributes.position||[],R=l.morphAttributes.normal||[],w=l.morphAttributes.color||[],T=0;y===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let O=l.attributes.position.count*T,B=1;O>e.maxTextureSize&&(B=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);let z=new Float32Array(O*B*4*p),Y=new ua(z,O,B,p);Y.type=si,Y.needsUpdate=!0;let P=4*T;for(let V=0;V<p;V++){let te=E[V],ce=R[V],ne=w[V],K=O*B*4*V;for(let ie=0;ie<te.count;ie++){let q=ie*P;y===!0&&(a.fromBufferAttribute(te,ie),z[K+q+0]=a.x,z[K+q+1]=a.y,z[K+q+2]=a.z,z[K+q+3]=0),g===!0&&(a.fromBufferAttribute(ce,ie),z[K+q+4]=a.x,z[K+q+5]=a.y,z[K+q+6]=a.z,z[K+q+7]=0),v===!0&&(a.fromBufferAttribute(ne,ie),z[K+q+8]=a.x,z[K+q+9]=a.y,z[K+q+10]=a.z,z[K+q+11]=ne.itemSize===4?a.w:1)}}f={count:p,texture:Y,size:new se(O,B)},s.set(l,f),l.addEventListener("dispose",X)}let _=0;for(let y=0;y<u.length;y++)_+=u[y];let m=l.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let d=u===void 0?0:u.length,p=n[l.id];if(p===void 0||p.length!==d){p=[];for(let g=0;g<d;g++)p[g]=[g,0];n[l.id]=p}for(let g=0;g<d;g++){let v=p[g];v[0]=g,v[1]=u[g]}p.sort(Xd);for(let g=0;g<8;g++)g<d&&p[g][1]?(o[g][0]=p[g][0],o[g][1]=p[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(Wd);let f=l.morphAttributes.position,_=l.morphAttributes.normal,m=0;for(let g=0;g<8;g++){let v=o[g],E=v[0],R=v[1];E!==Number.MAX_SAFE_INTEGER&&R?(f&&l.getAttribute("morphTarget"+g)!==f[E]&&l.setAttribute("morphTarget"+g,f[E]),_&&l.getAttribute("morphNormal"+g)!==_[E]&&l.setAttribute("morphNormal"+g,_[E]),i[g]=R,m+=R):(f&&l.hasAttribute("morphTarget"+g)===!0&&l.deleteAttribute("morphTarget"+g),_&&l.hasAttribute("morphNormal"+g)===!0&&l.deleteAttribute("morphNormal"+g),i[g]=0)}let y=l.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function Yd(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}var _a=class extends Wt{constructor(e,t,n,i,s,a,o,c,l,h){if((h=h!==void 0?h:Di)!==Di&&h!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Di&&(n=ri),n===void 0&&h===xr&&(n=Ii),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mu=new Wt,bu=new _a(1,1);bu.compareFunction=515;var Su=new ua,Eu=new rl,wu=new fa,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function Cr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Ah[i];if(s===void 0&&(s=new Float32Array(i),Ah[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ft(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Oa(r,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Zd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2fv(this.addr,e),gt(t,e)}}function Jd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;r.uniform3fv(this.addr,e),gt(t,e)}}function Kd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4fv(this.addr,e),gt(t,e)}}function $d(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,n))return;Lh.set(n),r.uniformMatrix2fv(this.addr,!1,Lh),gt(t,n)}}function Qd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,n))return;Ph.set(n),r.uniformMatrix3fv(this.addr,!1,Ph),gt(t,n)}}function ep(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,n))return;Ch.set(n),r.uniformMatrix4fv(this.addr,!1,Ch),gt(t,n)}}function tp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function np(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2iv(this.addr,e),gt(t,e)}}function ip(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;r.uniform3iv(this.addr,e),gt(t,e)}}function rp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4iv(this.addr,e),gt(t,e)}}function sp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ap(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2uiv(this.addr,e),gt(t,e)}}function op(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;r.uniform3uiv(this.addr,e),gt(t,e)}}function lp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4uiv(this.addr,e),gt(t,e)}}function cp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?bu:Mu;t.setTexture2D(e||s,i)}function hp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eu,i)}function up(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wu,i)}function dp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Su,i)}function pp(r,e){r.uniform1fv(this.addr,e)}function mp(r,e){let t=Cr(e,this.size,2);r.uniform2fv(this.addr,t)}function fp(r,e){let t=Cr(e,this.size,3);r.uniform3fv(this.addr,t)}function gp(r,e){let t=Cr(e,this.size,4);r.uniform4fv(this.addr,t)}function vp(r,e){let t=Cr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _p(r,e){let t=Cr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yp(r,e){let t=Cr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xp(r,e){r.uniform1iv(this.addr,e)}function Mp(r,e){r.uniform2iv(this.addr,e)}function bp(r,e){r.uniform3iv(this.addr,e)}function Sp(r,e){r.uniform4iv(this.addr,e)}function Ep(r,e){r.uniform1uiv(this.addr,e)}function wp(r,e){r.uniform2uiv(this.addr,e)}function Tp(r,e){r.uniform3uiv(this.addr,e)}function Ap(r,e){r.uniform4uiv(this.addr,e)}function Rp(r,e,t){let n=this.cache,i=e.length,s=Oa(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mu,s[a])}function Cp(r,e,t){let n=this.cache,i=e.length,s=Oa(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Eu,s[a])}function Pp(r,e,t){let n=this.cache,i=e.length,s=Oa(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wu,s[a])}function Lp(r,e,t){let n=this.cache,i=e.length,s=Oa(t,i);ft(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Su,s[a])}var ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return qd;case 35664:return Zd;case 35665:return Jd;case 35666:return Kd;case 35674:return $d;case 35675:return Qd;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return dp}})(t.type)}},ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return fp;case 35666:return gp;case 35674:return vp;case 35675:return _p;case 35676:return yp;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return bp;case 35669:case 35673:return Sp;case 5125:return Ep;case 36294:return wp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}})(t.type)}},cl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Fo=/(\w+)(\])?(\[|\.)?/g;function Ih(r,e){r.seq.push(e),r.map[e.id]=e}function Ip(r,e,t){let n=r.name,i=n.length;for(Fo.lastIndex=0;;){let s=Fo.exec(n),a=Fo.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===i){Ih(t,l===void 0?new ol(o,r,e):new ll(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new cl(o),Ih(t,h)),t=h}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Ip(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Dh(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Dp=37297,Np=0;function Nh(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Up(r,e){let t=(function(n){let i=Je.getPrimaries(Je.workingColorSpace),s=Je.getPrimaries(n),a;switch(i===s?a="":i===aa&&s===sa?a="LinearDisplayP3ToLinearSRGB":i===sa&&s===aa&&(a="LinearSRGBToLinearDisplayP3"),n){case Vn:case Ua:return[a,"LinearTransferOETF"];case Ke:case ic:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Op(r,e){let t;switch(e){case cd:t="Linear";break;case hd:t="Reinhard";break;case ud:t="OptimizedCineon";break;case tc:t="ACESFilmic";break;case pd:t="AgX";break;case dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cr(r){return r!==""}function Uh(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(r){return r.replace(Bp,Hp)}var Fp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hp(r,e){let t=Le[e];if(t===void 0){let n=Fp.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return hl(t)}var zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(r){return r.replace(zp,kp)}function kp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Fh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gp(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(P){let X="SHADOWMAP_TYPE_BASIC";return P.shadowMapType===au?X="SHADOWMAP_TYPE_PCF":P.shadowMapType===ec?X="SHADOWMAP_TYPE_PCF_SOFT":P.shadowMapType===kn&&(X="SHADOWMAP_TYPE_VSM"),X})(t),l=(function(P){let X="ENVMAP_TYPE_CUBE";if(P.envMap)switch(P.envMapMode){case _r:case yr:X="ENVMAP_TYPE_CUBE";break;case Na:X="ENVMAP_TYPE_CUBE_UV"}return X})(t),h=(function(P){let X="ENVMAP_MODE_REFLECTION";return P.envMap&&P.envMapMode===yr&&(X="ENVMAP_MODE_REFRACTION"),X})(t),u=(function(P){let X="ENVMAP_BLENDING_NONE";if(P.envMap)switch(P.combine){case ou:X="ENVMAP_BLENDING_MULTIPLY";break;case od:X="ENVMAP_BLENDING_MIX";break;case ld:X="ENVMAP_BLENDING_ADD"}return X})(t),d=(function(P){let X=P.envMapCubeUVHeight;if(X===null)return null;let V=Math.log2(X)-2,te=1/X;return{texelWidth:1/(3*Math.max(Math.pow(2,V),112)),texelHeight:te,maxMip:V}})(t),p=t.isWebGL2?"":(function(P){return[P.extensionDerivatives||P.envMapCubeUVHeight||P.bumpMap||P.normalMapTangentSpace||P.clearcoatNormalMap||P.flatShading||P.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(P.extensionFragDepth||P.logarithmicDepthBuffer)&&P.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",P.extensionDrawBuffers&&P.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(P.extensionShaderTextureLOD||P.envMap||P.transmission)&&P.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)})(t),f=(function(P){return[P.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(cr).join(`
`)})(t),_=(function(P){let X=[];for(let V in P){let te=P[V];te!==!1&&X.push("#define "+V+" "+te)}return X.join(`
`)})(s),m=i.createProgram(),y,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(cr).join(`
`),y.length>0&&(y+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(cr).join(`
`),g.length>0&&(g+=`
`)):(y=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),g=[p,Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Le.tonemapping_pars_fragment:"",t.toneMapping!==oi?Op("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Up("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=hl(a),a=Uh(a,t),a=Oh(a,t),o=hl(o),o=Uh(o,t),o=Oh(o,t),a=Bh(a),o=Bh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,y=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=v+y+a,R=v+g+o,w=Dh(i,i.VERTEX_SHADER,E),T=Dh(i,i.FRAGMENT_SHADER,R);function O(P){if(r.debug.checkShaderErrors){let X=i.getProgramInfoLog(m).trim(),V=i.getShaderInfoLog(w).trim(),te=i.getShaderInfoLog(T).trim(),ce=!0,ne=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,w,T);else{let K=Nh(i,w,"vertex"),ie=Nh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+K+`
`+ie)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):V!==""&&te!==""||(ne=!1);ne&&(P.diagnostics={runnable:ce,programLog:X,vertexShader:{log:V,prefix:y},fragmentShader:{log:te,prefix:g}})}i.deleteShader(w),i.deleteShader(T),B=new vr(i,m),z=(function(X,V){let te={},ce=X.getProgramParameter(V,X.ACTIVE_ATTRIBUTES);for(let ne=0;ne<ce;ne++){let K=X.getActiveAttrib(V,ne),ie=K.name,q=1;K.type===X.FLOAT_MAT2&&(q=2),K.type===X.FLOAT_MAT3&&(q=3),K.type===X.FLOAT_MAT4&&(q=4),te[ie]={type:K.type,location:X.getAttribLocation(V,ie),locationSize:q}}return te})(i,m)}let B,z;i.attachShader(m,w),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),this.getUniforms=function(){return B===void 0&&O(this),B},this.getAttributes=function(){return z===void 0&&O(this),z};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=i.getProgramParameter(m,Dp)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Np++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}var Vp=0,ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dl(e),t.set(e,n)),n}},dl=class{constructor(e){this.id=Vp++,this.code=e,this.usedTimes=0}};function Wp(r,e,t,n,i,s,a){let o=new is,c=new ul,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,y,g,v,E){let R=v.fog,w=E.geometry,T=m.isMeshStandardMaterial?v.environment:null,O=(m.isMeshStandardMaterial?t:e).get(m.envMap||T),B=O&&O.mapping===Na?O.image.height:null,z=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let Y=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,P=Y!==void 0?Y.length:0,X,V,te,ce,ne=0;if(w.morphAttributes.position!==void 0&&(ne=1),w.morphAttributes.normal!==void 0&&(ne=2),w.morphAttributes.color!==void 0&&(ne=3),z){let bt=Mn[z];X=bt.vertexShader,V=bt.fragmentShader}else X=m.vertexShader,V=m.fragmentShader,c.update(m),te=c.getVertexShaderID(m),ce=c.getFragmentShaderID(m);let K=r.getRenderTarget(),ie=E.isInstancedMesh===!0,q=E.isBatchedMesh===!0,ee=!!m.map,Z=!!m.matcap,x=!!O,M=!!m.aoMap,L=!!m.lightMap,U=!!m.bumpMap,A=!!m.normalMap,N=!!m.displacementMap,C=!!m.emissiveMap,I=!!m.metalnessMap,F=!!m.roughnessMap,k=m.anisotropy>0,G=m.clearcoat>0,S=m.iridescence>0,Q=m.sheen>0,j=m.transmission>0,W=k&&!!m.anisotropyMap,oe=G&&!!m.clearcoatMap,he=G&&!!m.clearcoatNormalMap,de=G&&!!m.clearcoatRoughnessMap,fe=S&&!!m.iridescenceMap,Ee=S&&!!m.iridescenceThicknessMap,ge=Q&&!!m.sheenColorMap,ve=Q&&!!m.sheenRoughnessMap,Pe=!!m.specularMap,ct=!!m.specularColorMap,ye=!!m.specularIntensityMap,Be=j&&!!m.transmissionMap,Ie=j&&!!m.thicknessMap,vi=!!m.gradientMap,zt=!!m.alphaMap,H=m.alphaTest>0,me=!!m.alphaHash,Re=!!m.extensions,Ve=!!w.attributes.uv1,J=!!w.attributes.uv2,kt=!!w.attributes.uv3,_t=oi;return m.toneMapped&&(K!==null&&K.isXRRenderTarget!==!0||(_t=r.toneMapping)),{isWebGL2:h,shaderID:z,shaderType:m.type,shaderName:m.name,vertexShader:X,fragmentShader:V,defines:m.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:q,instancing:ie,instancingColor:ie&&E.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Vn,map:ee,matcap:Z,envMap:x,envMapMode:x&&O.mapping,envMapCubeUVHeight:B,aoMap:M,lightMap:L,bumpMap:U,normalMap:A,displacementMap:d&&N,emissiveMap:C,normalMapObjectSpace:A&&m.normalMapType===1,normalMapTangentSpace:A&&m.normalMapType===0,metalnessMap:I,roughnessMap:F,anisotropy:k,anisotropyMap:W,clearcoat:G,clearcoatMap:oe,clearcoatNormalMap:he,clearcoatRoughnessMap:de,iridescence:S,iridescenceMap:fe,iridescenceThicknessMap:Ee,sheen:Q,sheenColorMap:ge,sheenRoughnessMap:ve,specularMap:Pe,specularColorMap:ct,specularIntensityMap:ye,transmission:j,transmissionMap:Be,thicknessMap:Ie,gradientMap:vi,opaque:m.transparent===!1&&m.blending===1,alphaMap:zt,alphaTest:H,alphaHash:me,combine:m.combine,mapUv:ee&&_(m.map.channel),aoMapUv:M&&_(m.aoMap.channel),lightMapUv:L&&_(m.lightMap.channel),bumpMapUv:U&&_(m.bumpMap.channel),normalMapUv:A&&_(m.normalMap.channel),displacementMapUv:N&&_(m.displacementMap.channel),emissiveMapUv:C&&_(m.emissiveMap.channel),metalnessMapUv:I&&_(m.metalnessMap.channel),roughnessMapUv:F&&_(m.roughnessMap.channel),anisotropyMapUv:W&&_(m.anisotropyMap.channel),clearcoatMapUv:oe&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(m.sheenRoughnessMap.channel),specularMapUv:Pe&&_(m.specularMap.channel),specularColorMapUv:ct&&_(m.specularColorMap.channel),specularIntensityMapUv:ye&&_(m.specularIntensityMap.channel),transmissionMapUv:Be&&_(m.transmissionMap.channel),thicknessMapUv:Ie&&_(m.thicknessMap.channel),alphaMapUv:zt&&_(m.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(A||k),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:Ve,vertexUv2s:J,vertexUv3s:kt,pointsUvs:E.isPoints===!0&&!!w.attributes.uv&&(ee||zt),fog:!!R,useFog:m.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:E.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ne,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ee&&m.map.isVideoTexture===!0&&Je.getTransfer(m.map.colorSpace)===tt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===Ft,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:Re&&m.extensions.derivatives===!0,extensionFragDepth:Re&&m.extensions.fragDepth===!0,extensionDrawBuffers:Re&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&m.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)y.push(g),y.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)})(y,m),(function(g,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),g.push(o.mask)})(y,m),y.push(r.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],g;if(y){let v=Mn[y];g=rc.clone(v.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,y){let g;for(let v=0,E=l.length;v<E;v++){let R=l[v];if(R.cacheKey===y){g=R,++g.usedTimes;break}}return g===void 0&&(g=new Gp(r,y,m,s),l.push(g)),g},releaseProgram:function(m){if(--m.usedTimes==0){let y=l.indexOf(m);l[y]=l[l.length-1],l.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:l,dispose:function(){c.dispose()}}}function Xp(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function jp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zh(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,c,l,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||jp),n.length>1&&n.sort(o||Hh),i.length>1&&i.sort(o||Hh)}}}function Yp(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new zh,r.set(e,[i])):t>=n.length?(i=new zh,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function qp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new be};break;case"SpotLight":t={position:new b,direction:new b,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new b,halfWidth:new b,halfHeight:new b}}return r[e.id]=t,t}}}var Zp=0;function Jp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Kp(r,e){let t=new qp,n=(function(){let c={};return{get:function(l){if(c[l.id]!==void 0)return c[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3}}return c[l.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);let s=new b,a=new Ce,o=new Ce;return{setup:function(c,l){let h=0,u=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,f=0,_=0,m=0,y=0,g=0,v=0,E=0,R=0,w=0,T=0;c.sort(Jp);let O=l===!0?Math.PI:1;for(let z=0,Y=c.length;z<Y;z++){let P=c[z],X=P.color,V=P.intensity,te=P.distance,ce=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=X.r*V*O,u+=X.g*V*O,d+=X.b*V*O;else if(P.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(P.sh.coefficients[ne],V);T++}else if(P.isDirectionalLight){let ne=t.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity*O),P.castShadow){let K=P.shadow,ie=n.get(P);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=ce,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=ne,p++}else if(P.isSpotLight){let ne=t.get(P);ne.position.setFromMatrixPosition(P.matrixWorld),ne.color.copy(X).multiplyScalar(V*O),ne.distance=te,ne.coneCos=Math.cos(P.angle),ne.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ne.decay=P.decay,i.spot[_]=ne;let K=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,K.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=K.matrix,P.castShadow){let ie=n.get(P);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.spotShadow[_]=ie,i.spotShadowMap[_]=ce,E++}_++}else if(P.isRectAreaLight){let ne=t.get(P);ne.color.copy(X).multiplyScalar(V),ne.halfWidth.set(.5*P.width,0,0),ne.halfHeight.set(0,.5*P.height,0),i.rectArea[m]=ne,m++}else if(P.isPointLight){let ne=t.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity*O),ne.distance=P.distance,ne.decay=P.decay,P.castShadow){let K=P.shadow,ie=n.get(P);ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,ie.shadowCameraNear=K.camera.near,ie.shadowCameraFar=K.camera.far,i.pointShadow[f]=ie,i.pointShadowMap[f]=ce,i.pointShadowMatrix[f]=P.shadow.matrix,v++}i.point[f]=ne,f++}else if(P.isHemisphereLight){let ne=t.get(P);ne.skyColor.copy(P.color).multiplyScalar(V*O),ne.groundColor.copy(P.groundColor).multiplyScalar(V*O),i.hemi[y]=ne,y++}}m>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let B=i.hash;B.directionalLength===p&&B.pointLength===f&&B.spotLength===_&&B.rectAreaLength===m&&B.hemiLength===y&&B.numDirectionalShadows===g&&B.numPointShadows===v&&B.numSpotShadows===E&&B.numSpotMaps===R&&B.numLightProbes===T||(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,B.directionalLength=p,B.pointLength=f,B.spotLength=_,B.rectAreaLength=m,B.hemiLength=y,B.numDirectionalShadows=g,B.numPointShadows=v,B.numSpotShadows=E,B.numSpotMaps=R,B.numLightProbes=T,i.version=Zp++)},setupView:function(c,l){let h=0,u=0,d=0,p=0,f=0,_=l.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let g=c[m];if(g.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),h++}else if(g.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),d++}else if(g.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(_),o.identity(),a.copy(g.matrixWorld),a.premultiply(_),o.extractRotation(a),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let v=i.point[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(_),u++}else if(g.isHemisphereLight){let v=i.hemi[f];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(_),f++}}},state:i}}function kh(r,e){let t=new Kp(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function $p(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new kh(r,e),t.set(n,[a])):i>=s.length?(a=new kh(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var pl=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ml=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qp(r,e,t){let n=new Er,i=new se,s=new se,a=new je,o=new pl({depthPacking:3201}),c=new ml,l={},h=t.maxTextureSize,u={[ci]:Ft,[Ft]:ci,2:2},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new $e;f.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ae(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let y=this.type;function g(w,T){let O=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new fn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,O,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,O,p,_,null)}function v(w,T,O,B){let z=null,Y=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(Y!==void 0)z=Y;else if(z=O.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let P=z.uuid,X=T.uuid,V=l[P];V===void 0&&(V={},l[P]=V);let te=V[X];te===void 0&&(te=z.clone(),V[X]=te,T.addEventListener("dispose",R)),z=te}return z.visible=T.visible,z.wireframe=T.wireframe,z.side=B===kn?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],z.alphaMap=T.alphaMap,z.alphaTest=T.alphaTest,z.map=T.map,z.clipShadows=T.clipShadows,z.clippingPlanes=T.clippingPlanes,z.clipIntersection=T.clipIntersection,z.displacementMap=T.displacementMap,z.displacementScale=T.displacementScale,z.displacementBias=T.displacementBias,z.wireframeLinewidth=T.wireframeLinewidth,z.linewidth=T.linewidth,O.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(r.properties.get(z).light=O),z}function E(w,T,O,B,z){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&z===kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);let P=e.update(w),X=w.material;if(Array.isArray(X)){let V=P.groups;for(let te=0,ce=V.length;te<ce;te++){let ne=V[te],K=X[ne.materialIndex];if(K&&K.visible){let ie=v(w,K,B,z);w.onBeforeShadow(r,w,T,O,P,ie,ne),r.renderBufferDirect(O,null,P,ie,w,ne),w.onAfterShadow(r,w,T,O,P,ie,ne)}}}else if(X.visible){let V=v(w,X,B,z);w.onBeforeShadow(r,w,T,O,P,V,null),r.renderBufferDirect(O,null,P,V,w,null),w.onAfterShadow(r,w,T,O,P,V,null)}}let Y=w.children;for(let P=0,X=Y.length;P<X;P++)E(Y[P],T,O,B,z)}function R(w){w.target.removeEventListener("dispose",R);for(let T in l){let O=l[T],B=w.target.uuid;B in O&&(O[B].dispose(),delete O[B])}}this.render=function(w,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let B=r.getRenderTarget(),z=r.getActiveCubeFace(),Y=r.getActiveMipmapLevel(),P=r.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let X=y!==kn&&this.type===kn,V=y===kn&&this.type!==kn;for(let te=0,ce=w.length;te<ce;te++){let ne=w[te],K=ne.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let ie=K.getFrameExtents();if(i.multiply(ie),s.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ie.x),i.x=s.x*ie.x,K.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ie.y),i.y=s.y*ie.y,K.mapSize.y=s.y)),K.map===null||X===!0||V===!0){let ee=this.type!==kn?{minFilter:Lt,magFilter:Lt}:{};K.map!==null&&K.map.dispose(),K.map=new fn(i.x,i.y,ee),K.map.texture.name=ne.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();let q=K.getViewportCount();for(let ee=0;ee<q;ee++){let Z=K.getViewport(ee);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),P.viewport(a),K.updateMatrices(ne,ee),n=K.getFrustum(),E(T,O,K.camera,ne,this.type)}K.isPointLightShadow!==!0&&this.type===kn&&g(K,O),K.needsUpdate=!1}y=this.type,m.needsUpdate=!1,r.setRenderTarget(B,z,Y)}}function em(r,e,t){let n=t.isWebGL2,i=new function(){let S=!1,Q=new je,j=null,W=new je(0,0,0,0);return{setMask:function(oe){j===oe||S||(r.colorMask(oe,oe,oe,oe),j=oe)},setLocked:function(oe){S=oe},setClear:function(oe,he,de,fe,Ee){Ee===!0&&(oe*=fe,he*=fe,de*=fe),Q.set(oe,he,de,fe),W.equals(Q)===!1&&(r.clearColor(oe,he,de,fe),W.copy(Q))},reset:function(){S=!1,j=null,W.set(-1,0,0,0)}}},s=new function(){let S=!1,Q=null,j=null,W=null;return{setTest:function(oe){oe?U(r.DEPTH_TEST):A(r.DEPTH_TEST)},setMask:function(oe){Q===oe||S||(r.depthMask(oe),Q=oe)},setFunc:function(oe){if(j!==oe){switch(oe){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}j=oe}},setLocked:function(oe){S=oe},setClear:function(oe){W!==oe&&(r.clearDepth(oe),W=oe)},reset:function(){S=!1,Q=null,j=null,W=null}}},a=new function(){let S=!1,Q=null,j=null,W=null,oe=null,he=null,de=null,fe=null,Ee=null;return{setTest:function(ge){S||(ge?U(r.STENCIL_TEST):A(r.STENCIL_TEST))},setMask:function(ge){Q===ge||S||(r.stencilMask(ge),Q=ge)},setFunc:function(ge,ve,Pe){j===ge&&W===ve&&oe===Pe||(r.stencilFunc(ge,ve,Pe),j=ge,W=ve,oe=Pe)},setOp:function(ge,ve,Pe){he===ge&&de===ve&&fe===Pe||(r.stencilOp(ge,ve,Pe),he=ge,de=ve,fe=Pe)},setLocked:function(ge){S=ge},setClear:function(ge){Ee!==ge&&(r.clearStencil(ge),Ee=ge)},reset:function(){S=!1,Q=null,j=null,W=null,oe=null,he=null,de=null,fe=null,Ee=null}}},o=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],p=null,f=!1,_=null,m=null,y=null,g=null,v=null,E=null,R=null,w=new be(0,0,0),T=0,O=!1,B=null,z=null,Y=null,P=null,X=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ce=0,ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=ce>=1):ne.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=ce>=2);let K=null,ie={},q=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),Z=new je().fromArray(q),x=new je().fromArray(ee);function M(S,Q,j,W){let oe=new Uint8Array(4),he=r.createTexture();r.bindTexture(S,he),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<j;de++)!n||S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY?r.texImage2D(Q+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage3D(Q,0,r.RGBA,1,1,W,0,r.RGBA,r.UNSIGNED_BYTE,oe);return he}let L={};function U(S){l[S]!==!0&&(r.enable(S),l[S]=!0)}function A(S){l[S]!==!1&&(r.disable(S),l[S]=!1)}L[r.TEXTURE_2D]=M(r.TEXTURE_2D,r.TEXTURE_2D,1),L[r.TEXTURE_CUBE_MAP]=M(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(L[r.TEXTURE_2D_ARRAY]=M(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),L[r.TEXTURE_3D]=M(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),U(r.DEPTH_TEST),s.setFunc(3),F(!1),k(1),U(r.CULL_FACE),I(0);let N={[Ri]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)N[103]=r.MIN,N[104]=r.MAX;else{let S=e.get("EXT_blend_minmax");S!==null&&(N[103]=S.MIN_EXT,N[104]=S.MAX_EXT)}let C={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[qo]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[Zo]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function I(S,Q,j,W,oe,he,de,fe,Ee,ge){if(S!==0){if(f===!1&&(U(r.BLEND),f=!0),S===5)oe=oe||Q,he=he||j,de=de||W,Q===m&&oe===v||(r.blendEquationSeparate(N[Q],N[oe]),m=Q,v=oe),j===y&&W===g&&he===E&&de===R||(r.blendFuncSeparate(C[j],C[W],C[he],C[de]),y=j,g=W,E=he,R=de),fe.equals(w)!==!1&&Ee===T||(r.blendColor(fe.r,fe.g,fe.b,Ee),w.copy(fe),T=Ee),_=S,O=!1;else if(S!==_||ge!==O){if(m===Ri&&v===Ri||(r.blendEquation(r.FUNC_ADD),m=Ri,v=Ri),ge)switch(S){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}y=null,g=null,E=null,R=null,w.set(0,0,0),T=0,_=S,O=ge}}else f===!0&&(A(r.BLEND),f=!1)}function F(S){B!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),B=S)}function k(S){S!==0?(U(r.CULL_FACE),S!==z&&(S===1?r.cullFace(r.BACK):S===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):A(r.CULL_FACE),z=S}function G(S,Q,j){S?(U(r.POLYGON_OFFSET_FILL),P===Q&&X===j||(r.polygonOffset(Q,j),P=Q,X=j)):A(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:U,disable:A,bindFramebuffer:function(S,Q){return h[S]!==Q&&(r.bindFramebuffer(S,Q),h[S]=Q,n&&(S===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Q),S===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Q)),!0)},drawBuffers:function(S,Q){let j=d,W=!1;if(S)if(j=u.get(Q),j===void 0&&(j=[],u.set(Q,j)),S.isWebGLMultipleRenderTargets){let oe=S.texture;if(j.length!==oe.length||j[0]!==r.COLOR_ATTACHMENT0){for(let he=0,de=oe.length;he<de;he++)j[he]=r.COLOR_ATTACHMENT0+he;j.length=oe.length,W=!0}}else j[0]!==r.COLOR_ATTACHMENT0&&(j[0]=r.COLOR_ATTACHMENT0,W=!0);else j[0]!==r.BACK&&(j[0]=r.BACK,W=!0);W&&(t.isWebGL2?r.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))},useProgram:function(S){return p!==S&&(r.useProgram(S),p=S,!0)},setBlending:I,setMaterial:function(S,Q){S.side===2?A(r.CULL_FACE):U(r.CULL_FACE);let j=S.side===Ft;Q&&(j=!j),F(j),S.blending===1&&S.transparent===!1?I(0):I(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),i.setMask(S.colorWrite);let W=S.stencilWrite;a.setTest(W),W&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),G(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?U(r.SAMPLE_ALPHA_TO_COVERAGE):A(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:F,setCullFace:k,setLineWidth:function(S){S!==Y&&(te&&r.lineWidth(S),Y=S)},setPolygonOffset:G,setScissorTest:function(S){S?U(r.SCISSOR_TEST):A(r.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=r.TEXTURE0+V-1),K!==S&&(r.activeTexture(S),K=S)},bindTexture:function(S,Q,j){j===void 0&&(j=K===null?r.TEXTURE0+V-1:K);let W=ie[j];W===void 0&&(W={type:void 0,texture:void 0},ie[j]=W),W.type===S&&W.texture===Q||(K!==j&&(r.activeTexture(j),K=j),r.bindTexture(S,Q||L[S]),W.type=S,W.texture=Q)},unbindTexture:function(){let S=ie[K];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,Q){let j=c.get(Q);j===void 0&&(j=new WeakMap,c.set(Q,j));let W=j.get(S);W===void 0&&(W=r.getUniformBlockIndex(Q,S.name),j.set(S,W))},uniformBlockBinding:function(S,Q){let j=c.get(Q).get(S);o.get(Q)!==j&&(r.uniformBlockBinding(Q,j,S.__bindingPointIndex),o.set(Q,j))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){Z.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),Z.copy(S))},viewport:function(S){x.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),x.copy(S))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},K=null,ie={},h={},u=new WeakMap,d=[],p=null,f=!1,_=null,m=null,y=null,g=null,v=null,E=null,R=null,w=new be(0,0,0),T=0,O=!1,B=null,z=null,Y=null,P=null,X=null,Z.set(0,0,r.canvas.width,r.canvas.height),x.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function tm(r,e,t,n,i,s,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(x){}function f(x,M){return p?new OffscreenCanvas(x,M):ns("canvas")}function _(x,M,L,U){let A=1;if((x.width>U||x.height>U)&&(A=U/Math.max(x.width,x.height)),A<1||M===!0){if(typeof HTMLImageElement!="undefined"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&x instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&x instanceof ImageBitmap){let N=M?la:Math.floor,C=N(A*x.width),I=N(A*x.height);u===void 0&&(u=f(C,I));let F=L?f(C,I):u;return F.width=C,F.height=I,F.getContext("2d").drawImage(x,0,0,C,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+C+"x"+I+")."),F}return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x}return x}function m(x){return nl(x.width)&&nl(x.height)}function y(x,M){return x.generateMipmaps&&M&&x.minFilter!==Lt&&x.minFilter!==pn}function g(x){r.generateMipmap(x)}function v(x,M,L,U,A=!1){if(o===!1)return M;if(x!==null){if(r[x]!==void 0)return r[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let N=M;if(M===r.RED&&(L===r.FLOAT&&(N=r.R32F),L===r.HALF_FLOAT&&(N=r.R16F),L===r.UNSIGNED_BYTE&&(N=r.R8)),M===r.RED_INTEGER&&(L===r.UNSIGNED_BYTE&&(N=r.R8UI),L===r.UNSIGNED_SHORT&&(N=r.R16UI),L===r.UNSIGNED_INT&&(N=r.R32UI),L===r.BYTE&&(N=r.R8I),L===r.SHORT&&(N=r.R16I),L===r.INT&&(N=r.R32I)),M===r.RG&&(L===r.FLOAT&&(N=r.RG32F),L===r.HALF_FLOAT&&(N=r.RG16F),L===r.UNSIGNED_BYTE&&(N=r.RG8)),M===r.RGBA){let C=A?ra:Je.getTransfer(U);L===r.FLOAT&&(N=r.RGBA32F),L===r.HALF_FLOAT&&(N=r.RGBA16F),L===r.UNSIGNED_BYTE&&(N=C===tt?r.SRGB8_ALPHA8:r.RGBA8),L===r.UNSIGNED_SHORT_4_4_4_4&&(N=r.RGBA4),L===r.UNSIGNED_SHORT_5_5_5_1&&(N=r.RGB5_A1)}return N!==r.R16F&&N!==r.R32F&&N!==r.RG16F&&N!==r.RG32F&&N!==r.RGBA16F&&N!==r.RGBA32F||e.get("EXT_color_buffer_float"),N}function E(x,M,L){return y(x,L)===!0||x.isFramebufferTexture&&x.minFilter!==Lt&&x.minFilter!==pn?Math.log2(Math.max(M.width,M.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?M.mipmaps.length:1}function R(x){return x===Lt||x===Rc||x===co?r.NEAREST:r.LINEAR}function w(x){let M=x.target;M.removeEventListener("dispose",w),(function(L){let U=n.get(L);if(U.__webglInit===void 0)return;let A=L.source,N=d.get(A);if(N){let C=N[U.__cacheKey];C.usedTimes--,C.usedTimes===0&&O(L),Object.keys(N).length===0&&d.delete(A)}n.remove(L)})(M),M.isVideoTexture&&h.delete(M)}function T(x){let M=x.target;M.removeEventListener("dispose",T),(function(L){let U=L.texture,A=n.get(L),N=n.get(U);if(N.__webglTexture!==void 0&&(r.deleteTexture(N.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(A.__webglFramebuffer[C]))for(let I=0;I<A.__webglFramebuffer[C].length;I++)r.deleteFramebuffer(A.__webglFramebuffer[C][I]);else r.deleteFramebuffer(A.__webglFramebuffer[C]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[C])}else{if(Array.isArray(A.__webglFramebuffer))for(let C=0;C<A.__webglFramebuffer.length;C++)r.deleteFramebuffer(A.__webglFramebuffer[C]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let C=0;C<A.__webglColorRenderbuffer.length;C++)A.__webglColorRenderbuffer[C]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[C]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let C=0,I=U.length;C<I;C++){let F=n.get(U[C]);F.__webglTexture&&(r.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(U[C])}n.remove(U),n.remove(L)})(M)}function O(x){let M=n.get(x);r.deleteTexture(M.__webglTexture);let L=x.source;delete d.get(L)[M.__cacheKey],a.memory.textures--}let B=0;function z(x,M){let L=n.get(x);if(x.isVideoTexture&&(function(U){let A=a.render.frame;h.get(U)!==A&&(h.set(U,A),U.update())})(x),x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){let U=x.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void ce(L,x,M);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,L.__webglTexture,r.TEXTURE0+M)}let Y={[ts]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[$o]:r.MIRRORED_REPEAT},P={[Lt]:r.NEAREST,[Rc]:r.NEAREST_MIPMAP_NEAREST,[co]:r.NEAREST_MIPMAP_LINEAR,[pn]:r.LINEAR,[md]:r.LINEAR_MIPMAP_NEAREST,[ta]:r.LINEAR_MIPMAP_LINEAR},X={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function V(x,M,L){if(L?(r.texParameteri(x,r.TEXTURE_WRAP_S,Y[M.wrapS]),r.texParameteri(x,r.TEXTURE_WRAP_T,Y[M.wrapT]),x!==r.TEXTURE_3D&&x!==r.TEXTURE_2D_ARRAY||r.texParameteri(x,r.TEXTURE_WRAP_R,Y[M.wrapR]),r.texParameteri(x,r.TEXTURE_MAG_FILTER,P[M.magFilter]),r.texParameteri(x,r.TEXTURE_MIN_FILTER,P[M.minFilter])):(r.texParameteri(x,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(x,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),x!==r.TEXTURE_3D&&x!==r.TEXTURE_2D_ARRAY||r.texParameteri(x,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),M.wrapS===Gn&&M.wrapT===Gn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(x,r.TEXTURE_MAG_FILTER,R(M.magFilter)),r.texParameteri(x,r.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==Lt&&M.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(x,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(x,r.TEXTURE_COMPARE_FUNC,X[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Lt||M.minFilter!==co&&M.minFilter!==ta||M.type===si&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ui&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(x,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function te(x,M){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,M.addEventListener("dispose",w));let U=M.source,A=d.get(U);A===void 0&&(A={},d.set(U,A));let N=(function(C){let I=[];return I.push(C.wrapS),I.push(C.wrapT),I.push(C.wrapR||0),I.push(C.magFilter),I.push(C.minFilter),I.push(C.anisotropy),I.push(C.internalFormat),I.push(C.format),I.push(C.type),I.push(C.generateMipmaps),I.push(C.premultiplyAlpha),I.push(C.flipY),I.push(C.unpackAlignment),I.push(C.colorSpace),I.join()})(M);if(N!==x.__cacheKey){A[N]===void 0&&(A[N]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,L=!0),A[N].usedTimes++;let C=A[x.__cacheKey];C!==void 0&&(A[x.__cacheKey].usedTimes--,C.usedTimes===0&&O(M)),x.__cacheKey=N,x.__webglTexture=A[N].texture}return L}function ce(x,M,L){let U=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(U=r.TEXTURE_3D);let A=te(x,M),N=M.source;t.bindTexture(U,x.__webglTexture,r.TEXTURE0+L);let C=n.get(N);if(N.version!==C.__version||A===!0){t.activeTexture(r.TEXTURE0+L);let I=Je.getPrimaries(Je.workingColorSpace),F=M.colorSpace===Sn?null:Je.getPrimaries(M.colorSpace),k=M.colorSpace===Sn||I===F?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let G=(function(ve){return!o&&(ve.wrapS!==Gn||ve.wrapT!==Gn||ve.minFilter!==Lt&&ve.minFilter!==pn)})(M)&&m(M.image)===!1,S=_(M.image,G,!1,i.maxTextureSize);S=Z(M,S);let Q=m(S)||o,j=s.convert(M.format,M.colorSpace),W,oe=s.convert(M.type),he=v(M.internalFormat,j,oe,M.colorSpace,M.isVideoTexture);V(U,M,Q);let de=M.mipmaps,fe=o&&M.isVideoTexture!==!0&&he!==fu,Ee=C.__version===void 0||A===!0,ge=E(M,S,Q);if(M.isDepthTexture)he=r.DEPTH_COMPONENT,o?he=M.type===si?r.DEPTH_COMPONENT32F:M.type===ri?r.DEPTH_COMPONENT24:M.type===Ii?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:M.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Di&&he===r.DEPTH_COMPONENT&&M.type!==nc&&M.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ri,oe=s.convert(M.type)),M.format===xr&&he===r.DEPTH_COMPONENT&&(he=r.DEPTH_STENCIL,M.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ii,oe=s.convert(M.type))),Ee&&(fe?t.texStorage2D(r.TEXTURE_2D,1,he,S.width,S.height):t.texImage2D(r.TEXTURE_2D,0,he,S.width,S.height,0,j,oe,null));else if(M.isDataTexture)if(de.length>0&&Q){fe&&Ee&&t.texStorage2D(r.TEXTURE_2D,ge,he,de[0].width,de[0].height);for(let ve=0,Pe=de.length;ve<Pe;ve++)W=de[ve],fe?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,W.width,W.height,j,oe,W.data):t.texImage2D(r.TEXTURE_2D,ve,he,W.width,W.height,0,j,oe,W.data);M.generateMipmaps=!1}else fe?(Ee&&t.texStorage2D(r.TEXTURE_2D,ge,he,S.width,S.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,j,oe,S.data)):t.texImage2D(r.TEXTURE_2D,0,he,S.width,S.height,0,j,oe,S.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,he,de[0].width,de[0].height,S.depth);for(let ve=0,Pe=de.length;ve<Pe;ve++)W=de[ve],M.format!==bn?j!==null?fe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,W.width,W.height,S.depth,j,W.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,he,W.width,W.height,S.depth,0,W.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,W.width,W.height,S.depth,j,oe,W.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ve,he,W.width,W.height,S.depth,0,j,oe,W.data)}else{fe&&Ee&&t.texStorage2D(r.TEXTURE_2D,ge,he,de[0].width,de[0].height);for(let ve=0,Pe=de.length;ve<Pe;ve++)W=de[ve],M.format!==bn?j!==null?fe?t.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,W.width,W.height,j,W.data):t.compressedTexImage2D(r.TEXTURE_2D,ve,he,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,W.width,W.height,j,oe,W.data):t.texImage2D(r.TEXTURE_2D,ve,he,W.width,W.height,0,j,oe,W.data)}else if(M.isDataArrayTexture)fe?(Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,he,S.width,S.height,S.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,j,oe,S.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,he,S.width,S.height,S.depth,0,j,oe,S.data);else if(M.isData3DTexture)fe?(Ee&&t.texStorage3D(r.TEXTURE_3D,ge,he,S.width,S.height,S.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,j,oe,S.data)):t.texImage3D(r.TEXTURE_3D,0,he,S.width,S.height,S.depth,0,j,oe,S.data);else if(M.isFramebufferTexture){if(Ee)if(fe)t.texStorage2D(r.TEXTURE_2D,ge,he,S.width,S.height);else{let ve=S.width,Pe=S.height;for(let ct=0;ct<ge;ct++)t.texImage2D(r.TEXTURE_2D,ct,he,ve,Pe,0,j,oe,null),ve>>=1,Pe>>=1}}else if(de.length>0&&Q){fe&&Ee&&t.texStorage2D(r.TEXTURE_2D,ge,he,de[0].width,de[0].height);for(let ve=0,Pe=de.length;ve<Pe;ve++)W=de[ve],fe?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,j,oe,W):t.texImage2D(r.TEXTURE_2D,ve,he,j,oe,W);M.generateMipmaps=!1}else fe?(Ee&&t.texStorage2D(r.TEXTURE_2D,ge,he,S.width,S.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,j,oe,S)):t.texImage2D(r.TEXTURE_2D,0,he,j,oe,S);y(M,Q)&&g(U),C.__version=N.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function ne(x,M,L,U,A,N){let C=s.convert(L.format,L.colorSpace),I=s.convert(L.type),F=v(L.internalFormat,C,I,L.colorSpace);if(!n.get(M).__hasExternalTextures){let k=Math.max(1,M.width>>N),G=Math.max(1,M.height>>N);A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY?t.texImage3D(A,N,F,k,G,M.depth,0,C,I,null):t.texImage2D(A,N,F,k,G,0,C,I,null)}t.bindFramebuffer(r.FRAMEBUFFER,x),ee(M)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,A,n.get(L).__webglTexture,0,q(M)):(A===r.TEXTURE_2D||A>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,A,n.get(L).__webglTexture,N),t.bindFramebuffer(r.FRAMEBUFFER,null)}function K(x,M,L){if(r.bindRenderbuffer(r.RENDERBUFFER,x),M.depthBuffer&&!M.stencilBuffer){let U=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(L||ee(M)){let A=M.depthTexture;A&&A.isDepthTexture&&(A.type===si?U=r.DEPTH_COMPONENT32F:A.type===ri&&(U=r.DEPTH_COMPONENT24));let N=q(M);ee(M)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N,U,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,N,U,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,U,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,x)}else if(M.depthBuffer&&M.stencilBuffer){let U=q(M);L&&ee(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,U,r.DEPTH24_STENCIL8,M.width,M.height):ee(M)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,x)}else{let U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let A=0;A<U.length;A++){let N=U[A],C=s.convert(N.format,N.colorSpace),I=s.convert(N.type),F=v(N.internalFormat,C,I,N.colorSpace),k=q(M);L&&ee(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,k,F,M.width,M.height):ee(M)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k,F,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,F,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ie(x){let M=n.get(x),L=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!M.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");(function(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!A.depthTexture||!A.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(A.depthTexture).__webglTexture&&A.depthTexture.image.width===A.width&&A.depthTexture.image.height===A.height||(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);let N=n.get(A.depthTexture).__webglTexture,C=q(A);if(A.depthTexture.format===Di)ee(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,N,0,C):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,N,0);else{if(A.depthTexture.format!==xr)throw new Error("Unknown depthTexture format");ee(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,N,0,C):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,N,0)}})(M.__webglFramebuffer,x)}else if(L){M.__webglDepthbuffer=[];for(let U=0;U<6;U++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[U]),M.__webglDepthbuffer[U]=r.createRenderbuffer(),K(M.__webglDepthbuffer[U],x,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),K(M.__webglDepthbuffer,x,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function q(x){return Math.min(i.maxSamples,x.samples)}function ee(x){let M=n.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Z(x,M){let L=x.colorSpace,U=x.format,A=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===el||L!==Vn&&L!==Sn&&(Je.getTransfer(L)===tt?o===!1?e.has("EXT_sRGB")===!0&&U===bn?(x.format=el,x.minFilter=pn,x.generateMipmaps=!1):M=ca.sRGBToLinear(M):U===bn&&A===Li||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),M}this.allocateTextureUnit=function(){let x=B;return x>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+i.maxTextures),B+=1,x},this.resetTextureUnits=function(){B=0},this.setTexture2D=z,this.setTexture2DArray=function(x,M){let L=n.get(x);x.version>0&&L.__version!==x.version?ce(L,x,M):t.bindTexture(r.TEXTURE_2D_ARRAY,L.__webglTexture,r.TEXTURE0+M)},this.setTexture3D=function(x,M){let L=n.get(x);x.version>0&&L.__version!==x.version?ce(L,x,M):t.bindTexture(r.TEXTURE_3D,L.__webglTexture,r.TEXTURE0+M)},this.setTextureCube=function(x,M){let L=n.get(x);x.version>0&&L.__version!==x.version?(function(U,A,N){if(A.image.length!==6)return;let C=te(U,A),I=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+N);let F=n.get(I);if(I.version!==F.__version||C===!0){t.activeTexture(r.TEXTURE0+N);let k=Je.getPrimaries(Je.workingColorSpace),G=A.colorSpace===Sn?null:Je.getPrimaries(A.colorSpace),S=A.colorSpace===Sn||k===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);let Q=A.isCompressedTexture||A.image[0].isCompressedTexture,j=A.image[0]&&A.image[0].isDataTexture,W=[];for(let ye=0;ye<6;ye++)W[ye]=Q||j?j?A.image[ye].image:A.image[ye]:_(A.image[ye],!1,!0,i.maxCubemapSize),W[ye]=Z(A,W[ye]);let oe=W[0],he=m(oe)||o,de=s.convert(A.format,A.colorSpace),fe=s.convert(A.type),Ee=v(A.internalFormat,de,fe,A.colorSpace),ge=o&&A.isVideoTexture!==!0,ve=F.__version===void 0||C===!0,Pe,ct=E(A,oe,he);if(V(r.TEXTURE_CUBE_MAP,A,he),Q){ge&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Ee,oe.width,oe.height);for(let ye=0;ye<6;ye++){Pe=W[ye].mipmaps;for(let Be=0;Be<Pe.length;Be++){let Ie=Pe[Be];A.format!==bn?de!==null?ge?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,0,0,Ie.width,Ie.height,de,Ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,Ee,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,0,0,Ie.width,Ie.height,de,fe,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,Ee,Ie.width,Ie.height,0,de,fe,Ie.data)}}}else{Pe=A.mipmaps,ge&&ve&&(Pe.length>0&&ct++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Ee,W[0].width,W[0].height));for(let ye=0;ye<6;ye++)if(j){ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,W[ye].width,W[ye].height,de,fe,W[ye].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ee,W[ye].width,W[ye].height,0,de,fe,W[ye].data);for(let Be=0;Be<Pe.length;Be++){let Ie=Pe[Be].image[ye].image;ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,0,0,Ie.width,Ie.height,de,fe,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,Ee,Ie.width,Ie.height,0,de,fe,Ie.data)}}else{ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,de,fe,W[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ee,de,fe,W[ye]);for(let Be=0;Be<Pe.length;Be++){let Ie=Pe[Be];ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,0,0,de,fe,Ie.image[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,Ee,de,fe,Ie.image[ye])}}}y(A,he)&&g(r.TEXTURE_CUBE_MAP),F.__version=I.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version})(L,x,M):t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+M)},this.rebindTextures=function(x,M,L){let U=n.get(x);M!==void 0&&ne(U.__webglFramebuffer,x,x.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),L!==void 0&&ie(x)},this.setupRenderTarget=function(x){let M=x.texture,L=n.get(x),U=n.get(M);x.addEventListener("dispose",T),x.isWebGLMultipleRenderTargets!==!0&&(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=M.version,a.memory.textures++);let A=x.isWebGLCubeRenderTarget===!0,N=x.isWebGLMultipleRenderTargets===!0,C=m(x)||o;if(A){L.__webglFramebuffer=[];for(let I=0;I<6;I++)if(o&&M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer[I]=[];for(let F=0;F<M.mipmaps.length;F++)L.__webglFramebuffer[I][F]=r.createFramebuffer()}else L.__webglFramebuffer[I]=r.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer=[];for(let I=0;I<M.mipmaps.length;I++)L.__webglFramebuffer[I]=r.createFramebuffer()}else L.__webglFramebuffer=r.createFramebuffer();if(N)if(i.drawBuffers){let I=x.texture;for(let F=0,k=I.length;F<k;F++){let G=n.get(I[F]);G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&ee(x)===!1){let I=N?M:[M];L.__webglMultisampledFramebuffer=r.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let F=0;F<I.length;F++){let k=I[F];L.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,L.__webglColorRenderbuffer[F]);let G=s.convert(k.format,k.colorSpace),S=s.convert(k.type),Q=v(k.internalFormat,G,S,k.colorSpace,x.isXRRenderTarget===!0),j=q(x);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,Q,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,L.__webglColorRenderbuffer[F])}r.bindRenderbuffer(r.RENDERBUFFER,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=r.createRenderbuffer(),K(L.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(A){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),V(r.TEXTURE_CUBE_MAP,M,C);for(let I=0;I<6;I++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let F=0;F<M.mipmaps.length;F++)ne(L.__webglFramebuffer[I][F],x,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,F);else ne(L.__webglFramebuffer[I],x,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);y(M,C)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(N){let I=x.texture;for(let F=0,k=I.length;F<k;F++){let G=I[F],S=n.get(G);t.bindTexture(r.TEXTURE_2D,S.__webglTexture),V(r.TEXTURE_2D,G,C),ne(L.__webglFramebuffer,x,G,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,0),y(G,C)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let I=r.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?I=x.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(I,U.__webglTexture),V(I,M,C),o&&M.mipmaps&&M.mipmaps.length>0)for(let F=0;F<M.mipmaps.length;F++)ne(L.__webglFramebuffer[F],x,M,r.COLOR_ATTACHMENT0,I,F);else ne(L.__webglFramebuffer,x,M,r.COLOR_ATTACHMENT0,I,0);y(M,C)&&g(I),t.unbindTexture()}x.depthBuffer&&ie(x)},this.updateRenderTargetMipmap=function(x){let M=m(x)||o,L=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let U=0,A=L.length;U<A;U++){let N=L[U];if(y(N,M)){let C=x.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,I=n.get(N).__webglTexture;t.bindTexture(C,I),g(C),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(x){if(o&&x.samples>0&&ee(x)===!1){let M=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],L=x.width,U=x.height,A=r.COLOR_BUFFER_BIT,N=[],C=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=n.get(x),F=x.isWebGLMultipleRenderTargets===!0;if(F)for(let k=0;k<M.length;k++)t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let k=0;k<M.length;k++){N.push(r.COLOR_ATTACHMENT0+k),x.depthBuffer&&N.push(C);let G=I.__ignoreDepthValues!==void 0&&I.__ignoreDepthValues;if(G===!1&&(x.depthBuffer&&(A|=r.DEPTH_BUFFER_BIT),x.stencilBuffer&&(A|=r.STENCIL_BUFFER_BIT)),F&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,I.__webglColorRenderbuffer[k]),G===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[C]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])),F){let S=n.get(M[k]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,S,0)}r.blitFramebuffer(0,0,L,U,0,0,L,U,A,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,N)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),F)for(let k=0;k<M.length;k++){t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,I.__webglColorRenderbuffer[k]);let G=n.get(M[k]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.TEXTURE_2D,G,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ee}function nm(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=Je.getTransfer(s);if(i===Li)return r.UNSIGNED_BYTE;if(i===hu)return r.UNSIGNED_SHORT_4_4_4_4;if(i===uu)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===nc)return r.UNSIGNED_SHORT;if(i===cu)return r.INT;if(i===ri)return r.UNSIGNED_INT;if(i===si)return r.FLOAT;if(i===Ui)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===bn)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===Di)return r.DEPTH_COMPONENT;if(i===xr)return r.DEPTH_STENCIL;if(i===el)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===du)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===pu)return r.RG_INTEGER;if(i===mu)return r.RGBA_INTEGER;if(i===ho||i===uo||i===po||i===mo)if(o===tt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===ho)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===ho)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===Cc||i===Pc||i===Lc||i===Ic){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===Cc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ic)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===fu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Dc||i===Nc){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===Dc)return o===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Nc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===Uc||i===Oc||i===Bc||i===Fc||i===Hc||i===zc||i===kc||i===Gc||i===Vc||i===Wc||i===Xc||i===jc||i===Yc||i===qc){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===Uc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qc)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===fo||i===Zc||i===Jc){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===fo)return o===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===Kc||i===$c||i===Qc){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===fo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Kc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$c)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===Ii?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var fl=class extends ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},We=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},im={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),y=this._getHandJoint(l,_);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(im)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new We;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gl=class extends Tn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,_=t.getContextAttributes(),m=null,y=null,g=[],v=[],E=new se,R=null,w=new ot;w.layers.enable(1),w.viewport=new je;let T=new ot;T.layers.enable(2),T.viewport=new je;let O=[w,T],B=new fl;B.layers.enable(1),B.layers.enable(2);let z=null,Y=null;function P(q){let ee=v.indexOf(q.inputSource);if(ee===-1)return;let Z=g[ee];Z!==void 0&&(Z.update(q.inputSource,q.frame,l||a),Z.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",V);for(let q=0;q<g.length;q++){let ee=v[q];ee!==null&&(v[q]=null,g[q].disconnect(ee))}z=null,Y=null,e.setRenderTarget(m),p=null,d=null,u=null,i=null,y=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}function V(q){for(let ee=0;ee<q.removed.length;ee++){let Z=q.removed[ee],x=v.indexOf(Z);x>=0&&(v[x]=null,g[x].disconnect(Z))}for(let ee=0;ee<q.added.length;ee++){let Z=q.added[ee],x=v.indexOf(Z);if(x===-1){for(let L=0;L<g.length;L++){if(L>=v.length){v.push(Z),x=L;break}if(v[L]===null){v[L]=Z,x=L;break}}if(x===-1)break}let M=g[x];M&&M.connect(Z)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=g[q];return ee===void 0&&(ee=new Kr,g[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=g[q];return ee===void 0&&(ee=new Kr,g[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=g[q];return ee===void 0&&(ee=new Kr,g[q]=ee),ee.getHandSpace()},this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",X),i.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:i.renderState.layers!==void 0||_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fn(p.framebufferWidth,p.framebufferHeight,{format:bn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,Z=null,x=null;_.depth&&(x=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?xr:Di,Z=_.stencil?Ii:ri);let M={colorFormat:t.RGBA8,depthFormat:x,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(M),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new fn(d.textureWidth,d.textureHeight,{format:bn,type:Li,depthTexture:new _a(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let te=new b,ce=new b;function ne(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;B.near=T.near=w.near=q.near,B.far=T.far=w.far=q.far,z===B.near&&Y===B.far||(i.updateRenderState({depthNear:B.near,depthFar:B.far}),z=B.near,Y=B.far);let ee=q.parent,Z=B.cameras;ne(B,ee);for(let x=0;x<Z.length;x++)ne(Z[x],ee);Z.length===2?(function(x,M,L){te.setFromMatrixPosition(M.matrixWorld),ce.setFromMatrixPosition(L.matrixWorld);let U=te.distanceTo(ce),A=M.projectionMatrix.elements,N=L.projectionMatrix.elements,C=A[14]/(A[10]-1),I=A[14]/(A[10]+1),F=(A[9]+1)/A[5],k=(A[9]-1)/A[5],G=(A[8]-1)/A[0],S=(N[8]+1)/N[0],Q=C*G,j=C*S,W=U/(-G+S),oe=W*-G;M.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.translateX(oe),x.translateZ(W),x.matrixWorld.compose(x.position,x.quaternion,x.scale),x.matrixWorldInverse.copy(x.matrixWorld).invert();let he=C+W,de=I+W,fe=Q-oe,Ee=j+(U-oe),ge=F*I/de*he,ve=k*I/de*he;x.projectionMatrix.makePerspective(fe,Ee,ge,ve,he,de),x.projectionMatrixInverse.copy(x.projectionMatrix).invert()})(B,w,T):B.projectionMatrix.copy(w.projectionMatrix),(function(x,M,L){L===null?x.matrix.copy(M.matrixWorld):(x.matrix.copy(L.matrixWorld),x.matrix.invert(),x.matrix.multiply(M.matrixWorld)),x.matrix.decompose(x.position,x.quaternion,x.scale),x.updateMatrixWorld(!0),x.projectionMatrix.copy(M.projectionMatrix),x.projectionMatrixInverse.copy(M.projectionMatrixInverse),x.isPerspectiveCamera&&(x.fov=2*br*Math.atan(1/x.projectionMatrix.elements[5]),x.zoom=1)})(q,B,ee)},this.getCamera=function(){return B},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let K=null,ie=new xu;ie.setAnimationLoop((function(q,ee){if(h=ee.getViewerPose(l||a),f=ee,h!==null){let Z=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let x=!1;Z.length!==B.cameras.length&&(B.cameras.length=0,x=!0);for(let M=0;M<Z.length;M++){let L=Z[M],U=null;if(p!==null)U=p.getViewport(L);else{let N=u.getViewSubImage(d,L);U=N.viewport,M===0&&(e.setRenderTargetTextures(y,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(y))}let A=O[M];A===void 0&&(A=new ot,A.layers.enable(M),A.viewport=new je,O[M]=A),A.matrix.fromArray(L.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(L.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(U.x,U.y,U.width,U.height),M===0&&(B.matrix.copy(A.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),x===!0&&B.cameras.push(A)}}for(let Z=0;Z<g.length;Z++){let x=v[Z],M=g[Z];x!==null&&M!==void 0&&M.update(x,ee,l||a)}K&&K(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),f=null})),this.setAnimationLoop=function(q){K=q},this.dispose=function(){}}};function rm(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Ft&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Ft&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,yu(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ft&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(i,s,c)):s.isMeshMatcapMaterial?(n(i,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function sm(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(u,d,p,f){let _=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let y=f[m];if(typeof _=="number"||typeof _=="boolean"){if(y!==_)return f[m]=_,!0}else if(y.equals(_)===!1)return y.copy(_),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let y=m.uniforms,g=0,v=16;for(let R=0,w=y.length;R<w;R++){let T=Array.isArray(y[R])?y[R]:[y[R]];for(let O=0,B=T.length;O<B;O++){let z=T[O],Y=Array.isArray(z.value)?z.value:[z.value];for(let P=0,X=Y.length;P<X;P++){let V=l(Y[P]),te=g%v;te!==0&&v-te<V.boundary&&(g+=v-te),z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=g,g+=V.storage}}}let E=g%v;E>0&&(g+=v-E),m.__size=g,m.__cache={}})(u),p=(function(m){let y=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=y;let g=r.createBuffer(),v=m.__size,E=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,v,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,g),g})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let _=e.render.frame;s[u.id]!==_&&((function(m){let y=i[m.id],g=m.uniforms,v=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,R=g.length;E<R;E++){let w=Array.isArray(g[E])?g[E]:[g[E]];for(let T=0,O=w.length;T<O;T++){let B=w[T];if(c(B,E,T,v)===!0){let z=B.__offset,Y=Array.isArray(B.value)?B.value:[B.value],P=0;for(let X=0;X<Y.length;X++){let V=Y[X],te=l(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,z+P,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,P),P+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Oi=class{constructor(e={}){let{canvas:t=fd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),_=null,m=null,y=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;let v=this,E=!1,R=0,w=0,T=null,O=-1,B=null,z=new je,Y=new je,P=null,X=new be(0),V=0,te=t.width,ce=t.height,ne=1,K=null,ie=null,q=new je(0,0,te,ce),ee=new je(0,0,te,ce),Z=!1,x=new Er,M=!1,L=!1,U=null,A=new Ce,N=new se,C=new b,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return T===null?ne:1}let k,G,S,Q,j,W,oe,he,de,fe,Ee,ge,ve,Pe,ct,ye,Be,Ie,vi,zt,H,me,Re,Ve,J=n;function kt(D,$){for(let re=0;re<D.length;re++){let le=D[re],ae=t.getContext(le,$);if(ae!==null)return ae}return null}try{let D={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",_s,!1),t.addEventListener("webglcontextrestored",Br,!1),t.addEventListener("webglcontextcreationerror",Kt,!1),J===null){let $=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&$.shift(),J=kt($,D),J===null)throw kt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}function _t(){k=new zd(J),G=new Od(J,k,e),k.init(G),me=new nm(J,k,G),S=new em(J,k,G),Q=new Vd(J),j=new Xp,W=new tm(J,k,S,j,G,me,Q),oe=new Fd(v),he=new Hd(v),de=new Id(J,G),Re=new Nd(J,k,de,G),fe=new kd(J,de,Q,Re),Ee=new Yd(J,fe,de,Q),vi=new jd(J,G,W),ye=new Bd(j),ge=new Wp(v,oe,he,k,G,Re,ye),ve=new rm(v,j),Pe=new Yp,ct=new $p(k,G),Ie=new Dd(v,oe,he,S,Ee,d,c),Be=new Qp(v,Ee,G),Ve=new sm(J,Q,G,S),zt=new Ud(J,k,Q,G),H=new Gd(J,k,Q,G),Q.programs=ge.programs,v.capabilities=G,v.extensions=k,v.properties=j,v.renderLists=Pe,v.shadowMap=Be,v.state=S,v.info=Q}_t();let bt=new gl(v,J);function _s(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Br(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let D=Q.autoReset,$=Be.enabled,re=Be.autoUpdate,le=Be.needsUpdate,ae=Be.type;_t(),Q.autoReset=D,Be.enabled=$,Be.autoUpdate=re,Be.needsUpdate=le,Be.type=ae}function Kt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function $t(D){let $=D.target;$.removeEventListener("dispose",$t),(function(re){(function(le){let ae=j.get(le).programs;ae!==void 0&&(ae.forEach((function(pe){ge.releaseProgram(pe)})),le.isShaderMaterial&&ge.releaseShaderCache(le))})(re),j.remove(re)})($)}function Yi(D,$,re){D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=Ft,D.needsUpdate=!0,xs(D,$,re),D.side=ci,D.needsUpdate=!0,xs(D,$,re),D.side=2):xs(D,$,re)}this.xr=bt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let D=k.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=k.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(D){D!==void 0&&(ne=D,this.setSize(te,ce,!1))},this.getSize=function(D){return D.set(te,ce)},this.setSize=function(D,$,re=!0){bt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(te=D,ce=$,t.width=Math.floor(D*ne),t.height=Math.floor($*ne),re===!0&&(t.style.width=D+"px",t.style.height=$+"px"),this.setViewport(0,0,D,$))},this.getDrawingBufferSize=function(D){return D.set(te*ne,ce*ne).floor()},this.setDrawingBufferSize=function(D,$,re){te=D,ce=$,ne=re,t.width=Math.floor(D*re),t.height=Math.floor($*re),this.setViewport(0,0,D,$)},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(q)},this.setViewport=function(D,$,re,le){D.isVector4?q.set(D.x,D.y,D.z,D.w):q.set(D,$,re,le),S.viewport(z.copy(q).multiplyScalar(ne).floor())},this.getScissor=function(D){return D.copy(ee)},this.setScissor=function(D,$,re,le){D.isVector4?ee.set(D.x,D.y,D.z,D.w):ee.set(D,$,re,le),S.scissor(Y.copy(ee).multiplyScalar(ne).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(D){S.setScissorTest(Z=D)},this.setOpaqueSort=function(D){K=D},this.setTransparentSort=function(D){ie=D},this.getClearColor=function(D){return D.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(D=!0,$=!0,re=!0){let le=0;if(D){let ae=!1;if(T!==null){let pe=T.texture.format;ae=pe===mu||pe===pu||pe===du}if(ae){let pe=T.texture.type,Me=pe===Li||pe===ri||pe===nc||pe===Ii||pe===hu||pe===uu,Te=Ie.getClearColor(),De=Ie.getClearAlpha(),Ue=Te.r,Fe=Te.g,He=Te.b;Me?(p[0]=Ue,p[1]=Fe,p[2]=He,p[3]=De,J.clearBufferuiv(J.COLOR,0,p)):(f[0]=Ue,f[1]=Fe,f[2]=He,f[3]=De,J.clearBufferiv(J.COLOR,0,f))}else le|=J.COLOR_BUFFER_BIT}$&&(le|=J.DEPTH_BUFFER_BIT),re&&(le|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_s,!1),t.removeEventListener("webglcontextrestored",Br,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),Pe.dispose(),ct.dispose(),j.dispose(),oe.dispose(),he.dispose(),Ee.dispose(),Re.dispose(),Ve.dispose(),ge.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",$n),bt.removeEventListener("sessionend",_i),U&&(U.dispose(),U=null),yi.stop()},this.renderBufferDirect=function(D,$,re,le,ae,pe){$===null&&($=I);let Me=ae.isMesh&&ae.matrixWorld.determinant()<0,Te=(function(pt,Qt,Bt,ze,Ge){Qt.isScene!==!0&&(Qt=I),W.resetTextureUnits();let Fr=Qt.fog,so=ze.isMeshStandardMaterial?Qt.environment:null,$u=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Vn,Ms=(ze.isMeshStandardMaterial?he:oe).get(ze.envMap||so),Qu=ze.vertexColors===!0&&!!Bt.attributes.color&&Bt.attributes.color.itemSize===4,ed=!!Bt.attributes.tangent&&(!!ze.normalMap||ze.anisotropy>0),td=!!Bt.morphAttributes.position,nd=!!Bt.morphAttributes.normal,id=!!Bt.morphAttributes.color,Ec=oi;ze.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(Ec=v.toneMapping));let wc=Bt.morphAttributes.position||Bt.morphAttributes.normal||Bt.morphAttributes.color,rd=wc!==void 0?wc.length:0,Xe=j.get(ze),sd=m.state.lights;if(M===!0&&(L===!0||pt!==B)){let en=pt===B&&ze.id===O;ye.setState(ze,pt,en)}let ln=!1;ze.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==sd.state.version||Xe.outputColorSpace!==$u||Ge.isBatchedMesh&&Xe.batching===!1?ln=!0:Ge.isBatchedMesh||Xe.batching!==!0?Ge.isInstancedMesh&&Xe.instancing===!1?ln=!0:Ge.isInstancedMesh||Xe.instancing!==!0?Ge.isSkinnedMesh&&Xe.skinning===!1?ln=!0:Ge.isSkinnedMesh||Xe.skinning!==!0?Ge.isInstancedMesh&&Xe.instancingColor===!0&&Ge.instanceColor===null||Ge.isInstancedMesh&&Xe.instancingColor===!1&&Ge.instanceColor!==null||Xe.envMap!==Ms||ze.fog===!0&&Xe.fog!==Fr?ln=!0:Xe.numClippingPlanes===void 0||Xe.numClippingPlanes===ye.numPlanes&&Xe.numIntersection===ye.numIntersection?(Xe.vertexAlphas!==Qu||Xe.vertexTangents!==ed||Xe.morphTargets!==td||Xe.morphNormals!==nd||Xe.morphColors!==id||Xe.toneMapping!==Ec||G.isWebGL2===!0&&Xe.morphTargetsCount!==rd)&&(ln=!0):ln=!0:ln=!0:ln=!0:ln=!0:(ln=!0,Xe.__version=ze.version);let Mi=Xe.currentProgram;ln===!0&&(Mi=xs(ze,Qt,Ge));let Tc=!1,Hr=!1,ao=!1,wt=Mi.getUniforms(),bi=Xe.uniforms;if(S.useProgram(Mi.program)&&(Tc=!0,Hr=!0,ao=!0),ze.id!==O&&(O=ze.id,Hr=!0),Tc||B!==pt){wt.setValue(J,"projectionMatrix",pt.projectionMatrix),wt.setValue(J,"viewMatrix",pt.matrixWorldInverse);let en=wt.map.cameraPosition;en!==void 0&&en.setValue(J,C.setFromMatrixPosition(pt.matrixWorld)),G.logarithmicDepthBuffer&&wt.setValue(J,"logDepthBufFC",2/(Math.log(pt.far+1)/Math.LN2)),(ze.isMeshPhongMaterial||ze.isMeshToonMaterial||ze.isMeshLambertMaterial||ze.isMeshBasicMaterial||ze.isMeshStandardMaterial||ze.isShaderMaterial)&&wt.setValue(J,"isOrthographic",pt.isOrthographicCamera===!0),B!==pt&&(B=pt,Hr=!0,ao=!0)}if(Ge.isSkinnedMesh){wt.setOptional(J,Ge,"bindMatrix"),wt.setOptional(J,Ge,"bindMatrixInverse");let en=Ge.skeleton;en&&(G.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),wt.setValue(J,"boneTexture",en.boneTexture,W)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ge.isBatchedMesh&&(wt.setOptional(J,Ge,"batchingTexture"),wt.setValue(J,"batchingTexture",Ge._matricesTexture,W));let oo=Bt.morphAttributes;(oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0&&G.isWebGL2===!0)&&vi.update(Ge,Bt,Mi),(Hr||Xe.receiveShadow!==Ge.receiveShadow)&&(Xe.receiveShadow=Ge.receiveShadow,wt.setValue(J,"receiveShadow",Ge.receiveShadow)),ze.isMeshGouraudMaterial&&ze.envMap!==null&&(bi.envMap.value=Ms,bi.flipEnvMap.value=Ms.isCubeTexture&&Ms.isRenderTargetTexture===!1?-1:1),Hr&&(wt.setValue(J,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&(cn=ao,(xn=bi).ambientLightColor.needsUpdate=cn,xn.lightProbe.needsUpdate=cn,xn.directionalLights.needsUpdate=cn,xn.directionalLightShadows.needsUpdate=cn,xn.pointLights.needsUpdate=cn,xn.pointLightShadows.needsUpdate=cn,xn.spotLights.needsUpdate=cn,xn.spotLightShadows.needsUpdate=cn,xn.rectAreaLights.needsUpdate=cn,xn.hemisphereLights.needsUpdate=cn),Fr&&ze.fog===!0&&ve.refreshFogUniforms(bi,Fr),ve.refreshMaterialUniforms(bi,ze,ne,ce,U),vr.upload(J,bc(Xe),bi,W));var xn,cn;if(ze.isShaderMaterial&&ze.uniformsNeedUpdate===!0&&(vr.upload(J,bc(Xe),bi,W),ze.uniformsNeedUpdate=!1),ze.isSpriteMaterial&&wt.setValue(J,"center",Ge.center),wt.setValue(J,"modelViewMatrix",Ge.modelViewMatrix),wt.setValue(J,"normalMatrix",Ge.normalMatrix),wt.setValue(J,"modelMatrix",Ge.matrixWorld),ze.isShaderMaterial||ze.isRawShaderMaterial){let en=ze.uniformsGroups;for(let lo=0,ad=en.length;lo<ad;lo++)if(G.isWebGL2){let Ac=en[lo];Ve.update(Ac,Mi),Ve.bind(Ac,Mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mi})(D,$,re,le,ae);S.setMaterial(le,Me);let De=re.index,Ue=1;if(le.wireframe===!0){if(De=fe.getWireframeAttribute(re),De===void 0)return;Ue=2}let Fe=re.drawRange,He=re.attributes.position,rt=Fe.start*Ue,on=(Fe.start+Fe.count)*Ue;pe!==null&&(rt=Math.max(rt,pe.start*Ue),on=Math.min(on,(pe.start+pe.count)*Ue)),De!==null?(rt=Math.max(rt,0),on=Math.min(on,De.count)):He!=null&&(rt=Math.max(rt,0),on=Math.min(on,He.count));let Un=on-rt;if(Un<0||Un===1/0)return;let xi;Re.setup(ae,le,Te,re,De);let st=zt;if(De!==null&&(xi=de.get(De),st=H,st.setIndex(xi)),ae.isMesh)le.wireframe===!0?(S.setLineWidth(le.wireframeLinewidth*F()),st.setMode(J.LINES)):st.setMode(J.TRIANGLES);else if(ae.isLine){let pt=le.linewidth;pt===void 0&&(pt=1),S.setLineWidth(pt*F()),ae.isLineSegments?st.setMode(J.LINES):ae.isLineLoop?st.setMode(J.LINE_LOOP):st.setMode(J.LINE_STRIP)}else ae.isPoints?st.setMode(J.POINTS):ae.isSprite&&st.setMode(J.TRIANGLES);if(ae.isBatchedMesh)st.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else if(ae.isInstancedMesh)st.renderInstances(rt,Un,ae.count);else if(re.isInstancedBufferGeometry){let pt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Qt=Math.min(re.instanceCount,pt);st.renderInstances(rt,Un,Qt)}else st.render(rt,Un)},this.compile=function(D,$,re=null){re===null&&(re=D),m=ct.get(re),m.init(),g.push(m),re.traverseVisible((function(ae){ae.isLight&&ae.layers.test($.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))})),D!==re&&D.traverseVisible((function(ae){ae.isLight&&ae.layers.test($.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))})),m.setupLights(v._useLegacyLights);let le=new Set;return D.traverse((function(ae){let pe=ae.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){let Te=pe[Me];Yi(Te,re,ae),le.add(Te)}else Yi(pe,re,ae),le.add(pe)})),g.pop(),m=null,le},this.compileAsync=function(D,$,re=null){let le=this.compile(D,$,re);return new Promise((ae=>{function pe(){le.forEach((function(Me){j.get(Me).currentProgram.isReady()&&le.delete(Me)})),le.size!==0?setTimeout(pe,10):ae(D)}k.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)}))};let Nn=null;function $n(){yi.stop()}function _i(){yi.start()}let yi=new xu;function yc(D,$,re,le){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)re=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||x.intersectsSprite(D)){le&&C.setFromMatrixPosition(D.matrixWorld).applyMatrix4(A);let pe=Ee.update(D),Me=D.material;Me.visible&&_.push(D,pe,Me,re,C.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||x.intersectsObject(D))){let pe=Ee.update(D),Me=D.material;if(le&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),C.copy(D.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),C.copy(pe.boundingSphere.center)),C.applyMatrix4(D.matrixWorld).applyMatrix4(A)),Array.isArray(Me)){let Te=pe.groups;for(let De=0,Ue=Te.length;De<Ue;De++){let Fe=Te[De],He=Me[Fe.materialIndex];He&&He.visible&&_.push(D,pe,He,re,C.z,Fe)}}else Me.visible&&_.push(D,pe,Me,re,C.z,null)}}let ae=D.children;for(let pe=0,Me=ae.length;pe<Me;pe++)yc(ae[pe],$,re,le)}function xc(D,$,re,le){let ae=D.opaque,pe=D.transmissive,Me=D.transparent;m.setupLightsView(re),M===!0&&ye.setGlobalState(v.clippingPlanes,re),pe.length>0&&(function(Te,De,Ue,Fe){if((Ue.isScene===!0?Ue.overrideMaterial:null)!==null)return;let rt=G.isWebGL2;U===null&&(U=new fn(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")?Ui:Li,minFilter:ta,samples:rt?4:0})),v.getDrawingBufferSize(N),rt?U.setSize(N.x,N.y):U.setSize(la(N.x),la(N.y));let on=v.getRenderTarget();v.setRenderTarget(U),v.getClearColor(X),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear();let Un=v.toneMapping;v.toneMapping=oi,ys(Te,Ue,Fe),W.updateMultisampleRenderTarget(U),W.updateRenderTargetMipmap(U);let xi=!1;for(let st=0,pt=De.length;st<pt;st++){let Qt=De[st],Bt=Qt.object,ze=Qt.geometry,Ge=Qt.material,Fr=Qt.group;if(Ge.side===2&&Bt.layers.test(Fe.layers)){let so=Ge.side;Ge.side=Ft,Ge.needsUpdate=!0,Mc(Bt,Ue,Fe,ze,Ge,Fr),Ge.side=so,Ge.needsUpdate=!0,xi=!0}}xi===!0&&(W.updateMultisampleRenderTarget(U),W.updateRenderTargetMipmap(U)),v.setRenderTarget(on),v.setClearColor(X,V),v.toneMapping=Un})(ae,pe,$,re),le&&S.viewport(z.copy(le)),ae.length>0&&ys(ae,$,re),pe.length>0&&ys(pe,$,re),Me.length>0&&ys(Me,$,re),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ys(D,$,re){let le=$.isScene===!0?$.overrideMaterial:null;for(let ae=0,pe=D.length;ae<pe;ae++){let Me=D[ae],Te=Me.object,De=Me.geometry,Ue=le===null?Me.material:le,Fe=Me.group;Te.layers.test(re.layers)&&Mc(Te,$,re,De,Ue,Fe)}}function Mc(D,$,re,le,ae,pe){D.onBeforeRender(v,$,re,le,ae,pe),D.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ae.onBeforeRender(v,$,re,le,D,pe),ae.transparent===!0&&ae.side===2&&ae.forceSinglePass===!1?(ae.side=Ft,ae.needsUpdate=!0,v.renderBufferDirect(re,$,le,ae,D,pe),ae.side=ci,ae.needsUpdate=!0,v.renderBufferDirect(re,$,le,ae,D,pe),ae.side=2):v.renderBufferDirect(re,$,le,ae,D,pe),D.onAfterRender(v,$,re,le,ae,pe)}function xs(D,$,re){$.isScene!==!0&&($=I);let le=j.get(D),ae=m.state.lights,pe=m.state.shadowsArray,Me=ae.state.version,Te=ge.getParameters(D,ae.state,pe,$,re),De=ge.getProgramCacheKey(Te),Ue=le.programs;le.environment=D.isMeshStandardMaterial?$.environment:null,le.fog=$.fog,le.envMap=(D.isMeshStandardMaterial?he:oe).get(D.envMap||le.environment),Ue===void 0&&(D.addEventListener("dispose",$t),Ue=new Map,le.programs=Ue);let Fe=Ue.get(De);if(Fe!==void 0){if(le.currentProgram===Fe&&le.lightsStateVersion===Me)return Sc(D,Te),Fe}else Te.uniforms=ge.getUniforms(D),D.onBuild(re,Te,v),D.onBeforeCompile(Te,v),Fe=ge.acquireProgram(Te,De),Ue.set(De,Fe),le.uniforms=Te.uniforms;let He=le.uniforms;return(D.isShaderMaterial||D.isRawShaderMaterial)&&D.clipping!==!0||(He.clippingPlanes=ye.uniform),Sc(D,Te),le.needsLights=(function(rt){return rt.isMeshLambertMaterial||rt.isMeshToonMaterial||rt.isMeshPhongMaterial||rt.isMeshStandardMaterial||rt.isShadowMaterial||rt.isShaderMaterial&&rt.lights===!0})(D),le.lightsStateVersion=Me,le.needsLights&&(He.ambientLightColor.value=ae.state.ambient,He.lightProbe.value=ae.state.probe,He.directionalLights.value=ae.state.directional,He.directionalLightShadows.value=ae.state.directionalShadow,He.spotLights.value=ae.state.spot,He.spotLightShadows.value=ae.state.spotShadow,He.rectAreaLights.value=ae.state.rectArea,He.ltc_1.value=ae.state.rectAreaLTC1,He.ltc_2.value=ae.state.rectAreaLTC2,He.pointLights.value=ae.state.point,He.pointLightShadows.value=ae.state.pointShadow,He.hemisphereLights.value=ae.state.hemi,He.directionalShadowMap.value=ae.state.directionalShadowMap,He.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,He.spotShadowMap.value=ae.state.spotShadowMap,He.spotLightMatrix.value=ae.state.spotLightMatrix,He.spotLightMap.value=ae.state.spotLightMap,He.pointShadowMap.value=ae.state.pointShadowMap,He.pointShadowMatrix.value=ae.state.pointShadowMatrix),le.currentProgram=Fe,le.uniformsList=null,Fe}function bc(D){if(D.uniformsList===null){let $=D.currentProgram.getUniforms();D.uniformsList=vr.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function Sc(D,$){let re=j.get(D);re.outputColorSpace=$.outputColorSpace,re.batching=$.batching,re.instancing=$.instancing,re.instancingColor=$.instancingColor,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}yi.setAnimationLoop((function(D){Nn&&Nn(D)})),typeof self!="undefined"&&yi.setContext(self),this.setAnimationLoop=function(D){Nn=D,bt.setAnimationLoop(D),D===null?yi.stop():yi.start()},bt.addEventListener("sessionstart",$n),bt.addEventListener("sessionend",_i),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera($),$=bt.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,$,T),m=ct.get(D,g.length),m.init(),g.push(m),A.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),x.setFromProjectionMatrix(A),L=this.localClippingEnabled,M=ye.init(this.clippingPlanes,L),_=Pe.get(D,y.length),_.init(),y.push(_),yc(D,$,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(K,ie),this.info.render.frame++,M===!0&&ye.beginShadows();let re=m.state.shadowsArray;if(Be.render(re,D,$),M===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ie.render(_,D),m.setupLights(v._useLegacyLights),$.isArrayCamera){let le=$.cameras;for(let ae=0,pe=le.length;ae<pe;ae++){let Me=le[ae];xc(_,D,Me,Me.viewport)}}else xc(_,D,$);T!==null&&(W.updateMultisampleRenderTarget(T),W.updateRenderTargetMipmap(T)),D.isScene===!0&&D.onAfterRender(v,D,$),Re.resetDefaultState(),O=-1,B=null,g.pop(),m=g.length>0?g[g.length-1]:null,y.pop(),_=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,$,re){j.get(D.texture).__webglTexture=$,j.get(D.depthTexture).__webglTexture=re;let le=j.get(D);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=re===void 0,le.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,$){let re=j.get(D);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(D,$=0,re=0){T=D,R=$,w=re;let le=!0,ae=null,pe=!1,Me=!1;if(D){let Te=j.get(D);Te.__useDefaultFramebuffer!==void 0?(S.bindFramebuffer(J.FRAMEBUFFER,null),le=!1):Te.__webglFramebuffer===void 0?W.setupRenderTarget(D):Te.__hasExternalTextures&&W.rebindTextures(D,j.get(D.texture).__webglTexture,j.get(D.depthTexture).__webglTexture);let De=D.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Me=!0);let Ue=j.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(ae=Array.isArray(Ue[$])?Ue[$][re]:Ue[$],pe=!0):ae=G.isWebGL2&&D.samples>0&&W.useMultisampledRTT(D)===!1?j.get(D).__webglMultisampledFramebuffer:Array.isArray(Ue)?Ue[re]:Ue,z.copy(D.viewport),Y.copy(D.scissor),P=D.scissorTest}else z.copy(q).multiplyScalar(ne).floor(),Y.copy(ee).multiplyScalar(ne).floor(),P=Z;if(S.bindFramebuffer(J.FRAMEBUFFER,ae)&&G.drawBuffers&&le&&S.drawBuffers(D,ae),S.viewport(z),S.scissor(Y),S.setScissorTest(P),pe){let Te=j.get(D.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te.__webglTexture,re)}else if(Me){let Te=j.get(D.texture),De=$||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Te.__webglTexture,re||0,De)}O=-1},this.readRenderTargetPixels=function(D,$,re,le,ae,pe,Me){if(!D||!D.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=j.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){S.bindFramebuffer(J.FRAMEBUFFER,Te);try{let De=D.texture,Ue=De.format,Fe=De.type;if(Ue!==bn&&me.convert(Ue)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let He=Fe===Ui&&(k.has("EXT_color_buffer_half_float")||G.isWebGL2&&k.has("EXT_color_buffer_float"));if(!(Fe===Li||me.convert(Fe)===J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)||Fe===si&&(G.isWebGL2||k.has("OES_texture_float")||k.has("WEBGL_color_buffer_float"))||He))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");$>=0&&$<=D.width-le&&re>=0&&re<=D.height-ae&&J.readPixels($,re,le,ae,me.convert(Ue),me.convert(Fe),pe)}finally{let De=T!==null?j.get(T).__webglFramebuffer:null;S.bindFramebuffer(J.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(D,$,re=0){let le=Math.pow(2,-re),ae=Math.floor($.image.width*le),pe=Math.floor($.image.height*le);W.setTexture2D($,0),J.copyTexSubImage2D(J.TEXTURE_2D,re,0,0,D.x,D.y,ae,pe),S.unbindTexture()},this.copyTextureToTexture=function(D,$,re,le=0){let ae=$.image.width,pe=$.image.height,Me=me.convert(re.format),Te=me.convert(re.type);W.setTexture2D(re,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,re.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,re.unpackAlignment),$.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,le,D.x,D.y,ae,pe,Me,Te,$.image.data):$.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,le,D.x,D.y,$.mipmaps[0].width,$.mipmaps[0].height,Me,$.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,le,D.x,D.y,Me,Te,$.image),le===0&&re.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),S.unbindTexture()},this.copyTextureToTexture3D=function(D,$,re,le,ae=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let pe=D.max.x-D.min.x+1,Me=D.max.y-D.min.y+1,Te=D.max.z-D.min.z+1,De=me.convert(le.format),Ue=me.convert(le.type),Fe;if(le.isData3DTexture)W.setTexture3D(le,0),Fe=J.TEXTURE_3D;else{if(!le.isDataArrayTexture&&!le.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");W.setTexture2DArray(le,0),Fe=J.TEXTURE_2D_ARRAY}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,le.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,le.unpackAlignment);let He=J.getParameter(J.UNPACK_ROW_LENGTH),rt=J.getParameter(J.UNPACK_IMAGE_HEIGHT),on=J.getParameter(J.UNPACK_SKIP_PIXELS),Un=J.getParameter(J.UNPACK_SKIP_ROWS),xi=J.getParameter(J.UNPACK_SKIP_IMAGES),st=re.isCompressedTexture?re.mipmaps[ae]:re.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,st.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,st.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,D.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,D.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,D.min.z),re.isDataTexture||re.isData3DTexture?J.texSubImage3D(Fe,ae,$.x,$.y,$.z,pe,Me,Te,De,Ue,st.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Fe,ae,$.x,$.y,$.z,pe,Me,Te,De,st.data)):J.texSubImage3D(Fe,ae,$.x,$.y,$.z,pe,Me,Te,De,Ue,st),J.pixelStorei(J.UNPACK_ROW_LENGTH,He),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,rt),J.pixelStorei(J.UNPACK_SKIP_PIXELS,on),J.pixelStorei(J.UNPACK_SKIP_ROWS,Un),J.pixelStorei(J.UNPACK_SKIP_IMAGES,xi),ae===0&&le.generateMipmaps&&J.generateMipmap(Fe),S.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?W.setTextureCube(D,0):D.isData3DTexture?W.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?W.setTexture2DArray(D,0):W.setTexture2D(D,0),S.unbindTexture()},this.resetState=function(){R=0,w=0,T=null,S.reset(),Re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ic?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Ua?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ke?Ni:gu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ni?Ke:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},vl=class extends Oi{};vl.prototype.isWebGL1Renderer=!0;var ya=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wr=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},_l=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ct=new b,xa=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ss=class extends Xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hr,Xr=new b,ur=new b,dr=new b,pr=new se,jr=new se,Tu=new Ce,Ws=new b,Yr=new b,Xs=new b,Gh=new se,Ho=new se,Vh=new se,Ma=class extends mt{constructor(e=new ss){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _l(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new xa(n,3,0,!1)),hr.setAttribute("uv",new xa(n,2,3,!1))}this.geometry=hr,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;js(Ws.set(-.5,-.5,0),dr,a,ur,i,s),js(Yr.set(.5,-.5,0),dr,a,ur,i,s),js(Xs.set(.5,.5,0),dr,a,ur,i,s),Gh.set(0,0),Ho.set(1,0),Vh.set(1,1);let o=e.ray.intersectTriangle(Ws,Yr,Xs,!1,Xr);if(o===null&&(js(Yr.set(-.5,.5,0),dr,a,ur,i,s),Ho.set(0,1),o=e.ray.intersectTriangle(Ws,Xs,Yr,!1,Xr),o===null))return;let c=e.ray.origin.distanceTo(Xr);c<e.near||c>e.far||t.push({distance:c,point:Xr.clone(),uv:ai.getInterpolation(Xr,Ws,Yr,Xs,Gh,Ho,Vh,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function js(r,e,t,n,i,s){pr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(jr.x=s*pr.x-i*pr.y,jr.y=i*pr.x+s*pr.y):jr.copy(pr),r.copy(e),r.x+=jr.x,r.y+=jr.y,r.applyMatrix4(Tu)}var af=new b,of=new b;var lf=new b,cf=new je,hf=new je,uf=new b,df=new Ce,pf=new b,mf=new Rn,ff=new Ce,gf=new Wn;var vf=new Ce,_f=new Ce;var yf=new Ce,xf=new Ce;var Mf=new An,bf=new Ce,Sf=new Ae,Ef=new Rn;var yl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var wf=new Ce,Tf=new Ce,Af=new Ce,Rf=new Ce,Cf=new Er,Pf=new An,Lf=new Rn,If=new b,Df=new yl,Nf=new Ae;var jn=class extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wh=new b,Xh=new b,jh=new Ce,zo=new Wn,Ys=new Rn,xl=class extends mt{constructor(e=new $e,t=new jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Wh.fromBufferAttribute(t,i-1),Xh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wh.distanceTo(Xh);e.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;jh.copy(i).invert(),zo.copy(e.ray).applyMatrix4(jh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new b,h=new b,u=new b,d=new b,p=this.isLineSegments?2:1,f=n.index,_=n.attributes.position;if(f!==null)for(let m=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count)-1;m<y;m+=p){let g=f.getX(m),v=f.getX(m+1);if(l.fromBufferAttribute(_,g),h.fromBufferAttribute(_,v),zo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}else for(let m=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count)-1;m<y;m+=p){if(l.fromBufferAttribute(_,m),h.fromBufferAttribute(_,m+1),zo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(d);g<e.near||g>e.far||t.push({distance:g,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}},Yh=new b,qh=new b,hi=class extends xl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Yh.fromBufferAttribute(t,i),qh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yh.distanceTo(qh);e.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Uf=new Ce,Of=new Wn,Bf=new Rn,Ff=new b;var ui=class extends Wt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-a,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new se:new b);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new b,i=[],s=[],a=[],o=new b,c=new Ce;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new b)}s[0]=new b,a[0]=new b;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ut(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(ut(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},as=class extends rn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new se,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ml=class extends as{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ac(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var qs=new b,ko=new ac,Go=new ac,Vo=new ac,bl=class extends rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=i[(l-1)%s]:(qs.subVectors(i[0],i[1]).add(i[0]),o=qs);let u=i[l%s],d=i[(l+1)%s];if(this.closed||l+2<s?c=i[(l+2)%s]:(qs.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=qs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),ko.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,_,m),Go.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,_,m),Vo.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,_,m)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),Go.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),Vo.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(ko.calc(h),Go.calc(h),Vo.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zh(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function $r(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function Qr(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var ba=class extends rn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qr(e,i.x,s.x,a.x,o.x),Qr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sl=class extends rn{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qr(e,i.x,s.x,a.x,o.x),Qr(e,i.y,s.y,a.y,o.y),Qr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sa=class extends rn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},El=class extends rn{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends rn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set($r(e,i.x,s.x,a.x),$r(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends rn{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set($r(e,i.x,s.x,a.x),$r(e,i.y,s.y,a.y),$r(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Zh(o,c.x,l.x,h.x,u.x),Zh(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new se().fromArray(i))}return this}},Aa=Object.freeze({__proto__:null,ArcCurve:Ml,CatmullRomCurve3:bl,CubicBezierCurve:ba,CubicBezierCurve3:Sl,EllipseCurve:as,LineCurve:Sa,LineCurve3:El,QuadraticBezierCurve:Ea,QuadraticBezierCurve3:wa,SplineCurve:Ta}),wl=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Aa[i.type]().fromJSON(i))}return this}},os=class extends wl{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Sa(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Ea(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ba(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ta(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new as(e,t,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ra=class r extends $e{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ut(i,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new b,d=new se,p=new b,f=new b,_=new b,m=0,y=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,y=e[g+1].y-e[g].y,p.x=1*y,p.y=-m,p.z=0*y,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[g+1].x-e[g].x,y=e[g+1].y-e[g].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(f)}for(let g=0;g<=t;g++){let v=n+g*h*i,E=Math.sin(v),R=Math.cos(v);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*E,u.y=e[w].y,u.z=e[w].x*R,a.push(u.x,u.y,u.z),d.x=g/t,d.y=w/(e.length-1),o.push(d.x,d.y);let T=c[3*w+0]*E,O=c[3*w+1],B=c[3*w+0]*R;l.push(T,O,B)}}for(let g=0;g<t;g++)for(let v=0;v<e.length-1;v++){let E=v+g*e.length,R=E,w=E+e.length,T=E+e.length+1,O=E+1;s.push(R,w,O),s.push(T,O,w)}this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Tl=class r extends Ra{constructor(e=1,t=1,n=4,i=8){let s=new os;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Al=class r extends $e{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new b,h=new se;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},jt=class r extends $e{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,_=[],m=n/2,y=0;function g(v){let E=f,R=new se,w=new b,T=0,O=v===!0?e:t,B=v===!0?1:-1;for(let Y=1;Y<=i;Y++)u.push(0,m*B,0),d.push(0,B,0),p.push(.5,.5),f++;let z=f;for(let Y=0;Y<=i;Y++){let P=Y/i*c+o,X=Math.cos(P),V=Math.sin(P);w.x=O*V,w.y=m*B,w.z=O*X,u.push(w.x,w.y,w.z),d.push(0,B,0),R.x=.5*X+.5,R.y=.5*V*B+.5,p.push(R.x,R.y),f++}for(let Y=0;Y<i;Y++){let P=E+Y,X=z+Y;v===!0?h.push(X,X+1,P):h.push(X+1,X,P),T+=3}l.addGroup(y,T,v===!0?1:2),y+=T}(function(){let v=new b,E=new b,R=0,w=(t-e)/n;for(let T=0;T<=s;T++){let O=[],B=T/s,z=B*(t-e)+e;for(let Y=0;Y<=i;Y++){let P=Y/i,X=P*c+o,V=Math.sin(X),te=Math.cos(X);E.x=z*V,E.y=-B*n+m,E.z=z*te,u.push(E.x,E.y,E.z),v.set(V,w,te).normalize(),d.push(v.x,v.y,v.z),p.push(P,1-B),O.push(f++)}_.push(O)}for(let T=0;T<i;T++)for(let O=0;O<s;O++){let B=_[O][T],z=_[O+1][T],Y=_[O+1][T+1],P=_[O][T+1];h.push(B,z,P),h.push(z,Y,P),R+=6}l.addGroup(y,R,0),y+=R})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rl=class r extends jt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bi=class r extends $e{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,f,_){let m=_+1,y=[];for(let g=0;g<=m;g++){y[g]=[];let v=d.clone().lerp(f,g/m),E=p.clone().lerp(f,g/m),R=m-g;for(let w=0;w<=R;w++)y[g][w]=w===0&&g===m?v:v.clone().lerp(E,w/R)}for(let g=0;g<m;g++)for(let v=0;v<2*(m-g)-1;v++){let E=Math.floor(v/2);v%2==0?(c(y[g][E+1]),c(y[g+1][E]),c(y[g][E])):(c(y[g][E+1]),c(y[g+1][E+1]),c(y[g+1][E]))}}function c(d){s.push(d.x,d.y,d.z)}function l(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,_){_<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=_/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new b,f=new b,_=new b;for(let m=0;m<t.length;m+=3)l(t[m+0],p),l(t[m+1],f),l(t[m+2],_),o(p,f,_,d)})(i),(function(d){let p=new b;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let d=new b;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let _=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(_,1-m)}var p;(function(){let f=new b,_=new b,m=new b,y=new b,g=new se,v=new se,E=new se;for(let R=0,w=0;R<s.length;R+=9,w+=6){f.set(s[R+0],s[R+1],s[R+2]),_.set(s[R+3],s[R+4],s[R+5]),m.set(s[R+6],s[R+7],s[R+8]),g.set(a[w+0],a[w+1]),v.set(a[w+2],a[w+3]),E.set(a[w+4],a[w+5]),y.copy(f).add(_).add(m).divideScalar(3);let T=u(y);h(g,w+0,f,T),h(v,w+2,_,T),h(E,w+4,m,T)}})(),(function(){for(let f=0;f<a.length;f+=6){let _=a[f+0],m=a[f+2],y=a[f+4],g=Math.max(_,m,y),v=Math.min(_,m,y);g>.9&&v<.1&&(_<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Cl=class r extends Bi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Zs=new b,Js=new b,Wo=new b,Ks=new ai,Fi=class extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(fr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:_,b:m,c:y}=Ks;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),y.fromBufferAttribute(o,l[2]),Ks.getNormal(Wo),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let v=(g+1)%3,E=u[g],R=u[v],w=Ks[h[g]],T=Ks[h[v]],O=`${E}_${R}`,B=`${R}_${E}`;B in d&&d[B]?(Wo.dot(d[B].normal)<=s&&(p.push(w.x,w.y,w.z),p.push(T.x,T.y,T.z)),d[B]=null):O in d||(d[O]={index0:l[g],index1:l[v],normal:Wo.clone()})}}for(let f in d)if(d[f]){let{index0:_,index1:m}=d[f];Zs.fromBufferAttribute(o,_),Js.fromBufferAttribute(o,m),p.push(Zs.x,Zs.y,Zs.z),p.push(Js.x,Js.y,Js.z)}this.setAttribute("position",new Se(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ca=class extends os{constructor(e){super(e),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new os().fromJSON(i))}return this}},am=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Jh(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,u,d,p;if(n&&(s=(function(f,_,m,y){let g=[],v,E,R,w,T;for(v=0,E=_.length;v<E;v++)R=_[v]*y,w=v<E-1?_[v+1]*y:f.length,T=Jh(f,R,w,y,!1),T===T.next&&(T.steiner=!0),g.push(mm(T));for(g.sort(um),v=0;v<g.length;v++)m=dm(g[v],m);return m})(r,e,s,t)),r.length>80*t){o=l=r[0],c=h=r[1];for(let f=t;f<i;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return ls(s,a,t,o,c,p,0),a};function Jh(r,e,t,n,i){let s,a;if(i===(function(o,c,l,h){let u=0;for(let d=c,p=l-h;d<l;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Kh(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Kh(s,r[s],r[s+1],a);return a&&Ba(a,a.next)&&(hs(a),a=a.next),a}function Hi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Ba(n,n.next)&&at(n.prev,n,n.next)!==0)n=n.next;else{if(hs(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function ls(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=Pl(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(_){let m,y,g,v,E,R,w,T,O=1;do{for(y=_,_=null,E=null,R=0;y;){for(R++,g=y,w=0,m=0;m<O&&(w++,g=g.nextZ,g);m++);for(T=O;w>0||T>0&&g;)w!==0&&(T===0||!g||y.z<=g.z)?(v=y,y=y.nextZ,w--):(v=g,g=g.nextZ,T--),E?E.nextZ=v:_=v,v.prevZ=E,E=v;y=g}E.nextZ=null,O*=2}while(R>1)})(f)})(r,n,i,s);let o,c,l=r;for(;r.prev!==r.next;)if(o=r.prev,c=r.next,s?lm(r,n,i,s):om(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),hs(r),r=c.next,l=c.next;else if((r=c)===l){a?a===1?ls(r=cm(Hi(r),e,t),e,t,n,i,s,2):a===2&&hm(r,e,t,n,i,s):ls(Hi(r),e,t,n,i,s,1);break}}function om(r){let e=r.prev,t=r,n=r.next;if(at(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<c?o<l?o:l:c<l?c:l,d=i>s?i>a?i:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&mr(i,o,s,c,a,l,f.x,f.y)&&at(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function lm(r,e,t,n){let i=r.prev,s=r,a=r.next;if(at(i,s,a)>=0)return!1;let o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,f=h<u?h<d?h:d:u<d?u:d,_=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,y=Pl(p,f,e,t,n),g=Pl(_,m,e,t,n),v=r.prevZ,E=r.nextZ;for(;v&&v.z>=y&&E&&E.z<=g;){if(v.x>=p&&v.x<=_&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&mr(o,h,c,u,l,d,v.x,v.y)&&at(v.prev,v,v.next)>=0||(v=v.prevZ,E.x>=p&&E.x<=_&&E.y>=f&&E.y<=m&&E!==i&&E!==a&&mr(o,h,c,u,l,d,E.x,E.y)&&at(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;v&&v.z>=y;){if(v.x>=p&&v.x<=_&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&mr(o,h,c,u,l,d,v.x,v.y)&&at(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;E&&E.z<=g;){if(E.x>=p&&E.x<=_&&E.y>=f&&E.y<=m&&E!==i&&E!==a&&mr(o,h,c,u,l,d,E.x,E.y)&&at(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function cm(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!Ba(i,s)&&Au(i,n,n.next,s)&&cs(i,s)&&cs(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),hs(n),hs(n.next),n=r=s),n=n.next}while(n!==r);return Hi(n)}function hm(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fm(a,o)){let c=Ru(a,o);return a=Hi(a,a.next),c=Hi(c,c.next),ls(a,e,t,n,i,s,0),void ls(c,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function um(r,e){return r.x-e.x}function dm(r,e){let t=(function(i,s){let a,o=s,c=-1/0,l=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=l&&m>c&&(c=m,a=o.x<o.next.x?o:o.next,m===l))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,_=1/0;o=a;do l>=o.x&&o.x>=d&&l!==o.x&&mr(h<p?l:c,h,d,p,h<p?c:l,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(l-o.x),cs(o,i)&&(f<_||f===_&&(o.x>a.x||o.x===a.x&&pm(a,o)))&&(a=o,_=f)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=Ru(t,r);return Hi(n,n.next),Hi(t,t.next)}function pm(r,e){return at(r.prev,r,e.prev)<0&&at(e.next,r,r.next)<0}function Pl(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function mm(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function mr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function fm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Au(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(cs(r,e)&&cs(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(at(r.prev,r,e.prev)||at(r,e.prev,e))||Ba(r,e)&&at(r.prev,r,r.next)>0&&at(e.prev,e,e.next)>0)}function at(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ba(r,e){return r.x===e.x&&r.y===e.y}function Au(r,e,t,n){let i=Qs(at(r,e,t)),s=Qs(at(r,e,n)),a=Qs(at(t,n,r)),o=Qs(at(t,n,e));return i!==s&&a!==o||!(i!==0||!$s(r,t,e))||!(s!==0||!$s(r,n,e))||!(a!==0||!$s(t,r,n))||!(o!==0||!$s(t,e,n))}function $s(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Qs(r){return r>0?1:r<0?-1:0}function cs(r,e){return at(r.prev,r,r.next)<0?at(r,e,r.next)>=0&&at(r,r.prev,e)>=0:at(r,e,r.prev)<0||at(r,r.next,e)<0}function Ru(r,e){let t=new Ll(r.i,r.x,r.y),n=new Ll(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Kh(r,e,t,n){let i=new Ll(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function hs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ll(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var li=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];$h(e),Qh(n,e);let a=e.length;t.forEach($h);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Qh(n,t[c]);let o=am(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function $h(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Qh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Il=class r extends $e{constructor(e=new Ca([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:gm,v,E,R,w,T,O=!1;y&&(v=y.getSpacedPoints(h),O=!0,d=!1,E=y.computeFrenetFrames(h,!1),R=new b,w=new b,T=new b),d||(m=0,p=0,f=0,_=0);let B=o.extractPoints(l),z=B.shape,Y=B.holes;if(!li.isClockWise(z)){z=z.reverse();for(let C=0,I=Y.length;C<I;C++){let F=Y[C];li.isClockWise(F)&&(Y[C]=F.reverse())}}let P=li.triangulateShape(z,Y),X=z;for(let C=0,I=Y.length;C<I;C++){let F=Y[C];z=z.concat(F)}function V(C,I,F){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(I,F)}let te=z.length,ce=P.length;function ne(C,I,F){let k,G,S,Q=C.x-I.x,j=C.y-I.y,W=F.x-C.x,oe=F.y-C.y,he=Q*Q+j*j,de=Q*oe-j*W;if(Math.abs(de)>Number.EPSILON){let fe=Math.sqrt(he),Ee=Math.sqrt(W*W+oe*oe),ge=I.x-j/fe,ve=I.y+Q/fe,Pe=((F.x-oe/Ee-ge)*oe-(F.y+W/Ee-ve)*W)/(Q*oe-j*W);k=ge+Q*Pe-C.x,G=ve+j*Pe-C.y;let ct=k*k+G*G;if(ct<=2)return new se(k,G);S=Math.sqrt(ct/2)}else{let fe=!1;Q>Number.EPSILON?W>Number.EPSILON&&(fe=!0):Q<-Number.EPSILON?W<-Number.EPSILON&&(fe=!0):Math.sign(j)===Math.sign(oe)&&(fe=!0),fe?(k=-j,G=Q,S=Math.sqrt(he)):(k=Q,G=j,S=Math.sqrt(he/2))}return new se(k/S,G/S)}let K=[];for(let C=0,I=X.length,F=I-1,k=C+1;C<I;C++,F++,k++)F===I&&(F=0),k===I&&(k=0),K[C]=ne(X[C],X[F],X[k]);let ie=[],q,ee=K.concat();for(let C=0,I=Y.length;C<I;C++){let F=Y[C];q=[];for(let k=0,G=F.length,S=G-1,Q=k+1;k<G;k++,S++,Q++)S===G&&(S=0),Q===G&&(Q=0),q[k]=ne(F[k],F[S],F[Q]);ie.push(q),ee=ee.concat(q)}for(let C=0;C<m;C++){let I=C/m,F=p*Math.cos(I*Math.PI/2),k=f*Math.sin(I*Math.PI/2)+_;for(let G=0,S=X.length;G<S;G++){let Q=V(X[G],K[G],k);M(Q.x,Q.y,-F)}for(let G=0,S=Y.length;G<S;G++){let Q=Y[G];q=ie[G];for(let j=0,W=Q.length;j<W;j++){let oe=V(Q[j],q[j],k);M(oe.x,oe.y,-F)}}}let Z=f+_;for(let C=0;C<te;C++){let I=d?V(z[C],ee[C],Z):z[C];O?(w.copy(E.normals[0]).multiplyScalar(I.x),R.copy(E.binormals[0]).multiplyScalar(I.y),T.copy(v[0]).add(w).add(R),M(T.x,T.y,T.z)):M(I.x,I.y,0)}for(let C=1;C<=h;C++)for(let I=0;I<te;I++){let F=d?V(z[I],ee[I],Z):z[I];O?(w.copy(E.normals[C]).multiplyScalar(F.x),R.copy(E.binormals[C]).multiplyScalar(F.y),T.copy(v[C]).add(w).add(R),M(T.x,T.y,T.z)):M(F.x,F.y,u/h*C)}for(let C=m-1;C>=0;C--){let I=C/m,F=p*Math.cos(I*Math.PI/2),k=f*Math.sin(I*Math.PI/2)+_;for(let G=0,S=X.length;G<S;G++){let Q=V(X[G],K[G],k);M(Q.x,Q.y,u+F)}for(let G=0,S=Y.length;G<S;G++){let Q=Y[G];q=ie[G];for(let j=0,W=Q.length;j<W;j++){let oe=V(Q[j],q[j],k);O?M(oe.x,oe.y+v[h-1].y,v[h-1].x+F):M(oe.x,oe.y,u+F)}}}function x(C,I){let F=C.length;for(;--F>=0;){let k=F,G=F-1;G<0&&(G=C.length-1);for(let S=0,Q=h+2*m;S<Q;S++){let j=te*S,W=te*(S+1);U(I+k+j,I+G+j,I+G+W,I+k+W)}}}function M(C,I,F){c.push(C),c.push(I),c.push(F)}function L(C,I,F){A(C),A(I),A(F);let k=i.length/3,G=g.generateTopUV(n,i,k-3,k-2,k-1);N(G[0]),N(G[1]),N(G[2])}function U(C,I,F,k){A(C),A(I),A(k),A(I),A(F),A(k);let G=i.length/3,S=g.generateSideWallUV(n,i,G-6,G-3,G-2,G-1);N(S[0]),N(S[1]),N(S[3]),N(S[1]),N(S[2]),N(S[3])}function A(C){i.push(c[3*C+0]),i.push(c[3*C+1]),i.push(c[3*C+2])}function N(C){s.push(C.x),s.push(C.y)}(function(){let C=i.length/3;if(d){let I=0,F=te*I;for(let k=0;k<ce;k++){let G=P[k];L(G[2]+F,G[1]+F,G[0]+F)}I=h+2*m,F=te*I;for(let k=0;k<ce;k++){let G=P[k];L(G[0]+F,G[1]+F,G[2]+F)}}else{for(let I=0;I<ce;I++){let F=P[I];L(F[2],F[1],F[0])}for(let I=0;I<ce;I++){let F=P[I];L(F[0]+te*h,F[1]+te*h,F[2]+te*h)}}n.addGroup(C,i.length/3-C,0)})(),(function(){let C=i.length/3,I=0;x(X,I),I+=X.length;for(let F=0,k=Y.length;F<k;F++){let G=Y[F];x(G,I),I+=G.length}n.addGroup(C,i.length/3-C,1)})()}this.setAttribute("position",new Se(i,3)),this.setAttribute("uv",new Se(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Aa[i.type]().fromJSON(i)),new r(n,e.options)}},gm={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new se(s,a),new se(o,c),new se(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],_=e[3*s],m=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new se(a,1-c),new se(l,1-u),new se(d,1-f),new se(_,1-y)]:[new se(o,1-c),new se(h,1-u),new se(p,1-f),new se(m,1-y)]}},Dl=class r extends Bi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Nl=class r extends Bi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ul=class r extends $e{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new b,f=new se;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let y=s+m/n*a;p.x=u*Math.cos(y),p.y=u*Math.sin(y),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let y=0;y<n;y++){let g=y+m,v=g,E=g+n+1,R=g+n+2,w=g+1;o.push(v,E,w),o.push(E,R,w)}}this.setIndex(o),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ol=class r extends $e{constructor(e=new Ca([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;li.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let g=f[m];li.isClockWise(g)===!0&&(f[m]=g.reverse())}let _=li.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let g=f[m];p=p.concat(g)}for(let m=0,y=p.length;m<y;m++){let g=p[m];i.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let m=0,y=_.length;m<y;m++){let g=_[m],v=g[0]+u,E=g[1]+u,R=g[2]+u;n.push(v,E,R),c+=3}}this.setIndex(n),this.setAttribute("position",new Se(i,3)),this.setAttribute("normal",new Se(s,3)),this.setAttribute("uv",new Se(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Pn=class r extends $e{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new b,d=new b,p=[],f=[],_=[],m=[];for(let y=0;y<=n;y++){let g=[],v=y/n,E=0;y===0&&a===0?E=.5/t:y===n&&c===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){let w=R/t;u.x=-e*Math.cos(i+w*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+w*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+E,1-v),g.push(l++)}h.push(g)}for(let y=0;y<n;y++)for(let g=0;g<t;g++){let v=h[y][g+1],E=h[y][g],R=h[y+1][g],w=h[y+1][g+1];(y!==0||a>0)&&p.push(v,E,w),(y!==n-1||c<Math.PI)&&p.push(E,R,w)}this.setIndex(p),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Bl=class r extends Bi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},zi=class r extends $e{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new b,u=new b,d=new b;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let _=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let _=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,y=(i+1)*(p-1)+f,g=(i+1)*p+f;a.push(_,m,g),a.push(m,y,g)}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Fl=class r extends $e{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new b,d=new b,p=new b,f=new b,_=new b,m=new b,y=new b;for(let v=0;v<=n;++v){let E=v/n*s*Math.PI*2;g(E,s,a,e,p),g(E+.01,s,a,e,f),m.subVectors(f,p),y.addVectors(f,p),_.crossVectors(m,y),y.crossVectors(_,m),_.normalize(),y.normalize();for(let R=0;R<=i;++R){let w=R/i*Math.PI*2,T=-t*Math.cos(w),O=t*Math.sin(w);u.x=p.x+(T*y.x+O*_.x),u.y=p.y+(T*y.y+O*_.y),u.z=p.z+(T*y.z+O*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(v/n),h.push(R/i)}}for(let v=1;v<=n;v++)for(let E=1;E<=i;E++){let R=(i+1)*(v-1)+(E-1),w=(i+1)*v+(E-1),T=(i+1)*v+E,O=(i+1)*(v-1)+E;o.push(R,w,O),o.push(w,T,O)}function g(v,E,R,w,T){let O=Math.cos(v),B=Math.sin(v),z=R/E*v,Y=Math.cos(z);T.x=w*(2+Y)*.5*O,T.y=w*(2+Y)*B*.5,T.z=w*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Hl=class r extends $e{constructor(e=new wa(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,c=new b,l=new se,h=new b,u=[],d=[],p=[],f=[];function _(m){h=e.getPointAt(m/t,h);let y=a.normals[m],g=a.binormals[m];for(let v=0;v<=i;v++){let E=v/i*Math.PI*2,R=Math.sin(E),w=-Math.cos(E);c.x=w*y.x+R*g.x,c.y=w*y.y+R*g.y,c.z=w*y.z+R*g.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)_(m);_(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let y=0;y<=i;y++)l.x=m/t,l.y=y/i,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let y=1;y<=i;y++){let g=(i+1)*(m-1)+(y-1),v=(i+1)*m+(y-1),E=(i+1)*m+y,R=(i+1)*(m-1)+y;f.push(g,v,R),f.push(v,E,R)}})()})(),this.setIndex(f),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},zl=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new b,s=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let _=0;_<3;_++){let m=o.getX(p+_),y=o.getX(p+(_+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),eu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),eu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function eu(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Hf=Object.freeze({__proto__:null,BoxGeometry:Cn,CapsuleGeometry:Tl,CircleGeometry:Al,ConeGeometry:Rl,CylinderGeometry:jt,DodecahedronGeometry:Cl,EdgesGeometry:Fi,ExtrudeGeometry:Il,IcosahedronGeometry:Dl,LatheGeometry:Ra,OctahedronGeometry:Nl,PlaneGeometry:Nt,PolyhedronGeometry:Bi,RingGeometry:Ul,ShapeGeometry:Ol,SphereGeometry:Pn,TetrahedronGeometry:Bl,TorusGeometry:zi,TorusKnotGeometry:Fl,TubeGeometry:Hl,WireframeGeometry:zl});var Ye=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ki=class extends Ye{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ea(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function vm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Tr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kl=class extends Tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eh,endingEnd:eh}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case th:s=e,o=2*t-n;break;case nh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case th:a=e,c=2*n-t;break;case nh:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),_=f*f,m=_*f,y=-d*m+2*d*_-d*f,g=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*f+1,v=(-1-p)*m+(1.5+p)*_+.5*f,E=p*m-p*_;for(let R=0;R!==o;++R)s[R]=y*a[h+R]+g*a[l+R]+v*a[c+R]+E*a[u+R];return s}},Gl=class extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Vl=class extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ea(t,this.TimeBufferType),this.values=ea(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ea(e.times,Array),values:ea(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&vm(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===go,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};mn.prototype.TimeBufferType=Float32Array,mn.prototype.ValueBufferType=Float32Array,mn.prototype.DefaultInterpolation=ia;var Ci=class extends mn{};Ci.prototype.ValueTypeName="bool",Ci.prototype.ValueBufferType=Array,Ci.prototype.DefaultInterpolation=na,Ci.prototype.InterpolantFactoryMethodLinear=void 0,Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends mn{};Wl.prototype.ValueTypeName="color";var Xl=class extends mn{};Xl.prototype.ValueTypeName="number";var jl=class extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Xt.slerpFlat(s,0,a,l-o,a,l,c);return s}},es=class extends mn{InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}};es.prototype.ValueTypeName="quaternion",es.prototype.DefaultInterpolation=ia,es.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends mn{};Pi.prototype.ValueTypeName="string",Pi.prototype.ValueBufferType=Array,Pi.prototype.DefaultInterpolation=na,Pi.prototype.InterpolantFactoryMethodLinear=void 0,Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends mn{};Yl.prototype.ValueTypeName="vector";var tu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ql=class{constructor(e,t,n){let i=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},_m=new ql,us=class{constructor(e){this.manager=e!==void 0?e:_m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};us.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zl=class extends us{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=tu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=ns("img");function c(){h(),tu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Pa=class extends us{constructor(e){super(e)}load(e,t,n,i){let s=new Wt,a=new Zl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},Ar=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},La=class extends Ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xo=new Ce,nu=new b,iu=new b,ds=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(nu),iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iu),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jl=class extends ds{constructor(){super(new ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*br*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ia=class extends Ar{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Jl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ru=new Ce,qr=new b,jo=new b,Kl=class extends ds{constructor(){super(new ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(qr),jo.copy(n.position),jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jo),n.updateMatrixWorld(),i.makeTranslation(-qr.x,-qr.y,-qr.z),ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru)}},ps=class extends Ar{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kl}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$l=class extends ds{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Da=class extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new $l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var zf=new Ce,kf=new Ce,Gf=new Ce;var Vf=new b,Wf=new Xt,Xf=new b,jf=new b;var Yf=new b,qf=new Xt,Zf=new b,Jf=new b;var oc="\\[\\]\\.:\\/",ym=new RegExp("["+oc+"]","g"),Yo="[^"+oc+"]",xm="[^"+oc.replace("\\.","")+"]",Mm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Yo)+/(WCOD+)?/.source.replace("WCOD",xm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yo)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yo)+"$"),bm=["material","materials","bones","map"],nt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ym,"")}static parseTrackName(e){let t=Mm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);bm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=class{constructor(r,e,t){let n=t||nt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray],nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kf=new Float32Array(1);var Rr=class{constructor(e,t,n=0,i=1/0){this.ray=new Wn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ql(e,this,n,t),n.sort(su),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ql(e[i],this,n,t);return n.sort(su),n}};function su(r,e){return r.distance-e.distance}function Ql(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)Ql(i[s],e,t,!0)}}var Yn=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var $f=new se;var Qf=new b,eg=new b;var tg=new b;var ng=new b,ig=new Ce,rg=new Ce;var sg=new b,ag=new be,og=new be;var lg=new b,cg=new b,hg=new b;var ug=new b,dg=new rs;var pg=new An;var mg=new b;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Cu={type:"change"},lc={type:"start"},Pu={type:"end"},Fa=new Wn,Lu=new It,Sm=Math.cos(70*di.DEG2RAD),Ha=class extends Tn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.DOLLY,RIGHT:Ln.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",ve),this._domElementKeyEvents=H},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ve),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cu),n.update(),s=i.NONE},this.update=(function(){let H=new b,me=new Xt().setFromUnitVectors(e.up,new b(0,1,0)),Re=me.clone().invert(),Ve=new b,J=new Xt,kt=new b,_t=2*Math.PI;return function(_s=null){let Br=n.object.position;H.copy(Br).sub(n.target),H.applyQuaternion(me),o.setFromVector3(H),n.autoRotate&&s===i.NONE&&Y(B(_s)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Kt=n.minAzimuthAngle,$t=n.maxAzimuthAngle;isFinite(Kt)&&isFinite($t)&&(Kt<-Math.PI?Kt+=_t:Kt>Math.PI&&(Kt-=_t),$t<-Math.PI?$t+=_t:$t>Math.PI&&($t-=_t),Kt<=$t?o.theta=Math.max(Kt,Math.min($t,o.theta)):o.theta=o.theta>(Kt+$t)/2?Math.max(Kt,o.theta):Math.min($t,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=ie(o.radius):o.radius=ie(o.radius*l),H.setFromSpherical(o),H.applyQuaternion(Re),Br.copy(n.target).add(H),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Yi=!1;if(n.zoomToCursor&&w){let Nn=null;if(n.object.isPerspectiveCamera){let $n=H.length();Nn=ie($n*l);let _i=$n-Nn;n.object.position.addScaledVector(E,_i),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let $n=new b(R.x,R.y,0);$n.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Yi=!0;let _i=new b(R.x,R.y,0);_i.unproject(n.object),n.object.position.sub(_i).add($n),n.object.updateMatrixWorld(),Nn=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Nn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Nn).add(n.object.position):(Fa.origin.copy(n.object.position),Fa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Fa.direction))<Sm?e.lookAt(n.target):(Lu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Fa.intersectPlane(Lu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Yi=!0);return l=1,w=!1,Yi||Ve.distanceToSquared(n.object.position)>a||8*(1-J.dot(n.object.quaternion))>a||kt.distanceToSquared(n.target)>0?(n.dispatchEvent(Cu),Ve.copy(n.object.position),J.copy(n.object.quaternion),kt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ye),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",de),n.domElement.removeEventListener("wheel",ge),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",de),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ve),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,a=1e-6,o=new Yn,c=new Yn,l=1,h=new b,u=new se,d=new se,p=new se,f=new se,_=new se,m=new se,y=new se,g=new se,v=new se,E=new b,R=new se,w=!1,T=[],O={};function B(H){return H!==null?2*Math.PI/60*n.autoRotateSpeed*H:2*Math.PI/60/60*n.autoRotateSpeed}function z(H){let me=Math.abs(H)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*me)}function Y(H){c.theta-=H}function P(H){c.phi-=H}let X=(function(){let H=new b;return function(Re,Ve){H.setFromMatrixColumn(Ve,0),H.multiplyScalar(-Re),h.add(H)}})(),V=(function(){let H=new b;return function(Re,Ve){n.screenSpacePanning===!0?H.setFromMatrixColumn(Ve,1):(H.setFromMatrixColumn(Ve,0),H.crossVectors(n.object.up,H)),H.multiplyScalar(Re),h.add(H)}})(),te=(function(){let H=new b;return function(Re,Ve){let J=n.domElement;if(n.object.isPerspectiveCamera){let kt=n.object.position;H.copy(kt).sub(n.target);let _t=H.length();_t*=Math.tan(n.object.fov/2*Math.PI/180),X(2*Re*_t/J.clientHeight,n.object.matrix),V(2*Ve*_t/J.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(Re*(n.object.right-n.object.left)/n.object.zoom/J.clientWidth,n.object.matrix),V(Ve*(n.object.top-n.object.bottom)/n.object.zoom/J.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ce(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(H,me){if(!n.zoomToCursor)return;w=!0;let Re=n.domElement.getBoundingClientRect(),Ve=H-Re.left,J=me-Re.top,kt=Re.width,_t=Re.height;R.x=Ve/kt*2-1,R.y=-(J/_t)*2+1,E.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(H){return Math.max(n.minDistance,Math.min(n.maxDistance,H))}function q(H){u.set(H.clientX,H.clientY)}function ee(H){K(H.clientX,H.clientX),y.set(H.clientX,H.clientY)}function Z(H){f.set(H.clientX,H.clientY)}function x(H){d.set(H.clientX,H.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);let me=n.domElement;Y(2*Math.PI*p.x/me.clientHeight),P(2*Math.PI*p.y/me.clientHeight),u.copy(d),n.update()}function M(H){g.set(H.clientX,H.clientY),v.subVectors(g,y),v.y>0?ce(z(v.y)):v.y<0&&ne(z(v.y)),y.copy(g),n.update()}function L(H){_.set(H.clientX,H.clientY),m.subVectors(_,f).multiplyScalar(n.panSpeed),te(m.x,m.y),f.copy(_),n.update()}function U(H){K(H.clientX,H.clientY),H.deltaY<0?ne(z(H.deltaY)):H.deltaY>0&&ce(z(H.deltaY)),n.update()}function A(H){let me=!1;switch(H.code){case n.keys.UP:H.ctrlKey||H.metaKey||H.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:H.ctrlKey||H.metaKey||H.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:H.ctrlKey||H.metaKey||H.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:H.ctrlKey||H.metaKey||H.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(-n.keyPanSpeed,0),me=!0;break}me&&(H.preventDefault(),n.update())}function N(H){if(T.length===1)u.set(H.pageX,H.pageY);else{let me=zt(H),Re=.5*(H.pageX+me.x),Ve=.5*(H.pageY+me.y);u.set(Re,Ve)}}function C(H){if(T.length===1)f.set(H.pageX,H.pageY);else{let me=zt(H),Re=.5*(H.pageX+me.x),Ve=.5*(H.pageY+me.y);f.set(Re,Ve)}}function I(H){let me=zt(H),Re=H.pageX-me.x,Ve=H.pageY-me.y,J=Math.sqrt(Re*Re+Ve*Ve);y.set(0,J)}function F(H){n.enableZoom&&I(H),n.enablePan&&C(H)}function k(H){n.enableZoom&&I(H),n.enableRotate&&N(H)}function G(H){if(T.length==1)d.set(H.pageX,H.pageY);else{let Re=zt(H),Ve=.5*(H.pageX+Re.x),J=.5*(H.pageY+Re.y);d.set(Ve,J)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);let me=n.domElement;Y(2*Math.PI*p.x/me.clientHeight),P(2*Math.PI*p.y/me.clientHeight),u.copy(d)}function S(H){if(T.length===1)_.set(H.pageX,H.pageY);else{let me=zt(H),Re=.5*(H.pageX+me.x),Ve=.5*(H.pageY+me.y);_.set(Re,Ve)}m.subVectors(_,f).multiplyScalar(n.panSpeed),te(m.x,m.y),f.copy(_)}function Q(H){let me=zt(H),Re=H.pageX-me.x,Ve=H.pageY-me.y,J=Math.sqrt(Re*Re+Ve*Ve);g.set(0,J),v.set(0,Math.pow(g.y/y.y,n.zoomSpeed)),ce(v.y),y.copy(g);let kt=(H.pageX+me.x)*.5,_t=(H.pageY+me.y)*.5;K(kt,_t)}function j(H){n.enableZoom&&Q(H),n.enablePan&&S(H)}function W(H){n.enableZoom&&Q(H),n.enableRotate&&G(H)}function oe(H){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(H.pointerId),n.domElement.addEventListener("pointermove",he),n.domElement.addEventListener("pointerup",de)),Be(H),H.pointerType==="touch"?Pe(H):fe(H))}function he(H){n.enabled!==!1&&(H.pointerType==="touch"?ct(H):Ee(H))}function de(H){Ie(H),T.length===0&&(n.domElement.releasePointerCapture(H.pointerId),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",de)),n.dispatchEvent(Pu),s=i.NONE}function fe(H){let me;switch(H.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case Ln.DOLLY:if(n.enableZoom===!1)return;ee(H),s=i.DOLLY;break;case Ln.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enablePan===!1)return;Z(H),s=i.PAN}else{if(n.enableRotate===!1)return;q(H),s=i.ROTATE}break;case Ln.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enableRotate===!1)return;q(H),s=i.ROTATE}else{if(n.enablePan===!1)return;Z(H),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(lc)}function Ee(H){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;x(H);break;case i.DOLLY:if(n.enableZoom===!1)return;M(H);break;case i.PAN:if(n.enablePan===!1)return;L(H);break}}function ge(H){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(H.preventDefault(),n.dispatchEvent(lc),U(H),n.dispatchEvent(Pu))}function ve(H){n.enabled===!1||n.enablePan===!1||A(H)}function Pe(H){switch(vi(H),T.length){case 1:switch(n.touches.ONE){case Gi.ROTATE:if(n.enableRotate===!1)return;N(H),s=i.TOUCH_ROTATE;break;case Gi.PAN:if(n.enablePan===!1)return;C(H),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Gi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(H),s=i.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;k(H),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(lc)}function ct(H){switch(vi(H),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;G(H),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;S(H),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(H),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(H),n.update();break;default:s=i.NONE}}function ye(H){n.enabled!==!1&&H.preventDefault()}function Be(H){T.push(H.pointerId)}function Ie(H){delete O[H.pointerId];for(let me=0;me<T.length;me++)if(T[me]==H.pointerId){T.splice(me,1);return}}function vi(H){let me=O[H.pointerId];me===void 0&&(me=new se,O[H.pointerId]=me),me.set(H.pageX,H.pageY)}function zt(H){let me=H.pointerId===T[0]?T[1]:T[0];return O[me]}n.domElement.addEventListener("contextmenu",ye),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",de),n.domElement.addEventListener("wheel",ge,{passive:!1}),this.update()}};var Oe={width:11.416666666666666,depth:11.666666666666666,height:9,wall:.18,powderWidth:3.875,powderLength:7.375},Lr={depth:14+3/12,northZ:Oe.depth/2,southZ:Oe.depth/2+14+3/12},Yt={benchDepth:1.6,benchLength:3,benchCenterZ:2.5,closetDepth:2},sn={externalWidth:3,externalDepth:5,powderDoorWidth:2+4/12},_e={bathSouthPixelY:180,finishedWidth:11,finishedDepth:6.5,partitionThickness:.375,exteriorWallThickness:.68,entryDoorWidth:2+10.5/12,entryDoorGapFromVanity:.25,vanityWidth:3,vanityDepth:1.75,showerWidth:5,showerDepth:3.5,showerReturnThickness:.375,showerDoorWidth:2.5,benchWidth:3},ms={closetLength:4.5,benchWidth:3,benchDepth:1.6,mirrorWidth:4,mirrorHeight:5},qn={scaleX:9.02,scaleZ:9.08,originX:215.5,originY:174.5},za={wallPixelY:260,basementScreenWestPixelX:249,basementScreenEndPixelX:282,workNookWallPixelX:382,beamBottom:7.85,postSize:.84,wallThickness:.42},pi={centerPixelX:356,centeredPixelY:304,bayPixelY:309,topWidth:3.5,topLength:5.5,baseWidth:3,baseLength:5,counterHeight:3},vt={clearOpeningWidth:5,approximateSideWall:3,doorHeight:7.05},Qe=r=>(r-qn.originX)/qn.scaleX,it=r=>(r-qn.originY)/qn.scaleZ,Wi=[{id:3,side:"east",interface:"retained-den-doors",retainDenFoyerDoors:!0,rejected:!0,title:"Rejected compact 3 x 5",short:"Door collision and inadequate clearance margin",status:"REJECTED - DOOR / CLEARANCE CONFLICT",description:"This comparison records why the nominal 3 ft x 5 ft external powder-room footprint is not being developed. Although it retains the five-foot den doors and surrounding wall, the east door leaf conflicts with the powder-room entrance and the approximately 2 ft 7 in clear interior provides no dependable fixture or code-compliance margin."},{id:5,side:"east",interface:"open",title:"East wall + full-width opening",short:"Former wall removed to ceiling beam",status:"BEST TO DEVELOP",description:"The den doors and the entire former den-to-foyer wall are removed. Only a ceiling beam remains across the opening beside the new powder room."},{id:6,side:"west",interface:"open",title:"West wall + full-width opening",short:"Former wall removed to ceiling beam",status:"WEST-WALL MIRROR",description:"The den doors and the entire former den-to-foyer wall are removed. Only a ceiling beam remains across the opening beside the square-cornered powder room."},{id:7,side:"north",interface:"north-bath",title:"North bath + front built-in wall",short:"Bathroom-backed storage, bench and left mirror",status:"NORTH-END BUILT-IN WALL",description:"The north bathroom is approximately 11 ft x 6 ft 6 in finished clear and retains the three-panel window. The initial half bath uses a 60 in south-wall vanity in the future shower footprint and removable east-wall storage. The future full bath swaps in the west-corner 60 x 42 in shower and permanent 36 in east-wall vanity. The east-facing toilet and outward-swinging entrance remain fixed. A nearly full-width millwork wall backs onto the bathroom and combines mirrored coat storage, an integrated sitting bench, the doorway and a utility cabinet."},{id:8,side:"north",interface:"north-bath",title:"North bath + left-wall closet",short:"Closet left; bench and frameless mirror ahead",status:"LEFT-WALL STORAGE TEST",description:"The approximately 11 ft x 6 ft 6 in phased bathroom is identical to Option 7: initial 60 in south-wall vanity plus removable east storage, later replaced by the 60 x 42 in shower plus permanent east-wall vanity. The coat closet moves to the left wall in place of the large mirror. A three-foot sitting bench and frameless real-time mirror occupy the clear partition run west of the entrance."}];function Em(r){let e=document.createElement("canvas");e.width=640,e.height=112;let t=e.getContext("2d");t.fillStyle="rgba(9, 83, 96, 0.92)",t.roundRect(4,4,632,104,18),t.fill(),t.fillStyle="#ffffff",t.font="700 38px Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(r,320,57);let n=new ui(e);n.colorSpace=Ke;let i=new Ma(new ss({map:n,transparent:!0,depthTest:!1}));return i.scale.set(4.7,.82,1),i.renderOrder=20,i}function Iu(r,e,t,n){let i=new jn({color:482153,depthTest:!1,transparent:!0,opacity:.95}),s=new hi(new $e().setFromPoints(e),i);s.renderOrder=19,r.add(s);let a=Em(t);a.position.copy(n),r.add(a)}function xt(r,e,t,n,i){Iu(r,[new b(e,.22,n),new b(t,.22,n),new b(e,.22,n-.25),new b(e,.22,n+.25),new b(t,.22,n-.25),new b(t,.22,n+.25)],i,new b((e+t)/2,.22+.3,n))}function Ut(r,e,t,n,i){Iu(r,[new b(e,.22,t),new b(e,.22,n),new b(e-.25,.22,t),new b(e+.25,.22,t),new b(e-.25,.22,n),new b(e+.25,.22,n)],i,new b(e,.22+.3,(t+n)/2))}function cc(r,e,t="existing",n=null,i="vertical",s=!1){let a=Qe(164),o=Qe(267),c=it(116),l=it(228);xt(e,a,o,l-.45,`Den width 11'5"`),Ut(e,a+.38,c,l,`Den depth 11'8"`),xt(e,Qe(185),Qe(244),c+.38,`Window 6'6\xBD"`);let h=r.id===3?o-sn.externalWidth:(a+o+vt.clearOpeningWidth)/2;if(xt(e,h-vt.clearOpeningWidth,h,l+.48,`Existing opening 5'0" clear`),t==="open"&&xt(e,Qe(za.basementScreenEndPixelX),Qe(za.workNookWallPixelX),it(za.wallPixelY)-.62,`Kitchen opening span ~11'1"`),t==="open"&&n){let E=Qe(pi.centerPixelX),R=it(n==="bay"?pi.bayPixelY:pi.centeredPixelY),w=i==="horizontal",T=w?pi.topLength:pi.topWidth,O=w?pi.topWidth:pi.topLength;xt(e,E-T/2,E+T/2,R+O/2+.38,`Island ${w?`5'6" long`:`3'6" wide`}`),Ut(e,E+T/2+.38,R-O/2,R+O/2,`Island ${w?`3'6" deep`:`5'6" long`}`)}if(r.id===3){let E=o-sn.externalWidth,R=l-sn.externalDepth;xt(e,E,o,R-.38,`Powder external 3'0"`),Ut(e,E-.34,R,l,`Powder external 5'0"`);return}if(r.interface==="north-bath"){let E=it(_e.bathSouthPixelY),R=a+_e.exteriorWallThickness/2,w=o-_e.exteriorWallThickness/2,T=c+_e.exteriorWallThickness/2,O=E-_e.partitionThickness/2;if(xt(e,R,w,O-.34,`Bathroom clear 11'0"`),Ut(e,w-.3,T,O,`Bathroom clear 6'6"`),s){let B=R+_e.showerWidth,z=O-_e.showerDepth,Y=B+_e.showerReturnThickness,P=w-_e.vanityDepth;xt(e,R,B,z+.28,'Shower clear 60"'),Ut(e,R+.3,z,O,'Shower clear 42"'),Ut(e,B+.42,T,z,'Exit landing 36"'),xt(e,Y,P,O-.78,'Central aisle ~46\xBD"')}else{let B=O-_e.vanityDepth,z=w-1.5,Y=O-.34,P=Y-_e.vanityWidth;xt(e,R,R+_e.showerWidth,B+.26,'Initial vanity 60"'),Ut(e,R+.3,B,O,'Vanity depth 21"'),xt(e,z,w,P-.3,'Storage depth 18"'),Ut(e,w-.3,P,Y,'Storage width 36"')}if(r.id===7){let B=E+Yt.closetDepth,P=w-_e.vanityDepth-_e.entryDoorGapFromVanity-_e.entryDoorWidth-.16,X=P-_e.benchWidth,V=X-.08;xt(e,R,w,B+.7,`Built-in wall ~11'0"`),Ut(e,o-.38,E,B,`Depth 2'0"`),xt(e,a,V,B+.08,`Closet ~3'1"`),xt(e,X,P,B+1.32,`Bench 3'0"`),Ut(e,a+.95,.7,5.2,`Wall mirror 4'6"`)}else{let z=.7+ms.closetLength,P=w-_e.vanityDepth-_e.entryDoorGapFromVanity-_e.entryDoorWidth,V=(a+Yt.closetDepth+P)/2,te=V-ms.benchWidth/2,ce=V+ms.benchWidth/2,ne=E+ms.benchDepth;Ut(e,a+Yt.closetDepth+.3,.7,z,`Left closet 4'6"`),xt(e,a,a+Yt.closetDepth,z+.3,`Depth 2'0"`),xt(e,te,ce,ne+.4,`Bench 3'0"`),Ut(e,o-.55,E,ne,`Bench depth 1'7"`)}return}let u=r.side==="east"?o:a,d=r.side==="east"?u-Oe.powderWidth:u+Oe.powderWidth,p=l-Oe.powderLength;xt(e,Math.min(d,u),Math.max(d,u),l-.38,`Powder overall 3'10\xBD"`),Ut(e,d+(r.side==="east"?-.32:.32),p,l,`Powder overall 7'4\xBD"`);let f=r.side==="east"?a:o,_=r.side==="east"?1:-1,m=Yt.benchCenterZ-Yt.benchLength/2,y=Yt.benchCenterZ+Yt.benchLength/2;Ut(e,f+_*(Yt.benchDepth+.3),m,y,`Bench 3'0"`);let g=c+.18,v=m-.12;Ut(e,f+_*(Yt.closetDepth+.3),g,v,`Coat closet 7'1"`),xt(e,Math.min(f,f+_*Yt.closetDepth),Math.max(f,f+_*Yt.closetDepth),v-.3,`Depth 2'0"`)}var Ir=class r extends Ae{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new ot;let n=this,i=t.color!==void 0?new be(t.color):new be(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||r.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new It,u=new b,d=new b,p=new b,f=new Ce,_=new b(0,0,-1),m=new je,y=new b,g=new b,v=new je,E=new Ce,R=this.camera,w=new fn(s,a,{samples:l,type:Ui}),T=new gn({name:c.name!==void 0?c.name:"unspecified",uniforms:rc.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=w.texture,T.uniforms.color.value=i,T.uniforms.textureMatrix.value=E,this.material=T,this.onBeforeRender=function(O,B,z){if(d.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(z.matrixWorld),f.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(f),y.subVectors(d,p),y.dot(u)>0)return;y.reflect(u).negate(),y.add(d),f.extractRotation(z.matrixWorld),_.set(0,0,-1),_.applyMatrix4(f),_.add(p),g.subVectors(d,_),g.reflect(u).negate(),g.add(d),R.position.copy(y),R.up.set(0,1,0),R.up.applyMatrix4(f),R.up.reflect(u),R.lookAt(g),R.far=z.far,R.updateMatrixWorld(),R.projectionMatrix.copy(z.projectionMatrix),E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),E.multiply(R.projectionMatrix),E.multiply(R.matrixWorldInverse),E.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(R.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let Y=R.projectionMatrix;v.x=(Math.sign(m.x)+Y.elements[8])/Y.elements[0],v.y=(Math.sign(m.y)+Y.elements[9])/Y.elements[5],v.z=-1,v.w=(1+Y.elements[10])/Y.elements[14],m.multiplyScalar(2/m.dot(v)),Y.elements[2]=m.x,Y.elements[6]=m.y,Y.elements[10]=m.z+1-o,Y.elements[14]=m.w,n.visible=!1;let P=O.getRenderTarget(),X=O.xr.enabled,V=O.shadowMap.autoUpdate;O.xr.enabled=!1,O.shadowMap.autoUpdate=!1,O.setRenderTarget(w),O.state.buffers.depth.setMask(!0),O.autoClear===!1&&O.clear(),O.render(B,R),O.xr.enabled=X,O.shadowMap.autoUpdate=V,O.setRenderTarget(P);let te=z.viewport;te!==void 0&&O.state.viewport(te),n.visible=!0},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()}}};Ir.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var St={width:11.416666666666666,depth:11.666666666666666,height:9,wall:.18,powderWidth:3.875,powderLength:7.375},Sg={depth:14+3/12,northZ:St.depth/2,southZ:St.depth/2+14+3/12},Xi={benchDepth:1.6,benchLength:3,benchCenterZ:2.5,closetDepth:2},Eg={externalWidth:3,externalDepth:5,powderDoorWidth:2+4/12},lt={bathSouthPixelY:180,finishedWidth:11,finishedDepth:6.5,partitionThickness:.375,exteriorWallThickness:.68,entryDoorWidth:2+10.5/12,entryDoorGapFromVanity:.25,vanityWidth:3,vanityDepth:1.75,showerWidth:5,showerDepth:3.5,showerReturnThickness:.375,showerDoorWidth:2.5,benchWidth:3},dt={closetLength:4.5,benchWidth:3,benchDepth:1.6,mirrorWidth:4,mirrorHeight:5},Zn={scaleX:9.02,scaleZ:9.08,originX:215.5,originY:174.5},qt={wallPixelY:260,basementScreenWestPixelX:249,basementScreenEndPixelX:282,workNookWallPixelX:382,beamBottom:7.85,postSize:.84,wallThickness:.42},Ot={centerPixelX:356,centeredPixelY:304,bayPixelY:309,topWidth:3.5,topLength:5.5,baseWidth:3,baseLength:5,counterHeight:3};var xe=r=>(r-Zn.originX)/Zn.scaleX,we=r=>(r-Zn.originY)/Zn.scaleZ;function wm(r){let{meshBox:e,mudroomGroup:t,cabinetInteriorMaterial:n,cabinetMaterial:i,hardwareMaterial:s,oakMaterial:a}=r,o=xe(164),c=xe(267),l=we(lt.bathSouthPixelY),u=xe(267)-lt.exteriorWallThickness/2-lt.vanityDepth-lt.entryDoorGapFromVanity,d=u-lt.entryDoorWidth,p=Xi.closetDepth,f=l+p,_=l+p/2,m=8.15,y=.14,g=.08,v=new ki({color:12110800,roughness:.16,metalness:.55,transparent:!0,opacity:.82}),E=d-.16,R=E-lt.benchWidth,w=R-g,T=w-o,O=(o+w)/2;e([T,y,p],[O,y/2,_],n,t),e([T,y,p],[O,m,_],i,t),e([y,m,p],[o+y/2,m/2,_],i,t),e([y,m,p],[w-y/2,m/2,_],i,t),e([T,m,y],[O,m/2,l+y/2],n,t);let B=.05,z=(T-B*3)/2;for(let A=0;A<2;A++){let N=o+B+z/2+A*(z+B);e([z,m-.35,.1],[N,m/2,f],v,t);let C=A===0?N+z*.37:N-z*.37;e([.07,.7,.12],[C,4.15,f+.08],s,t)}let Y=new Ae(new jt(.055,.055,T-.35,16),s);Y.rotation.z=Math.PI/2,Y.position.set(O,5.55,l+1.02),t.add(Y);let P=(R+E)/2;e([lt.benchWidth,y,p],[P,.18,_],i,t),e([lt.benchWidth,y,p],[P,.72,_],i,t),e([lt.benchWidth+.08,.2,p+.08],[P,1.48,_],a,t),e([lt.benchWidth,4.75,.12],[P,3.86,l+.08],i,t),e([lt.benchWidth,.16,p],[P,6.26,_],a,t),e([y,6.34,p],[R,3.17,_],i,t),e([y,6.34,p],[E,3.17,_],i,t);for(let A of[-.82,0,.82])e([.18,.18,.16],[P+A,4.48,l+.18],s,t);let X=m-6.34;e([lt.benchWidth,X,y],[P,6.34+X/2,l+y/2],n,t);for(let A of[-lt.benchWidth/4,lt.benchWidth/4])e([lt.benchWidth/2-.05,X-.12,.1],[P+A,6.34+X/2,f],i,t);let V=u-d;e([y,7.05,p],[d+y/2,3.525,_],i,t),e([y,7.05,p],[u-y/2,3.525,_],i,t),e([V,m-7.05,p],[(d+u)/2,7.05+(m-7.05)/2,_],i,t);let te=u+g,ce=c-te,ne=(te+c)/2;ce>.35&&(e([ce,y,p],[ne,y/2,_],n,t),e([ce,y,p],[ne,m,_],i,t),e([y,m,p],[te+y/2,m/2,_],i,t),e([y,m,p],[c-y/2,m/2,_],i,t),e([ce,m,y],[ne,m/2,l+y/2],n,t),e([ce-.1,m-.3,.1],[ne,m/2,f],i,t),e([.07,.7,.12],[te+.22,4.15,f+.08],s,t));let K=4.5,ie=6.5,q=2.95,ee=3.85,Z=o+.24,x=Math.min(window.devicePixelRatio||1,2),M=new Ir(new Nt(K,ie),{clipBias:.003,textureWidth:Math.round(512*x),textureHeight:Math.round(768*x),color:10135464});M.rotation.y=Math.PI/2,M.position.set(Z,ee,q),M.renderOrder=2,t.add(M);let L=.12,U=.1;for(let A of[q-K/2,q+K/2])e([U,ie+L*2,L],[Z+.02,ee,A],a,t);for(let A of[ee-ie/2,ee+ie/2])e([U,L,K+L*2],[Z+.02,A,q],a,t)}function Tm(r){let{meshBox:e,mudroomGroup:t,cabinetInteriorMaterial:n,cabinetMaterial:i,hardwareMaterial:s,oakMaterial:a}=r,o=xe(164),c=xe(267),l=we(lt.bathSouthPixelY),d=c-lt.exteriorWallThickness/2-lt.vanityDepth-lt.entryDoorGapFromVanity-lt.entryDoorWidth,p=Xi.closetDepth,f=.7,_=f+dt.closetLength,m=(f+_)/2,y=o+p/2,g=o+p,v=8.15,E=.14,R=new ki({color:12110800,roughness:.16,metalness:.55,transparent:!0,opacity:.82});e([p,E,dt.closetLength],[y,E/2,m],n,t),e([p,E,dt.closetLength],[y,v,m],i,t),e([p,v,E],[y,v/2,f],i,t),e([p,v,E],[y,v/2,_],i,t),e([E,v,dt.closetLength],[o+E/2,v/2,m],n,t);let w=.05,T=(dt.closetLength-w*3)/2;for(let ce=0;ce<2;ce++){let ne=f+w+T/2+ce*(T+w);e([.1,v-.35,T],[g,v/2,ne],R,t);let K=ce===0?ne+T*.35:ne-T*.35;e([.12,.7,.07],[g+.08,4.15,K],s,t)}let O=new Ae(new jt(.055,.055,dt.closetLength-.35,16),s);O.rotation.x=Math.PI/2,O.position.set(o+1.02,5.55,m),t.add(O);let B=(g+d)/2,z=B-dt.benchWidth/2,Y=B+dt.benchWidth/2,P=l+dt.benchDepth/2;e([dt.benchWidth,.16,dt.benchDepth],[B,.18,P],i,t),e([dt.benchWidth,.16,dt.benchDepth],[B,.72,P],i,t),e([dt.benchWidth+.08,.2,dt.benchDepth+.08],[B,1.48,P],a,t),e([E,.72,dt.benchDepth],[z,.36,P],i,t),e([E,.72,dt.benchDepth],[Y,.36,P],i,t);let X=B,V=Math.min(window.devicePixelRatio||1,2),te=new Ir(new Nt(dt.mirrorWidth,dt.mirrorHeight),{clipBias:.003,textureWidth:Math.round(512*V),textureHeight:Math.round(640*V),color:10135464});te.position.set(X,4.35,l+.2),te.renderOrder=2,t.add(te)}function Du(r,e){let{meshBox:t,mudroomGroup:n,cabinetInteriorMaterial:i,cabinetMaterial:s,hardwareMaterial:a,oakMaterial:o}=e;if(r.id===7){wm(e);return}if(r.id===8){Tm(e);return}let c=r.side==="east"?"west":"east",l=c==="west"?xe(164):xe(267),h=c==="west"?1:-1,u=Xi.benchDepth,d=Xi.benchLength,p=Xi.benchCenterZ,f=l+h*u/2,_=l+h*u,m=p+d/2,y=p-d/2;t([u,.16,d],[f,.18,p],s,n),t([u,.16,d],[f,.72,p],s,n),t([.14,.72,d],[_,.36,p],s,n),t([u+.08,.2,d+.08],[f,1.48,p],o,n),t([.12,4.75,d],[l+h*.08,3.86,p],s,n),t([u-.08,.16,d+.08],[f,6.26,p],o,n);for(let V of[-.82,0,.82])t([.16,.18,.18],[l+h*.18,4.48,p+V],a,n);let g=Xi.closetDepth,v=y-.12,E=we(116)+.18,R=v-E,w=(v+E)/2,T=l+h*g/2,O=l+h*g,B=8.15,z=.14;t([g,z,R],[T,z/2,w],i,n),t([g,z,R],[T,B,w],s,n),t([g,B,z],[T,B/2,E],s,n),t([g,B,z],[T,B/2,v],s,n),t([z,B,R],[l+h*z/2,B/2,w],i,n);let Y=.05,P=(R-Y*3)/2;for(let V=0;V<2;V++){let te=E+Y+P/2+V*(P+Y);t([.13,B-.3,P],[O,B/2,te],s,n);let ce=V===0?te+P*.37:te-P*.37;t([.12,.78,.08],[O+h*.09,4.25,ce],a,n)}let X=new Ae(new jt(.055,.055,R-.35,16),a);X.rotation.x=Math.PI/2,X.position.set(l+h*1.02,5.55,w),n.add(X)}function Am(r,e,t,n,i,s,a){let{meshBox:o}=a,c=.17;o([c,n,.22],[r,n/2,t],i,s),o([c,n,.22],[e,n/2,t],i,s),o([e-r+c,c,.22],[(r+e)/2,n,t],i,s)}function Rm(r,e,t,n,i,s){var d,p;let{meshBox:a,powderGroup:o,whiteTrimMaterial:c}=s,l=Math.sign(t)||1,h=Math.abs(t)/qn.scaleX,u=new We;return a([h,6.9,.13],[l*h/2,3.45,0],(d=i.material)!=null?d:c,u),u.position.set(Qe(e),0,it(r)),u.rotation.y=n,((p=i.parent)!=null?p:o).add(u),u}function Cm(r){let{meshBox:e,powderGroup:t,fixtureGroup:n,showerGroup:i,initialHalfBathGroup:s,powderWallMaterial:a,woodMaterial:o,whiteTrimMaterial:c,tileMaterial:l,porcelainMaterial:h,oakMaterial:u,cabinetMaterial:d,glassMaterial:p,hardwareMaterial:f,addWallZSegment:_}=r,m=Qe(164),y=Qe(267),g=it(116),v=it(_e.bathSouthPixelY),E=m+_e.exteriorWallThickness/2,R=y-_e.exteriorWallThickness/2,w=g+_e.exteriorWallThickness/2,T=v-_e.partitionThickness/2,O=R-_e.vanityDepth-_e.entryDoorGapFromVanity,B=O-_e.entryDoorWidth;_(m,B,v,0,Oe.height,a,t,_e.partitionThickness),_(B,O,v,7.05,Oe.height,a,t,_e.partitionThickness),_(O,y,v,0,Oe.height,a,t,_e.partitionThickness),Am(B,O,v,7.05,o,t,r);let z=O*qn.scaleX+qn.originX,Y=Rm(_e.bathSouthPixelY,z,-_e.entryDoorWidth*qn.scaleX,Math.PI/2,{material:c,parent:t},r);Y.userData.openAngle=Math.PI/2,e([R-E,.05,T-w],[(E+R)/2,.045,(w+T)/2],l,n,{cast:!1});let P=E+_e.showerWidth,X=T-_e.showerDepth;e([_e.showerWidth,.12,_e.showerDepth],[E+_e.showerWidth/2,.08,X+_e.showerDepth/2],l,i,{cast:!1}),e([_e.showerReturnThickness,Oe.height,_e.showerDepth],[P+_e.showerReturnThickness/2,Oe.height/2,X+_e.showerDepth/2],a,i),e([_e.showerDoorWidth,6.55,.08],[E+_e.showerDoorWidth/2,3.34,X],p,i,{cast:!1});let V=new We;e([_e.showerDoorWidth,6.55,.08],[-_e.showerDoorWidth/2,3.34,0],p,V,{cast:!1}),e([.07,1.05,.12],[-.3,3.38,-.08],f,V,{cast:!1}),V.position.set(P,0,X),V.rotation.y=-Math.PI/2,i.add(V),e([.08,.72,.55],[P-.05,3.55,T-.82],f,i,{cast:!1});let te=new Ae(new jt(.2,.2,.08,24),f);te.rotation.z=Math.PI/2,te.position.set(P-.26,6.55,T-.82),i.add(te);let ce=new We;e([1.25,.95,.38],[0,.7,-.62],h,ce);let ne=new Ae(new Pn(.62,30,18),h);ne.scale.set(1,.42,1.28),ne.position.set(0,.54,.16),ne.castShadow=!0,ce.add(ne);let K=new Ae(new zi(.37,.07,12,32),new Ye({color:12503241,roughness:.4}));K.rotation.x=Math.PI/2,K.scale.z=1.2,K.position.set(0,.81,.17),ce.add(K),ce.rotation.y=Math.PI/2,ce.position.set(E+1.18,0,w+1.5),n.add(ce);let ie=R-_e.vanityDepth/2,q=T-_e.vanityWidth/2-.34,ee=new Ye({color:15065559,roughness:.34});e([_e.vanityDepth,2.45,_e.vanityWidth],[ie,1.225,q],u,i),e([_e.vanityDepth+.1,.12,_e.vanityWidth+.12],[ie,2.52,q],ee,i);let Z=new Ae(new Pn(.46,28,16),h);Z.scale.set(.82,.23,1.45),Z.position.set(ie-.08,2.59,q),i.add(Z);let x=_e.showerWidth,M=_e.vanityDepth,L=E+x/2,U=T-M/2;e([x,2.45,M],[L,1.225,U],u,s),e([x+.1,.12,M+.1],[L,2.52,U],ee,s);let A=new Ae(new Pn(.46,28,16),h);A.scale.set(1.45,.23,.82),A.position.set(L,2.59,U-.08),s.add(A),e([4.6,3.25,.06],[L,4.65,T-.11],p,s,{cast:!1});let N=_e.vanityWidth,C=1.5,I=8,F=R-C/2,k=q;e([C,I,N],[F,I/2,k],d,s);for(let S of[-N/4,N/4])e([.08,I-.28,N/2-.08],[R-C-.04,I/2,k+S],u,s),e([.12,.72,.07],[R-C-.1,4.05,k+S*.25],f,s,{cast:!1});let G=new Ae(new Nt(Qe(244)-Qe(185),4.25),new nn({color:14282223,transparent:!0,opacity:.46,side:Vi}));return G.rotation.y=Math.PI,G.position.set((Qe(185)+Qe(244))/2,4.82,g+.1),n.add(G),{door:Y,shower:i}}function Pm(r,e){let{meshBox:t,powderGroup:n,fixtureGroup:i,powderWallMaterial:s,woodMaterial:a,tileMaterial:o,porcelainMaterial:c,oakMaterial:l,addWallZSegment:h,addWallXWithDoorOpening:u}=e,d=Qe(267),p=d-sn.externalWidth,f=it(228),_=f-sn.externalDepth,m=(p+d)/2;t([sn.externalWidth-.18,.045,sn.externalDepth-.18],[m,.045,(_+f)/2],o,i,{cast:!1}),h(p,d,_,0,Oe.height,s,n,.375);let y=f-.28,g=y-sn.powderDoorWidth;u(p,_,f,[g,y]),Uu(r.side,p,g,y,e);let v=new We;t([1.15,.9,.34],[0,.67,-.5],c,v);let E=new Ae(new Pn(.56,30,18),c);E.scale.set(1,.42,1.22),E.position.set(0,.52,.04),E.castShadow=!0,v.add(E);let R=new Ae(new zi(.34,.065,12,32),new Ye({color:12503241,roughness:.4}));R.rotation.x=Math.PI/2,R.scale.z=1.18,R.position.set(0,.77,.03),v.add(R),v.position.set(m,0,_+1.1),i.add(v);let w=1.6,T=.82;t([w,2.3,T],[m,1.15,f-.58],l,i),t([w+.1,.15,T+.1],[m,2.37,f-.58],c,i);let O=new Ae(new Pn(.36,24,14),c);return O.scale.set(1.55,.2,.76),O.position.set(m,2.47,f-.6),i.add(O),{}}function Nu(r,e){let{meshBox:t,powderGroup:n,fixtureGroup:i,powderWallMaterial:s,woodMaterial:a,tileMaterial:o,addWallZSegment:c,addWallXWithDoorOpening:l}=e;if(r.id===3)return Pm(r,e);if(r.interface==="north-bath")return Cm(e);let h=r.side==="east"?Qe(267):Qe(164),u=r.side==="east"?h-Oe.powderWidth:h+Oe.powderWidth,d=it(228),p=d-Oe.powderLength,f=(h+u)/2;t([Oe.powderWidth-.18,.045,Oe.powderLength-.18],[f,.045,(p+d)/2],o,i,{cast:!1}),l(u,p,d,[1.18,3.9]),Uu(r.side,u,1.18,3.9,e),c(Math.min(u,h),Math.max(u,h),p,0,Oe.height,s,n,.375),c(Math.min(u,h),Math.max(u,h),d,0,Oe.height,s,n,.375);let _=u+(r.side==="east"?-.21:.21),m=Oe.powderLength,y=p+m/2;t([.12,.34,m],[_,.17,y],a,n),t([.12,.27,m],[_,Oe.height-.14,y],a,n),Lm(r,f,u,h,p,d,e)}function Uu(r,e,t,n,i){let{meshBox:s,powderGroup:a,powderWallMaterial:o,woodMaterial:c}=i,l=n-t-.12,u=t-l/2+.32;s([.14,6.85,l],[e,3.425,u],o,a);let d=e+(r==="east"?-.1:.1);s([.1,.12,l*2+.15],[d,6.98,t],c,a)}function Lm(r,e,t,n,i,s,a){let{meshBox:o,fixtureGroup:c,porcelainMaterial:l,oakMaterial:h,wallMaterial:u,glassMaterial:d}=a,p=new We;o([1.25,.95,.38],[0,.7,-.55],l,p);let f=new Ae(new Pn(.62,30,18),l);f.scale.set(1,.42,1.25),f.position.set(0,.54,.04),f.castShadow=!0,p.add(f);let _=new Ae(new zi(.37,.07,12,32),new Ye({color:12503241,roughness:.4}));if(_.rotation.x=Math.PI/2,_.scale.z=1.2,_.position.set(0,.81,.03),p.add(_),p.position.set(e,0,i+1.25),c.add(p),r.interface==="foyer"){let m=r.side==="east"?n-.55:n+.55,y=o([.82,2.75,2],[m,1.37,s-2],h,c),g=o([.96,.18,2.12],[m,2.78,s-2],l,c);y.castShadow=g.castShadow=!0}else{let m=o([2.15,2.65,1.48],[e,1.325,s-.92],h,c),y=o([2.28,.17,1.58],[e,2.72,s-.92],l,c);m.castShadow=y.castShadow=!0}}var Rt=Object.freeze({EXISTING:"existing",OPEN:"open"});function Ou(r,e){let{meshBox:t,addPlanHorizontalWall:n,architectureGroup:i,kitchenBeamGroup:s,kitchenPostGroup:a,wallMaterial:o,whiteTrimMaterial:c}=e,l=qt.wallPixelY,h=qt.basementScreenWestPixelX,u=qt.basementScreenEndPixelX,d=qt.workNookWallPixelX;if(r!==Rt.OPEN){n(l,h,d,[],{thickness:qt.wallThickness,trim:c});return}n(l,h,u,[],{thickness:qt.wallThickness,trim:c});let p=xe(u),f=xe(d),_=we(l),m=St.height-qt.beamBottom,y=t([qt.postSize,qt.beamBottom,qt.postSize],[p,qt.beamBottom/2,_],o,a);y.name="Kitchen-dining opening - basement-side post";let g=t([f-p,m,.76],[(p+f)/2,qt.beamBottom+m/2,_],o,s);g.name="Kitchen-dining opening - conceptual support beam"}function Bu(r){let{meshBox:e,addWallZSegment:t,addWallXSegment:n,architectureGroup:i,planUnderlayGroup:s,kitchenBeamGroup:a,kitchenPostGroup:o,kitchenFurnitureGroup:c,wallMaterial:l,woodMaterial:h,whiteTrimMaterial:u,floorMaterial:d,tileMaterial:p,glassMaterial:f,stairMaterial:_,oakMaterial:m,requestRender:y}=r;function g(Z,x,M,L,U,A){let N=M-Z,C=L-x,I=Math.hypot(N,C),F=Math.atan2(N,C);return e([.375,St.height,I],[(Z+M)/2,St.height/2,(x+L)/2],U,A,{rotationY:F})}function v(Z,x,M={}){var Q,j,W,oe;let L=x.x-Z.x,U=x.y-Z.y,A=Math.hypot(L,U),N=Math.atan2(L,U),C=(Q=M.sill)!=null?Q:2.55,I=(j=M.height)!=null?j:4.45,F=(W=M.thickness)!=null?W:.42,k=.18,G=new We;G.position.set((Z.x+x.x)/2,0,(Z.y+x.y)/2),G.rotation.y=N,i.add(G),e([F,C,A],[0,C/2,0],l,G),e([F,St.height-C-I,A],[0,C+I+(St.height-C-I)/2,0],l,G);for(let he of[-A/2+k/2,A/2-k/2])e([F+.08,I,k],[0,C+I/2,he],h,G);e([.07,I-.16,A-k*2],[0,C+I/2,0],f,G,{cast:!1});let S=(oe=M.sillDepth)!=null?oe:F+.2;e([S,.16,A],[0,C+.08,0],m,G),e([F+.16,.14,A],[0,C+I-.07,0],h,G),M.parapet&&e([F+.12,.46,A-.1],[0,.29,0],u,G)}function E(Z,x,M,L,U,A=l,N=.42){let C=Z-N/2,I=Z+N/2,F=new Float32Array([C,0,x,C,0,M,C,U,M,C,L,x,I,0,x,I,0,M,I,U,M,I,L,x]),k=[0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,3,2,6,3,6,7,0,3,7,0,7,4,1,5,6,1,6,2],G=new $e;G.setAttribute("position",new Dt(F,3)),G.setIndex(k),G.computeVertexNormals();let S=new Ae(G,A);return S.castShadow=!0,S.receiveShadow=!0,i.add(S),S}function R(Z,x,M,L,U){let A=xe(Z),N=xe(M),C=we(x),I=we(L);e([N-A,.1,I-C],[(A+N)/2,-.04,(C+I)/2],U,i,{cast:!1})}function w(Z,x,M,L=[],U={}){var G,S,Q,j;let A=we(Z),N=(G=U.material)!=null?G:l,C=(S=U.thickness)!=null?S:.42,I=(Q=U.parent)!=null?Q:i,F=L.slice().sort((W,oe)=>W.a-oe.a),k=x;for(let W of F)t(xe(k),xe(W.a),A,0,St.height,N,I,C),T(A,W,N,I,C,(j=U.trim)!=null?j:h),k=W.b;t(xe(k),xe(M),A,0,St.height,N,I,C)}function T(Z,x,M,L,U,A){var I,F,k,G;let N=xe(x.a),C=xe(x.b);if(x.type==="window"){let S=(I=x.sill)!=null?I:2.65,Q=(F=x.height)!=null?F:4.15;t(N,C,Z,0,S,M,L,U),t(N,C,Z,S+Q,St.height,M,L,U),z(N,C,Z,S,Q,A,L,(k=x.panes)!=null?k:2)}else{let S=(G=x.height)!=null?G:7.05;t(N,C,Z,S,St.height,M,L,U),P(N,C,Z,S,A,L)}}function O(Z,x,M,L=[],U={}){var G,S,Q,j;let A=xe(Z),N=(G=U.material)!=null?G:l,C=(S=U.thickness)!=null?S:.42,I=(Q=U.parent)!=null?Q:i,F=L.slice().sort((W,oe)=>W.a-oe.a),k=x;for(let W of F)n(A,we(k),we(W.a),0,St.height,N,I,C),B(A,W,N,I,C,(j=U.trim)!=null?j:h),k=W.b;n(A,we(k),we(M),0,St.height,N,I,C)}function B(Z,x,M,L,U,A){var I,F,k;let N=we(x.a),C=we(x.b);if(x.type==="window"){let G=(I=x.sill)!=null?I:2.65,S=(F=x.height)!=null?F:4.15;n(Z,N,C,0,G,M,L,U),n(Z,N,C,G+S,St.height,M,L,U),Y(Z,N,C,G,S,A,L)}else{let G=(k=x.height)!=null?k:7.05;n(Z,N,C,G,St.height,M,L,U),X(Z,N,C,G,A,L)}}function z(Z,x,M,L,U,A,N,C=2){let I=new Ae(new Nt(x-Z-.12,U-.12),f);I.position.set((Z+x)/2,L+U/2,M+.03),N.add(I);let F=.14;e([x-Z+.22,F,.2],[(Z+x)/2,L,M],A,N),e([x-Z+.22,F,.2],[(Z+x)/2,L+U,M],A,N),e([F,U+.2,.2],[Z,L+U/2,M],A,N),e([F,U+.2,.2],[x,L+U/2,M],A,N);for(let k=1;k<C;k++){let G=Z+(x-Z)*k/C;e([.1,U-.12,.16],[G,L+U/2,M+.05],A,N)}}function Y(Z,x,M,L,U,A,N){let C=new Ae(new Nt(M-x-.12,U-.12),f);C.rotation.y=Math.PI/2,C.position.set(Z+.03,L+U/2,(x+M)/2),N.add(C);let I=.14;e([.2,I,M-x+.22],[Z,L,(x+M)/2],A,N),e([.2,I,M-x+.22],[Z,L+U,(x+M)/2],A,N),e([.2,U+.2,I],[Z,L+U/2,x],A,N),e([.2,U+.2,I],[Z,L+U/2,M],A,N),e([.16,U-.12,.1],[Z+.05,L+U/2,(x+M)/2],A,N)}function P(Z,x,M,L,U,A){e([.17,L,.22],[Z,L/2,M],U,A),e([.17,L,.22],[x,L/2,M],U,A),e([x-Z+.17,.17,.22],[(Z+x)/2,L,M],U,A)}function X(Z,x,M,L,U,A){e([.22,L,.17],[Z,L/2,x],U,A),e([.22,L,.17],[Z,L/2,M],U,A),e([.22,.17,M-x+.17],[Z,L,(x+M)/2],U,A)}function V(Z,x,M,L,U={}){var F,k;let A=Math.sign(M)||1,N=Math.abs(M)/Zn.scaleX,C=new We,I=(F=U.material)!=null?F:u;e([N,6.9,.13],[A*N/2,3.45,0],I,C),C.position.set(xe(x),0,we(Z)),C.rotation.y=L,((k=U.parent)!=null?k:i).add(C)}function te(Z,x,M,L,U={}){var k,G,S;let A=Math.sign(M)||1,N=Math.abs(M)/Zn.scaleZ,C=(k=U.height)!=null?k:6.9,I=new We,F=(G=U.material)!=null?G:u;e([.13,C,N],[0,C/2,A*N/2],F,I),I.position.set(xe(Z),0,we(x)),I.rotation.y=L,((S=U.parent)!=null?S:i).add(I)}function ce(Z,x,M,L=7.1){let U=xe(x),A=xe(M),N=we(Z),C=A-U,I=C/2;for(let F=0;F<2;F++){let k=U+I*(F+.5);e([I-.18,L-.3,.07],[k,(L-.3)/2+.12,N],f,i,{cast:!1}),e([.15,L,.13],[U+I*F,L/2,N],h,i)}e([.15,L,.15],[A,L/2,N],h,i),e([C,.16,.15],[(U+A)/2,.08,N],h,i),e([C,.16,.15],[(U+A)/2,L-.08,N],h,i),e([.1,.7,.1],[U+I+.22,3.35,N-.08],h,i)}function ne(){new Pa().load("assets/Background/floor-plans/first-floor.png",x=>{x.colorSpace=Ke;let M=497,L=438,U=M/Zn.scaleX,A=L/Zn.scaleZ,N=xe(M/2),C=we(L/2),I=new nn({map:x,transparent:!0,opacity:.68,side:Vi,depthWrite:!1}),F=new Ae(new Nt(U,A),I);F.rotation.x=-Math.PI/2,F.position.set(N,.025,C),s.add(F),s.visible=document.getElementById("planToggle").checked,y==null||y()})}function K(){let x=new se(xe(326),we(357)),M=new se(xe(344),we(378)),L=new se(xe(393),we(378)),U=new se(xe(411),we(357)),A=3.05,N=new $e;N.setAttribute("position",new Se([x.x,A,x.y,M.x,A,M.y,L.x,A,L.y,U.x,A,U.y],3)),N.setIndex([0,2,1,0,3,2]),N.computeVertexNormals();let C=m.clone();C.side=Vi;let I=new Ae(N,C);I.receiveShadow=!0,i.add(I),e([U.x-x.x,A,.56],[(x.x+U.x)/2,A/2,x.y],l,i),e([U.x-x.x+.1,.18,.24],[(x.x+U.x)/2,A+.09,x.y-.03],m,i),e([U.x-x.x-.12,.46,.12],[(x.x+U.x)/2,.29,x.y-.31],u,i);let F={sill:A,height:3.7,thickness:.68,sillDepth:1.2,parapet:!0};v(x,M,F),v(M,L,F),v(L,U,F);let k=xe(368.5),G=we(342),S=new Ae(new jt(1.82,1.82,.18,40),m);S.position.set(k,2.52,G),S.castShadow=!0,c.add(S);let Q=new Ae(new jt(.34,.58,2.45,24),h);Q.position.set(k,1.23,G),Q.castShadow=!0,c.add(Q);for(let[j,W,oe]of[[k-2.35,G,Math.PI/2],[k+2.35,G,-Math.PI/2],[k,G-2.25,0]]){let he=new We;e([1.45,.16,1.35],[0,1.48,0],m,he),e([1.45,2.55,.14],[0,2.3,-.61],h,he);for(let de of[-.56,.56])for(let fe of[-.48,.48])e([.12,1.45,.12],[de,.73,fe],h,he);he.position.set(j,0,W),he.rotation.y=oe,c.add(he)}}function ie(){let Z=xe(164),x=xe(196),M=we(269),L=we(323),U=10,A=.66;for(let k=0;k<U;k++){let G=M+(L-M)*k/U,S=M+(L-M)*(k+1)/U,Q=A*(k+1);e([x-Z,.12,S-G+.08],[(Z+x)/2,Q,(G+S)/2],m,i),e([x-Z,A,.1],[(Z+x)/2,Q-A/2,G],_,i)}E(x,M,L,A,A*U,l,.34);let N=xe(249),C=xe(282),I=we(289),F=we(357);for(let k=0;k<10;k++){let G=I+(F-I)*k/10,S=I+(F-I)*(k+1)/10,Q=Math.max(.06,.82-k*.08);e([C-N-.35,Q,S-G],[(N+C)/2,Q/2,(G+S)/2],_,i)}}function q(Z){let x=new Ye({color:2435371,roughness:.38}),M=new Ye({color:11450298,roughness:.28,metalness:.62});if(Z!==Rt.OPEN){let S=xe(302),Q=xe(379),j=(S+Q)/2,W=we(268);e([Q-S,2.9,1.9],[j,1.45,W],m,i),e([Q-S,.16,2.02],[j,2.98,W],x,i),e([Q-S-.35,2.45,1.05],[j,6.35,we(263.5)],m,i),e([2,.08,1.2],[j,3.08,W],M,i,{cast:!1})}let L=we(314),U=we(350);e([2,2.9,U-L],[xe(421),1.45,(L+U)/2],m,i),e([2.12,.16,U-L],[xe(421),2.98,(L+U)/2],x,i),e([1.05,2.45,U-L-.35],[xe(425.5),6.35,(L+U)/2],m,i),e([2.05,6.95,3],[xe(421),3.475,we(330)],M,i);let A=we(298),N=we(349);e([1.95,2.9,N-A],[xe(291),1.45,(A+N)/2],m,i),e([2.08,.16,N-A],[xe(291),2.98,(A+N)/2],x,i),e([1.02,2.45,N-A-.35],[xe(286.5),6.35,(A+N)/2],m,i);let C=xe(385),I=xe(427),F=we(207);e([I-C,2.9,1.65],[(C+I)/2,1.45,F],m,i),e([I-C,.16,1.78],[(C+I)/2,2.98,F],x,i);let k=we(214),G=we(255);e([1.65,2.9,G-k],[xe(422),1.45,(k+G)/2],m,i),e([1.78,.16,G-k],[xe(422),2.98,(k+G)/2],x,i),e([1.02,2.35,G-k-.25],[xe(426),6.25,(k+G)/2],m,i),e([1.2,.08,2],[xe(291),3.08,we(337)],M,i,{cast:!1}),e([1.65,.08,1.1],[xe(404),3.08,F],M,i,{cast:!1})}function ee(Z,x=Rt.EXISTING){R(41,121,164,357,d),R(164,121,267,228,d),R(267,121,382,262,d),R(382,199,430,260,p),R(164,228,267,357,d),R(249,260,430,357,p),w(116,40,382,[{a:72,b:116,type:"door",height:7},{a:185,b:244,type:"window",sill:2.65,height:4.35,panes:3},{a:293,b:354,type:"door",height:7.1}],{thickness:.68,trim:h}),O(40,116,357,[{a:145,b:171,type:"window"},{a:214,b:240,type:"window"},{a:286,b:312,type:"window"}],{thickness:.68,trim:h});let M=[{a:151,b:177,type:"window"}];x!==Rt.OPEN&&M.push({a:230,b:260,type:"door",height:7.1}),O(382,116,260,M,{thickness:.68,trim:h}),w(199,382,430,[{a:394,b:420,type:"window",sill:3.2,height:3.5}],{thickness:.68,trim:u}),O(430,199,260,[],{thickness:.68,trim:u}),O(430,260,357,[{a:280,b:313,type:"door"}],{thickness:.68,trim:u}),w(357,40,326,[{a:91,b:136,type:"window",sill:2.7,height:4.1},{a:182,b:201,type:"window",sill:4.4,height:2},{a:211,b:252,type:"door",height:7.1}],{thickness:.68,trim:u}),w(357,411,430,[],{thickness:.68,trim:u}),K(),O(164,116,357,[{a:229,b:268,type:"door",height:7.25}],{thickness:.42,trim:h}),O(267,116,260,[{a:230,b:260,type:"door",height:7.1}],{thickness:.42,trim:h}),Ou(x,{meshBox:e,addPlanHorizontalWall:w,architectureGroup:i,kitchenBeamGroup:a,kitchenPostGroup:o,wallMaterial:l,whiteTrimMaterial:u});let L=6.4,U=6.15,A=xe(164),N=xe(211),C=we(323),I=we(357),F=we(331),k=we(354);t(A,N,C,0,L,l,i,.42),n(N,C,F,0,L,l,i,.42),n(N,F,k,U,L,l,i,.42),n(N,k,I,0,L,l,i,.42),X(N,F,k,U,u,i),e([N-A,.2,I-C],[(A+N)/2,L,(C+I)/2],_,i),e([N-A,.08,I-C],[(A+N)/2,L+.14,(C+I)/2],m,i),O(249,258,357,[{a:262,b:289,type:"door",height:7}],{thickness:.42,trim:u}),O(282,289,357,[],{thickness:.42,trim:u}),te(164,229,19,-Math.PI/2,{material:u}),te(164,268,-19,Math.PI/2,{material:u}),te(267,230,29,Math.PI/2,{material:u}),ce(116,293,354,7.1),x!==Rt.OPEN&&te(382,260,-29,Math.PI/2,{material:u}),te(249,289,-26,-Math.PI/2,{material:u}),te(430,313,-32,Math.PI/2,{material:u}),V(357,252,-40,-Math.PI/2,{material:u}),te(211,354,-22,Math.PI/2,{material:u,height:6.15}),ie(),q(x),ne()}return{build:ee}}var vn=Object.freeze({CENTERED:"center",BAY:"bay"}),Zt=Object.freeze({VERTICAL:"vertical",HORIZONTAL:"horizontal"});function hc(r,e,t){let{meshBox:n,kitchenIslandGroup:i,cabinetMaterial:s,hardwareMaterial:a,islandCounterMaterial:o}=t,c=xe(Ot.centerPixelX),l=we(r===vn.BAY?Ot.bayPixelY:Ot.centeredPixelY),h=Ot.counterHeight,u=e===Zt.HORIZONTAL,d=u?Ot.topLength:Ot.topWidth,p=u?Ot.topWidth:Ot.topLength,f=u?Ot.baseLength:Ot.baseWidth,_=u?Ot.baseWidth:Ot.baseLength,m=n([f-.26,.18,_-.28],[c,.09,l],a,i);m.name="Kitchen island toe kick";let y=n([f,h-.28,_],[c,.18+(h-.28)/2,l],s,i);y.name="Kitchen island cabinet base";let g=n([d,.16,p],[c,h+.08,l],o,i);if(g.name="Kitchen island countertop - 3 feet 6 inches by 5 feet 6 inches",u)for(let v of[-1.58,0,1.58])n([.045,2.08,.035],[c+v,1.48,l+_/2+.02],a,i,{cast:!1}),n([.72,.08,.09],[c+v,2.3,l+_/2+.065],a,i,{cast:!1});else for(let v of[-1.58,0,1.58])n([.035,2.08,.045],[c+f/2+.02,1.48,l+v],a,i,{cast:!1}),n([.09,.08,.72],[c+f/2+.065,2.3,l+v],a,i,{cast:!1});i.userData.position=r,i.userData.orientation=u?Zt.HORIZONTAL:Zt.VERTICAL,i.userData.plan={topWidth:Ot.topWidth,topLength:Ot.topLength,note:"Conceptual footprint; field measurements and appliance clearances control."}}var Im=["right","left","top","bottom","front","back"];function Dr(r,e){let t=document.createElement("canvas");t.width=192,t.height=192;let n=t.getContext("2d");n.fillStyle=e,n.fillRect(0,0,t.width,t.height),n.strokeStyle="#5d6b72",n.lineWidth=8,n.strokeRect(4,4,t.width-8,t.height-8),n.fillStyle="#18333e",n.font="800 31px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(r.toUpperCase(),t.width/2,t.height/2);let i=new ui(t);return i.colorSpace=Ke,new nn({map:i})}function Fu({canvas:r,homeButton:e,mainCamera:t,controls:n,onFace:i,onHome:s}){let a=new Oi({canvas:r,antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.setSize(104,104,!1),a.outputColorSpace=Ke;let o=new wr,c=new ot(34,1,.1,20),l=[Dr("Right","#d9e8ec"),Dr("Left","#d9e8ec"),Dr("Top","#eef4f5"),Dr("Bottom","#c9d9dd"),Dr("Front","#e4eef0"),Dr("Back","#d3e1e5")],h=new Ae(new Cn(1.65,1.65,1.65),l);o.add(h);let u=new hi(new Fi(h.geometry),new jn({color:5399403,transparent:!0,opacity:.9}));h.add(u);let d=new Rr,p=new se,f=null,_=!1;function m(){let g=t.position.clone().sub(n.target).normalize();c.position.copy(g.multiplyScalar(5)),c.up.copy(t.up),c.lookAt(0,0,0),a.render(o,c)}function y(g,v){let E=t.position.clone().sub(n.target),R=new Yn().setFromVector3(E);R.theta-=g*.012,R.phi=di.clamp(R.phi-v*.012,.03,Math.PI-.03),t.up.set(0,1,0),t.position.copy(n.target).add(new b().setFromSpherical(R)),t.lookAt(n.target),n.update()}return r.addEventListener("pointerdown",g=>{f={x:g.clientX,y:g.clientY,lastX:g.clientX,lastY:g.clientY},_=!1,r.setPointerCapture(g.pointerId),g.preventDefault()}),r.addEventListener("pointermove",g=>{if(!f)return;let v=g.clientX-f.lastX,E=g.clientY-f.lastY;Math.hypot(g.clientX-f.x,g.clientY-f.y)>4&&(_=!0),_&&y(v,E),f.lastX=g.clientX,f.lastY=g.clientY}),r.addEventListener("pointerup",g=>{if(f){if(!_){let v=r.getBoundingClientRect();p.set((g.clientX-v.left)/v.width*2-1,-((g.clientY-v.top)/v.height)*2+1),d.setFromCamera(p,c);let E=d.intersectObject(h,!1)[0];E&&i(Im[E.face.materialIndex])}f=null,_=!1,r.releasePointerCapture(g.pointerId)}}),r.addEventListener("pointercancel",()=>{f=null,_=!1}),e.addEventListener("click",s),{render:m}}var Wa=document.getElementById("viewer"),uc=document.getElementById("sceneCanvas"),Dm=document.getElementById("loadingMessage"),Et=new Oi({canvas:uc,antialias:!0,preserveDrawingBuffer:!0});Et.setPixelRatio(Math.min(window.devicePixelRatio,2));Et.shadowMap.enabled=!0;Et.shadowMap.type=ec;Et.shadowMap.autoUpdate=!1;Et.shadowMap.needsUpdate=!0;Et.outputColorSpace=Ke;Et.toneMapping=tc;Et.toneMappingExposure=1.05;var Dn=new wr;Dn.background=new be(14543083);Dn.fog=new ya(14543083,220,1e3);var et=new ot(62,1,.08,1600);et.position.set(0,5.5,15.5);var ke=new Ha(et,Et.domElement);ke.enableDamping=!0;ke.dampingFactor=.065;ke.enablePan=!0;ke.screenSpacePanning=!0;ke.mouseButtons.LEFT=Ln.ROTATE;ke.mouseButtons.MIDDLE=Ln.PAN;ke.mouseButtons.RIGHT=-1;ke.minDistance=2;ke.maxDistance=500;ke.zoomSpeed=5;ke.panSpeed=1.05;ke.maxPolarAngle=Math.PI*.49;ke.target.set(0,3.3,.7);ke.update();uc.addEventListener("wheel",r=>{var n;r.preventDefault(),r.stopImmediatePropagation();let e=et.position.distanceTo(ke.target);if(r.ctrlKey){let i=uc.getBoundingClientRect(),s=new se((r.clientX-i.left)/i.width*2-1,-((r.clientY-i.top)/i.height)*2+1),a=new Rr;a.setFromCamera(s,et);let o=et.getWorldDirection(new b),c=new It().setFromNormalAndCoplanarPoint(o,ke.target),l=(n=a.ray.intersectPlane(c,new b))!=null?n:ke.target.clone(),h=Math.exp(r.deltaY*.008),d=di.clamp(e*h,ke.minDistance,ke.maxDistance)/e,p=et.position.clone().sub(ke.target).multiplyScalar(d);ke.target.lerp(l,1-d),et.position.copy(ke.target).add(p),ke.update();return}let t=2*e*Math.tan(di.degToRad(et.fov/2))/Math.max(1,Wa.clientHeight);if(r.shiftKey){let i=et.position.clone().sub(ke.target),s=new Yn().setFromVector3(i);s.theta-=r.deltaX*.006,s.phi=di.clamp(s.phi-r.deltaY*.006,.03,Math.PI-.03),et.up.set(0,1,0),et.position.copy(ke.target).add(new b().setFromSpherical(s)),et.lookAt(ke.target)}else{let i=new b().setFromMatrixColumn(et.matrix,0).multiplyScalar(r.deltaX*t),s=new b().setFromMatrixColumn(et.matrix,1).multiplyScalar(-r.deltaY*t);et.position.add(i).add(s),ke.target.add(i).add(s)}ke.update()},{capture:!0,passive:!1});var Nm=new La(16055295,7297859,2.15);Dn.add(Nm);var gi=new Da(16774365,3.1);gi.position.set(-2,12,-10);gi.castShadow=!0;gi.shadow.mapSize.set(2048,2048);gi.shadow.camera.left=-12;gi.shadow.camera.right=12;gi.shadow.camera.top=12;gi.shadow.camera.bottom=-12;Dn.add(gi);var Gu=new ps(16769980,35,22,1.6);Gu.position.set(0,8.1,1.3);Dn.add(Gu);var Vu=new ps(16771529,42,28,1.6);Vu.position.set(0,8,Lr.northZ+6.4);Dn.add(Vu);var Xa=new Ia(15398911,72,34,Math.PI/4.2,.72,1.35);Xa.position.set(Qe(383/2),6.25,it(357)-.3);Xa.target.position.set(-.8,3.2,1.8);Dn.add(Xa,Xa.target);var Ht=new We,mi=new We,ja=new We,Ya=new We,qa=new We,Za=new We,ji=new We,Wu=new We,Ka=new We,$a=new We,Qa=new We,eo=new We,to=new We,Nr=new We;Dn.add(Ka,Ht,mi,ja,Ya,qa,Za,ji,Wu,$a,Qa,eo,to,Nr);var Um=new Ye({map:km(),roughness:.63,metalness:0}),fi=new Ye({color:15657439,roughness:.86}),Ja=new Ye({color:15657439,roughness:.86,transparent:!0,opacity:1}),Jn=new Ye({color:4924692,roughness:.46}),fc=new Ye({color:15921386,roughness:.72}),Om=new Ye({color:15328732,roughness:.78}),dc=new Ye({color:11828035,roughness:.62}),ka=new Ye({color:13017975,roughness:.68}),Bm=new Ye({color:8413252,roughness:.78}),gs=new Ye({color:3946032,roughness:.36,metalness:.48}),Xu=new Ye({color:2435371,roughness:.34,metalness:.04}),ju=new ki({color:12244959,transparent:!0,opacity:.28,roughness:.08,transmission:.38}),Yu=new Ye({color:14080469,roughness:.76}),Fm=new Ye({color:16316661,roughness:.24}),Jg=new Ye({color:14210250,roughness:.95}),Kg=new Ye({color:3234373,roughness:1}),$g=new Ye({color:7306872,roughness:1}),Hm=new nn({color:6322309,transparent:!0,opacity:.23,side:Vi,depthWrite:!1}),an=new URLSearchParams(window.location.search),Hu,zm=Number.parseInt((Hu=an.get("option"))!=null?Hu:"",10),zu,ku,qe=(ku=(zu=Wi.find(r=>r.id===zm))!=null?zu:Wi.find(r=>r.id===8))!=null?ku:Wi[0],Jt=an.get("kitchen")===Rt.EXISTING?Rt.EXISTING:Rt.OPEN,_n=an.get("island")===vn.BAY?vn.BAY:vn.CENTERED,yn=an.get("orientation")===Zt.HORIZONTAL?Zt.HORIZONTAL:Zt.VERTICAL;document.getElementById("kitchenBeamToggle").checked=an.get("beam")==="visible";document.getElementById("kitchenPostToggle").checked=an.get("post")==="visible";document.getElementById("kitchenTableToggle").checked=an.get("table")!=="hidden";document.getElementById("kitchenIslandToggle").checked=["center","bay"].includes(an.get("island"));document.getElementById("showerToggle").checked=an.get("shower")==="shown";var Ur=["frontdoor","away","foyer","threshold","living","den","window","bathentry","bathplan","kitchen","dining","patio","island","kitchenplan","breakfast","overhead"].includes(an.get("view"))?an.get("view"):"overhead",fs=null,In=null,Ga=null;document.getElementById("bathroomDoorToggle").checked=an.get("door")==="closed";function km(){let r=document.createElement("canvas");r.width=512,r.height=512;let e=r.getContext("2d");e.fillStyle="#bd8954",e.fillRect(0,0,r.width,r.height);let t=46;for(let i=0;i<r.height;i+=t){e.strokeStyle="rgba(70,39,20,.28)",e.lineWidth=2,e.beginPath(),e.moveTo(0,i),e.lineTo(r.width,i),e.stroke();let s=Math.floor(i/t)%3*90;for(let a=s;a<r.width;a+=180)e.strokeStyle="rgba(75,42,20,.20)",e.beginPath(),e.moveTo(a,i),e.lineTo(a,i+t),e.stroke();for(let a=0;a<9;a++){let o=i+5+a*4;e.strokeStyle=`rgba(85,48,24,${.025+a%3*.012})`,e.beginPath(),e.moveTo(0,o),e.bezierCurveTo(120,o+2,360,o-2,512,o+1),e.stroke()}}let n=new ui(r);return n.wrapS=n.wrapT=ts,n.repeat.set(2.7,2.7),n.colorSpace=Ke,n.anisotropy=Et.capabilities.getMaxAnisotropy(),n}function Mt(r,e,t,n,i={}){var o,c;let s=new Cn(r[0],r[1],r[2]),a=new Ae(s,t);return a.position.set(e[0],e[1],e[2]),a.castShadow=(o=i.cast)!=null?o:!0,a.receiveShadow=(c=i.receive)!=null?c:!0,i.rotationY&&(a.rotation.y=i.rotationY),n.add(a),a}function gc(r){var e;for(;r.children.length;){let t=r.children.pop();(e=t.traverse)==null||e.call(t,n=>{var i;n.geometry&&n.geometry.dispose(),(i=n.getRenderTarget)==null||i.call(n).dispose()})}}function vs(r,e,t,n=0,i=Oe.height,s=fi,a=Ht,o=Oe.wall){if(!(e-r<=.01||i-n<=.01))return Mt([e-r,i-n,o],[(r+e)/2,(n+i)/2,t],s,a)}function Va(r,e,t,n=0,i=Oe.height,s=fi,a=Ht,o=Oe.wall){if(!(t-e<=.01||i-n<=.01))return Mt([o,i-n,t-e],[r,(n+i)/2,(e+t)/2],s,a)}function Gm(r,e,t,n,i=Ja){let[s,a]=n;Va(r,e,s,0,Oe.height,i,mi,.375),Va(r,s,a,7.05,Oe.height,i,mi,.375),Va(r,a,t,0,Oe.height,i,mi,.375),Vm(r,s,a,mi)}function Vm(r,e,t,n=mi){Mt([.3,7.05,.17],[r,7.05/2,e],Jn,n),Mt([.3,7.05,.17],[r,7.05/2,t],Jn,n),Mt([.3,.17,t-e+.15],[r,7.05,(e+t)/2],Jn,n)}function Wm(){let r=Qe(164),e=Qe(267),t=it(228),n=.44;Mt([e-r,n,.56],[(r+e)/2,Oe.height-n/2,t],fi,Ht)}function Xm(){let r=Qe(164),e=Qe(267),t=e-sn.externalWidth,n=t-vt.clearOpeningWidth,i=it(228),s=vt.doorHeight;vs(r,n,i,0,Oe.height,fi,Ht,.42),vs(n,t,i,s,Oe.height,fi,Ht,.42),vs(t,e,i,0,Oe.height,fi,Ht,.42);let a=.17;Mt([a,s,.24],[n,s/2,i],Jn,Ht),Mt([a,s,.24],[t,s/2,i],Jn,Ht),Mt([t-n+a,a,.24],[(n+t)/2,s,i],Jn,Ht);function o(c,l,h){let u=vt.clearOpeningWidth/2-.045,d=new We;Mt([u,s-.12,.14],[l*u/2,(s-.12)/2,0],Jn,d);for(let p of[.72,3.45,s-.72])Mt([u-.22,.09,.04],[l*u/2,p,-.09],fc,d,{cast:!1});Mt([.1,.1,.16],[l*(u-.26),3.38,-.13],gs,d),d.position.set(c,0,i-.04),d.rotation.y=h,Ht.add(d)}o(n,1,Math.PI*.43),o(t,-1,-Math.PI*.43)}function jm(r){function e(p,f,_,m=0){let y=new Ae(new Nt(p,f),Hm);y.rotation.y=m,y.position.set(_[0],_[1],_[2]);let g=new hi(new Fi(y.geometry),new jn({color:3495011,transparent:!0,opacity:.65}));return y.add(g),$a.add(y),y}let t=7,n=2.8;if(e(n,t,[-Oe.width/2+.12,t/2,-1.85],Math.PI/2),e(n,t,[Oe.width/2-.12,t/2,1.35],-Math.PI/2),r.retainDenFoyerDoors)return;let i=Qe(164),s=Qe(267),a=(i+s)/2,o=a-vt.clearOpeningWidth/2,c=a+vt.clearOpeningWidth/2,l=it(228),h=Oe.height,u=h-vt.doorHeight;e(o-i,h,[(i+o)/2,h/2,l]),e(s-c,h,[(c+s)/2,h/2,l]),e(vt.clearOpeningWidth,u,[a,vt.doorHeight+u/2,l]);let d=vt.clearOpeningWidth/2-.04;e(d,vt.doorHeight,[a-vt.clearOpeningWidth/4,vt.doorHeight/2,l+.035]),e(d,vt.doorHeight,[a+vt.clearOpeningWidth/4,vt.doorHeight/2,l+.035])}var Ym=Bu({meshBox:Mt,addWallZSegment:vs,addWallXSegment:Va,architectureGroup:Ht,planUnderlayGroup:Ka,kitchenBeamGroup:Qa,kitchenPostGroup:eo,kitchenFurnitureGroup:to,wallMaterial:fi,woodMaterial:Jn,whiteTrimMaterial:fc,floorMaterial:Um,tileMaterial:Yu,glassMaterial:ju,stairMaterial:Om,oakMaterial:dc,requestRender:Kn});function vc(r){var t;[Ka,Ht,mi,ja,Ya,qa,Za,ji,Wu,$a,Qa,eo,to,Nr].forEach(gc),Mt([70,.08,65],[3.5,-.18,5],new Ye({color:13947078,roughness:1}),Ht,{cast:!1}),Ym.build(r,Jt),r.retainDenFoyerDoors?Xm():Wm();let e=Nu(r,{meshBox:Mt,powderGroup:mi,fixtureGroup:ja,showerGroup:Ya,initialHalfBathGroup:qa,powderWallMaterial:Ja,woodMaterial:Jn,whiteTrimMaterial:fc,tileMaterial:Yu,porcelainMaterial:Fm,oakMaterial:dc,cabinetMaterial:ka,wallMaterial:fi,glassMaterial:ju,hardwareMaterial:gs,addWallZSegment:vs,addWallXWithDoorOpening:Gm});fs=(t=e==null?void 0:e.door)!=null?t:null,qu(!1),Du(r,{meshBox:Mt,mudroomGroup:Za,cabinetInteriorMaterial:Bm,cabinetMaterial:ka,hardwareMaterial:gs,oakMaterial:dc}),cc(r,ji,Jt,document.getElementById("kitchenIslandToggle").checked?_n:null,yn,r.interface==="north-bath"&&document.getElementById("showerToggle").checked),hc(_n,yn,{meshBox:Mt,kitchenIslandGroup:Nr,cabinetMaterial:ka,hardwareMaterial:gs,islandCounterMaterial:Xu}),jm(r),no(),Et.shadowMap.needsUpdate=!0,Kn()}function qu(r=!0){var n;let e=document.getElementById("bathroomDoorToggle"),t=qe.interface==="north-bath"&&fs;if(e.disabled=!t,document.getElementById("bathroomDoorRow").classList.toggle("disabled",!t),fs&&(fs.rotation.y=e.checked?0:(n=fs.userData.openAngle)!=null?n:-Math.PI/2),Et.shadowMap.needsUpdate=!0,Kn(),r){let i=new URL(window.location.href);i.searchParams.set("door",e.checked?"closed":"open"),window.history.replaceState({},"",i)}}function no(){let r=document.getElementById("cutawayToggle").checked;Ja.opacity=r?.34:1,Ja.depthWrite=!r,ja.visible=r;let e=qe.interface==="north-bath",t=e&&document.getElementById("showerToggle").checked;Ya.visible=t,qa.visible=e&&!t,document.getElementById("showerToggle").disabled=!e,document.getElementById("showerRow").classList.toggle("disabled",!e),Ka.visible=document.getElementById("planToggle").checked,Za.visible=document.getElementById("mudroomToggle").checked,ji.visible=document.getElementById("dimensionToggle").checked,$a.visible=document.getElementById("ghostToggle").checked;let n=Jt===Rt.OPEN;Qa.visible=n&&document.getElementById("kitchenBeamToggle").checked,eo.visible=n&&document.getElementById("kitchenPostToggle").checked,to.visible=document.getElementById("kitchenTableToggle").checked,Nr.visible=n&&document.getElementById("kitchenIslandToggle").checked;for(let i of["kitchenBeamRow","kitchenPostRow","kitchenIslandRow"])document.getElementById(i).classList.toggle("disabled",!n);document.getElementById("kitchenBeamToggle").disabled=!n,document.getElementById("kitchenPostToggle").disabled=!n,document.getElementById("kitchenIslandToggle").disabled=!n,document.querySelectorAll("[data-island-position]").forEach(i=>{i.disabled=!n||!document.getElementById("kitchenIslandToggle").checked,i.classList.toggle("active",i.dataset.islandPosition===_n)}),document.querySelectorAll("[data-island-orientation]").forEach(i=>{i.disabled=!n||!document.getElementById("kitchenIslandToggle").checked,i.classList.toggle("active",i.dataset.islandOrientation===yn)}),Et.shadowMap.needsUpdate=!0,Kn()}function Zu(){let r=document.getElementById("optionList");r.innerHTML="";for(let e of Wi){let t=document.createElement("button");t.className=`option-button${e.rejected?" rejected":""}${e.id===qe.id?" active":""}`,t.innerHTML=`
      <span class="option-number">${e.id}</span>
      <span class="option-copy"><strong>${e.title}</strong><small>${e.short}</small></span>
      <span class="option-side">${e.side.toUpperCase()}</span>
    `,t.addEventListener("click",()=>$m(e.id)),r.appendChild(t)}}function io(){let r=Jt===Rt.OPEN,e=r&&document.getElementById("kitchenBeamToggle").checked,t=r&&document.getElementById("kitchenPostToggle").checked,n=r&&document.getElementById("kitchenIslandToggle").checked,i=document.getElementById("kitchenTableToggle").checked,s=qe.interface==="north-bath"&&document.getElementById("showerToggle").checked,a=r?`Open kitchen \xB7 ${e?"dropped beam shown":"no visible beam"}`:"Existing kitchen wall";document.getElementById("viewerOptionName").textContent=`Option ${qe.id}`,document.getElementById("viewerOptionFootprint").textContent=`${qe.title} \xB7 ${a}`,document.getElementById("windowCalloutText").textContent=qe.interface==="north-bath"?"Window incorporated into north bathroom":"North window preserved",document.querySelector("#ghostToggle").closest("label").querySelector("small").textContent=qe.retainDenFoyerDoors?"The retained hall doors are already shown; ghost only the two closed side doors":"Show the field-measured 5 ft hall opening and the two side doors that will be closed",document.getElementById("optionSummary").classList.toggle("rejected",!!qe.rejected),document.getElementById("optionSummary").innerHTML=`
    <span class="status">${qe.status}</span>
    <h3>${qe.title}</h3>
    <p>${qe.description}</p>
    ${qe.id===3?`<p><strong>Rejection basis:</strong> The retained east leaf obstructs the powder-door approach when open. The nominal external footprint also yields only about 2'7" x 4'7" between the conceptual wall faces, leaving no robust tolerance for actual framing, casing, fixtures, plumbing and required clearances. Retaining this geometry would require major door or footprint changes, defeating its least-intrusive premise.</p>`:""}
    ${qe.interface==="north-bath"?`<p><strong>Phased bathroom study:</strong> Approximately 11'0" x 6'6" finished clear with the east-facing Compact Cadet 3 toilet and outward-swinging entrance unchanged. ${s?'Future full bath: 60" x 42" southwest shower with fixed panel, outward-opening hinged glass door and opaque tiled return, plus the permanent 36" x 21" east-wall vanity':'Initial half bath: 60" x 21" south-wall vanity in the future shower footprint, plus removable 36" x 18" east-wall storage in the future vanity location'}.</p>`:""}
    <p><strong>Kitchen-dining:</strong> ${r?`Large opening with the work-nook wall and basement screen retained. Wall cabinetry removed. ${e?"Dropped beam shown.":"No visible beam shown."} ${t?"Basement-side post shown.":"Post hidden."}`:"Existing wall, work-nook door and wall cabinetry retained."}</p>
    <p><strong>Kitchen furniture:</strong> ${n?`3'6" x 5'6" island, ${yn===Zt.HORIZONTAL?"east-west":"north-south"}, ${_n===vn.BAY?"shifted toward the bay":"centered for balanced circulation"}`:"No island"}; ${i?"breakfast table shown":"breakfast table removed"}.</p>
  `;let o;qe.id===3?o=[["Powder external",`3'0" x 5'0"`],["Powder approximate clear",`about 2'7" x 4'7"`],["Pocket-door opening",`about 2'4"`],["Retained hall doors",`5'0" clear pair`],["Coat closet",`about 7'1" x 2'0"`],["Entrance bench",`3'0" x 1'7"`],["Assessment","Rejected - door and clearance conflicts"]]:qe.id===7?o=[["Bathroom finished clear",`11'0" x 6'6"`],["Bathroom phase",s?"Future full bath":"Initial half bath"],["Southwest fixture",s?'60" x 42" shower':'60" x 21" vanity'],["East-wall fixture",s?'36" x 21" vanity':'36" x 18" storage'],["Bathroom-backed built-in",`about 11'0" x 2'0"`],["Mirrored coat closet",`about 3'1" wide`],["Integrated sitting bench",`3'0" wide`],["Left-wall mirror",`4'6" x 6'6"`]]:qe.id===8?o=[["Bathroom finished clear",`11'0" x 6'6"`],["Bathroom phase",s?"Future full bath":"Initial half bath"],["Southwest fixture",s?'60" x 42" shower':'60" x 21" vanity'],["East-wall fixture",s?'36" x 21" vanity':'36" x 18" storage'],["Left-wall coat closet",`4'6" x 2'0"`],["Opposite-entry bench",`3'0" x 1'7"`],["Frameless bench mirror",`4'0" x 5'0"`]]:o=[["Powder overall",`3'10\xBD" x 7'4\xBD"`],["Powder clear",`about 3'6" x 7'0"`],["Coat closet",`about 7'1" x 2'0"`],["Entrance bench",`3'0" x 1'7"`]];let c=[["Den / future mudroom",`11'5" x 11'8"`],["Existing den-to-foyer opening",`5'0" clear - field measured`],["Three-panel window",`about 6'6\xBD"`],["Kitchen-dining interface",r?`about 11'1" opening span`:"existing wall"],["Kitchen island",n?`3'6" x 5'6" - ${yn===Zt.HORIZONTAL?"east-west":"north-south"}, ${_n===vn.BAY?"toward bay":"centered"}`:"not shown"]];document.getElementById("dimensionGrid").innerHTML=[...c,...o].map(([l,h])=>`<div><span>${l}</span><strong>${h}</strong></div>`).join("")}function Ju(){gc(Nr),hc(_n,yn,{meshBox:Mt,kitchenIslandGroup:Nr,cabinetMaterial:ka,hardwareMaterial:gs,islandCounterMaterial:Xu})}function ro(){gc(ji),cc(qe,ji,Jt,document.getElementById("kitchenIslandToggle").checked?_n:null,yn,qe.interface==="north-bath"&&document.getElementById("showerToggle").checked),ji.visible=document.getElementById("dimensionToggle").checked}function qm(r=!0){if(ro(),no(),io(),!r)return;let e=new URL(window.location.href);e.searchParams.set("shower",document.getElementById("showerToggle").checked?"shown":"hidden"),window.history.replaceState({},"",e)}function Or(r=!0){no(),io();let e=Jt===Rt.OPEN&&document.getElementById("kitchenIslandToggle").checked,t=document.getElementById("kitchenFurnitureWarning");t.hidden=!(e&&document.getElementById("kitchenTableToggle").checked);let n=document.getElementById("islandClearanceNote");if(n.hidden=!e,e){let s=yn===Zt.HORIZONTAL,a=_n===vn.BAY,o=!s&&a;n.classList.toggle("warning-note",o),n.textContent=s?a?`East-west toward bay: about 3'6" at both north and sill ends, with about 3'6" side aisles.`:`East-west centered: about 3'1" north, 4'1" at the bay sill and 3'6" side aisles.`:a?`North-south toward bay: only about 2'6" at the bay sill - likely too tight. Shown for comparison, not recommended.`:`North-south centered: about 4'5" side aisles and 3'1" at the bay sill; the short north end opens into dining.`}if(!r)return;let i=new URL(window.location.href);i.searchParams.set("option",qe.id),i.searchParams.set("kitchen",Jt),i.searchParams.set("beam",document.getElementById("kitchenBeamToggle").checked?"visible":"hidden"),i.searchParams.set("post",document.getElementById("kitchenPostToggle").checked?"visible":"hidden"),i.searchParams.set("table",document.getElementById("kitchenTableToggle").checked?"shown":"hidden"),i.searchParams.set("island",document.getElementById("kitchenIslandToggle").checked?_n:"none"),i.searchParams.set("orientation",yn),i.searchParams.set("shower",document.getElementById("showerToggle").checked?"shown":"hidden"),i.searchParams.set("view",Ur),window.history.replaceState({},"",i)}function Zm(r){_n=r===vn.BAY?vn.BAY:vn.CENTERED,document.getElementById("kitchenIslandToggle").checked=!0,Ju(),ro(),Or(!0)}function Jm(r){yn=r===Zt.HORIZONTAL?Zt.HORIZONTAL:Zt.VERTICAL,document.getElementById("kitchenIslandToggle").checked=!0,Ju(),ro(),Or(!0)}function Km(r){Jt=r===Rt.OPEN?Rt.OPEN:Rt.EXISTING,document.querySelectorAll("[data-kitchen-mode]").forEach(t=>t.classList.toggle("active",t.dataset.kitchenMode===Jt));let e=new URL(window.location.href);e.searchParams.set("option",qe.id),e.searchParams.set("kitchen",Jt),e.searchParams.set("view",Ur),window.history.replaceState({},"",e),vc(qe),Or(!0)}function $m(r){var t;qe=(t=Wi.find(n=>n.id===r))!=null?t:Wi[0];let e=new URL(window.location.href);e.searchParams.set("option",qe.id),e.searchParams.set("kitchen",Jt),e.searchParams.set("view",Ur),window.history.replaceState({},"",e),Zu(),io(),vc(qe)}var Qm={frontdoor:r=>({position:new b(1.8,5.35,it(357)-.95),target:new b(r.side==="east"?.65:-.65,3.15,1.6)}),away:()=>({position:new b(.55,5.25,Lr.northZ-1.1),target:new b(-.35,3.15,Lr.southZ-1.4)}),foyer:r=>({position:new b(-.3,5.3,Lr.northZ+7.2),target:new b(r.side==="east"?.9:-.9,3.2,1.1)}),threshold:r=>({position:new b(r.side==="east"?-1:1,5.25,Lr.northZ+1.35),target:new b(r.side==="east"?1.6:-1.6,3.15,-.6)}),living:()=>({position:new b(-15.6,5.2,3),target:new b(-4.9,3.25,8.6)}),den:r=>({position:new b(r.side==="east"?-2.75:2.75,5.1,-3.45),target:new b(r.side==="east"?2:-2,3.15,2.25)}),window:r=>({position:new b(r.side==="east"?-1.5:1.5,5,-4.85),target:new b(r.side==="east"?2.2:-2.2,3.05,3.25)}),bathentry:()=>({position:new b(.65,5.15,it(_e.bathSouthPixelY)+3.65),target:new b(-.75,3.05,it(116)+3.45)}),bathplan:()=>({position:new b(0,19.5,(it(116)+it(_e.bathSouthPixelY))/2),target:new b(0,0,(it(116)+it(_e.bathSouthPixelY))/2)}),kitchen:()=>({position:new b(19.2,5.7,13),target:new b(21,3.2,6)}),dining:()=>({position:new b(13,5.8,-1.2),target:new b(12.5,3.4,10.2)}),patio:()=>({position:new b(12.2,5.4,7),target:new b(12.2,3.4,-6.1)}),island:()=>({position:new b(21,8,9.8),target:new b(15.5,1.4,16.4)}),kitchenplan:()=>({position:new b(15.5,24,16),target:new b(15.5,0,16)}),breakfast:()=>({position:new b(10.5,7.2,10.5),target:new b(16.6,2.6,19)}),overhead:()=>({position:new b(2,72,9),target:new b(2,0,9)})};function ef(r){var s;In=null;let e=ke.target.clone(),t=Math.max(18,et.position.distanceTo(e)),n={front:new b(0,0,1),back:new b(0,0,-1),right:new b(1,0,0),left:new b(-1,0,0),top:new b(0,1,0),bottom:new b(0,-1,0)},i=(s=n[r])!=null?s:n.front;et.up.set(0,Math.abs(i.y)>.5?0:1,i.y>.5?-1:i.y<-.5?1:0),et.position.copy(e).addScaledVector(i,t),et.lookAt(e),ke.update()}function _c(r){Ur=r;let e=r==="overhead"||r==="kitchenplan"||r==="bathplan";et.up.set(0,e?0:1,e?-1:0);let t=new URL(window.location.href);t.searchParams.set("option",qe.id),t.searchParams.set("view",Ur),window.history.replaceState({},"",t);let n=Qm[r](qe);In={start:performance.now(),duration:720,fromPosition:et.position.clone(),fromTarget:ke.target.clone(),toPosition:n.position,toTarget:n.target},Kn()}function tf(r){if(!In)return!1;let e=Math.min(1,(r-In.start)/In.duration),t=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;return et.position.lerpVectors(In.fromPosition,In.toPosition,t),ke.target.lerpVectors(In.fromTarget,In.toTarget,t),e>=1&&(In=null),e<1}function Ku(){let r=Math.max(1,Wa.clientWidth),e=Math.max(1,Wa.clientHeight);Et.setSize(r,e,!1),et.aspect=r/e,et.updateProjectionMatrix(),Kn()}var pc=null,mc={frameCount:0,lastRenderTime:0};window.__visualizerRenderStats=mc;function Kn(){pc===null&&(pc=requestAnimationFrame(nf))}function nf(r){pc=null;let e=tf(r),t=ke.update();Et.render(Dn,et),Ga==null||Ga.render(),mc.frameCount+=1,mc.lastRenderTime=r,(e||t)&&Kn()}function rf(){document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>_c(e.dataset.camera))),document.querySelectorAll("[data-kitchen-mode]").forEach(e=>e.addEventListener("click",()=>Km(e.dataset.kitchenMode))),document.querySelectorAll("[data-island-position]").forEach(e=>e.addEventListener("click",()=>Zm(e.dataset.islandPosition))),document.querySelectorAll("[data-island-orientation]").forEach(e=>e.addEventListener("click",()=>Jm(e.dataset.islandOrientation))),["kitchenBeamToggle","kitchenPostToggle","kitchenTableToggle"].forEach(e=>{document.getElementById(e).addEventListener("change",()=>Or(!0))}),document.getElementById("kitchenIslandToggle").addEventListener("change",()=>{ro(),Or(!0)}),["cutawayToggle","planToggle","mudroomToggle","dimensionToggle","ghostToggle"].forEach(e=>document.getElementById(e).addEventListener("change",no)),document.getElementById("bathroomDoorToggle").addEventListener("change",()=>qu(!0)),document.getElementById("showerToggle").addEventListener("change",()=>qm(!0));let r={foyerAway:{src:"assets/Background/listing/photos/12_Foyer-Entrance.jpg",caption:"Existing foyer looking away from the den",alt:"Existing foyer with front door, staircase and living-room opening"},denToFoyer:{src:"assets/Background/listing/photos/11_Living-Room_5.jpg",caption:"Existing den looking toward the foyer and side doors",alt:"Existing den looking toward the foyer and side doors"},livingScale:{src:"assets/Background/listing/photos/03_Living-Room_2.jpg",caption:"Living-room volume opening off the foyer",alt:"Existing living room showing its broad proportions and foyer connection"},window:{src:"assets/Background/listing/photos/10_Living-Room_4.jpg",caption:"Existing den looking toward the north window",alt:"Existing den looking toward the north window"},plan:{src:"assets/Background/floor-plans/first-floor.png",caption:"Approximate first-floor marketing plan",alt:"Approximate first-floor marketing plan"}};document.querySelectorAll("[data-photo]").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll("[data-photo]").forEach(i=>i.classList.toggle("active",i===e));let t=r[e.dataset.photo],n=document.getElementById("referencePhoto");n.src=t.src,n.alt=t.alt,document.getElementById("photoCaption").textContent=t.caption})}),document.getElementById("helpButton").addEventListener("click",()=>document.getElementById("helpDialog").showModal()),document.getElementById("photoExpand").addEventListener("click",()=>{let e=document.getElementById("referencePhoto"),t=document.getElementById("expandedPhoto");t.src=e.src,t.alt=e.alt,document.getElementById("photoDialog").showModal()}),document.querySelectorAll(".dialog-close").forEach(e=>e.addEventListener("click",()=>e.closest("dialog").close())),document.getElementById("screenshotButton").addEventListener("click",()=>{Et.render(Dn,et);let e=document.createElement("a");e.download=`90-hull-option-${qe.id}-kitchen-${Jt}.png`,e.href=Et.domElement.toDataURL("image/png"),e.click()})}Zu();document.querySelectorAll("[data-kitchen-mode]").forEach(r=>r.classList.toggle("active",r.dataset.kitchenMode===Jt));document.querySelectorAll("[data-island-position]").forEach(r=>r.classList.toggle("active",r.dataset.islandPosition===_n));document.querySelectorAll("[data-island-orientation]").forEach(r=>r.classList.toggle("active",r.dataset.islandOrientation===yn));io();rf();vc(qe);Or(!1);Ku();Ga=Fu({canvas:document.getElementById("viewCubeCanvas"),homeButton:document.getElementById("viewCubeHome"),mainCamera:et,controls:ke,onFace:ef,onHome:()=>_c("overhead")});ke.addEventListener("change",Kn);new ResizeObserver(Ku).observe(Wa);Kn();_c(Ur);Dm.classList.add("hidden");window.__visualizerReady=!0;})();
