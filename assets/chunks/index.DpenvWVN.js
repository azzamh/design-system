import{m as e,n as c}from"./utils.CaI_woCu.js";const V=e.__createMock__("fs.Dir"),Y=e.__createMock__("fs.Dirent"),X=e.__createMock__("fs.Stats"),j=e.__createMock__("fs.ReadStream"),g=e.__createMock__("fs.WriteStream"),A=e.__createMock__("fs.FileReadStream"),x=e.__createMock__("fs.FileWriteStream"),B=e.__createMock__("fs.StatsFs"),G=Object.freeze(Object.defineProperty({__proto__:null,Dir:V,Dirent:Y,FileReadStream:A,FileWriteStream:x,ReadStream:j,Stats:X,StatsFs:B,WriteStream:g},Symbol.toStringTag,{value:"Module"})),H=0,z=4,J=2,q=1,f=Object.create({UV_FS_SYMLINK_DIR:1,UV_FS_SYMLINK_JUNCTION:2,O_RDONLY:0,O_WRONLY:1,O_RDWR:2,UV_DIRENT_UNKNOWN:0,UV_DIRENT_FILE:1,UV_DIRENT_DIR:2,UV_DIRENT_LINK:3,UV_DIRENT_FIFO:4,UV_DIRENT_SOCKET:5,UV_DIRENT_CHAR:6,UV_DIRENT_BLOCK:7,S_IFMT:61440,S_IFREG:32768,S_IFDIR:16384,S_IFCHR:8192,S_IFBLK:24576,S_IFIFO:4096,S_IFLNK:40960,S_IFSOCK:49152,O_CREAT:64,O_EXCL:128,UV_FS_O_FILEMAP:0,O_NOCTTY:256,O_TRUNC:512,O_APPEND:1024,O_DIRECTORY:65536,O_NOATIME:262144,O_NOFOLLOW:131072,O_SYNC:1052672,O_DSYNC:4096,O_DIRECT:16384,O_NONBLOCK:2048,S_IRWXU:448,S_IRUSR:256,S_IWUSR:128,S_IXUSR:64,S_IRWXG:56,S_IRGRP:32,S_IWGRP:16,S_IXGRP:8,S_IRWXO:7,S_IROTH:4,S_IWOTH:2,S_IXOTH:1,F_OK:0,R_OK:4,W_OK:2,X_OK:1,UV_FS_COPYFILE_EXCL:1,COPYFILE_EXCL:1,UV_FS_COPYFILE_FICLONE:2,COPYFILE_FICLONE:2,UV_FS_COPYFILE_FICLONE_FORCE:4,COPYFILE_FICLONE_FORCE:4}),Q=Object.freeze(Object.defineProperty({__proto__:null,F_OK:H,R_OK:z,W_OK:J,X_OK:q,constants:f},Symbol.toStringTag,{value:"Module"})),i=c("fs.access"),_=c("fs.copyFile"),S=c("fs.cp"),l=c("fs.open"),y=c("fs.opendir"),m=c("fs.rename"),d=c("fs.truncate"),p=c("fs.rm"),F=c("fs.rmdir"),O=c("fs.mkdir"),I=c("fs.readdir"),u=c("fs.readlink"),h=c("fs.symlink"),k=c("fs.lstat"),R=c("fs.stat"),w=c("fs.link"),E=c("fs.unlink"),N=c("fs.chmod"),$=c("fs.lchmod"),C=c("fs.lchown"),T=c("fs.chown"),L=c("fs.utimes"),U=c("fs.lutimes"),D=c("fs.realpath"),K=c("fs.mkdtemp"),W=c("fs.writeFile"),b=c("fs.appendFile"),M=c("fs.readFile"),Z=c("fs.watch"),P=c("fs.statfs"),cc={},nc=Object.freeze(Object.defineProperty({__proto__:null,access:i,appendFile:b,chmod:N,chown:T,constants:f,copyFile:_,cp:S,default:cc,lchmod:$,lchown:C,link:w,lstat:k,lutimes:U,mkdir:O,mkdtemp:K,open:l,opendir:y,readFile:M,readdir:I,readlink:u,realpath:D,rename:m,rm:p,rmdir:F,stat:R,statfs:P,symlink:h,truncate:d,unlink:E,utimes:L,watch:Z,writeFile:W},Symbol.toStringTag,{value:"Module"}));function t(o){const s=c(o);return s.__promisify__=()=>c(o+".__promisify__"),s.native=s,s}function n(o){const s=function(...v){const a=v.pop();o().catch(r=>a(r)).then(r=>a(void 0,r))};return s.__promisify__=o,s.native=s,s}const tc=n(i),sc=n(b),ec=n(T),oc=n(N),rc=n(_),ac=n(S),fc=n(C),ic=n($),_c=n(w),Sc=n(k),lc=n(U),yc=n(O),mc=n(K),dc=n(D),pc=n(l),Fc=n(y),Oc=n(I),Ic=n(M),uc=n(u),hc=n(m),kc=n(p),Rc=n(F),wc=n(R),Ec=n(h),Nc=n(d),$c=n(E),Cc=n(L),Tc=n(W),Lc=n(P),Uc=t("fs.close"),Dc=t("fs.createReadStream"),Kc=t("fs.createWriteStream"),Wc=t("fs.exists"),bc=t("fs.fchown"),Mc=t("fs.fchmod"),Pc=t("fs.fdatasync"),vc=t("fs.fstat"),Vc=t("fs.fsync"),Yc=t("fs.ftruncate"),Xc=t("fs.futimes"),jc=t("fs.lstatSync"),gc=t("fs.read"),Ac=t("fs.readv"),xc=t("fs.realpathSync"),Bc=t("fs.statSync"),Gc=t("fs.unwatchFile"),Hc=t("fs.watch"),zc=t("fs.watchFile"),Jc=t("fs.write"),qc=t("fs.writev"),Qc=t("fs._toUnixTimestamp"),Zc=t("fs.openAsBlob"),cn=c("fs.appendFileSync"),nn=c("fs.accessSync"),tn=c("fs.chownSync"),sn=c("fs.chmodSync"),en=c("fs.closeSync"),on=c("fs.copyFileSync"),rn=c("fs.cpSync"),an=()=>!1,fn=c("fs.fchownSync"),_n=c("fs.fchmodSync"),Sn=c("fs.fdatasyncSync"),ln=c("fs.fstatSync"),yn=c("fs.fsyncSync"),mn=c("fs.ftruncateSync"),dn=c("fs.futimesSync"),pn=c("fs.lchownSync"),Fn=c("fs.lchmodSync"),On=c("fs.linkSync"),In=c("fs.lutimesSync"),un=c("fs.mkdirSync"),hn=c("fs.mkdtempSync"),kn=c("fs.openSync"),Rn=c("fs.opendirSync"),wn=c("fs.readdirSync"),En=c("fs.readSync"),Nn=c("fs.readvSync"),$n=c("fs.readFileSync"),Cn=c("fs.readlinkSync"),Tn=c("fs.renameSync"),Ln=c("fs.rmSync"),Un=c("fs.rmdirSync"),Dn=c("fs.symlinkSync"),Kn=c("fs.truncateSync"),Wn=c("fs.unlinkSync"),bn=c("fs.utimesSync"),Mn=c("fs.writeFileSync"),Pn=c("fs.writeSync"),vn=c("fs.writevSync"),Vn=c("fs.statfsSync"),Yn=Object.freeze(Object.defineProperty({__proto__:null,_toUnixTimestamp:Qc,access:tc,accessSync:nn,appendFile:sc,appendFileSync:cn,chmod:oc,chmodSync:sn,chown:ec,chownSync:tn,close:Uc,closeSync:en,copyFile:rc,copyFileSync:on,cp:ac,cpSync:rn,createReadStream:Dc,createWriteStream:Kc,exists:Wc,existsSync:an,fchmod:Mc,fchmodSync:_n,fchown:bc,fchownSync:fn,fdatasync:Pc,fdatasyncSync:Sn,fstat:vc,fstatSync:ln,fsync:Vc,fsyncSync:yn,ftruncate:Yc,ftruncateSync:mn,futimes:Xc,futimesSync:dn,lchmod:ic,lchmodSync:Fn,lchown:fc,lchownSync:pn,link:_c,linkSync:On,lstat:Sc,lstatSync:jc,lutimes:lc,lutimesSync:In,mkdir:yc,mkdirSync:un,mkdtemp:mc,mkdtempSync:hn,open:pc,openAsBlob:Zc,openSync:kn,opendir:Fc,opendirSync:Rn,read:gc,readFile:Ic,readFileSync:$n,readSync:En,readdir:Oc,readdirSync:wn,readlink:uc,readlinkSync:Cn,readv:Ac,readvSync:Nn,realpath:dc,realpathSync:xc,rename:hc,renameSync:Tn,rm:kc,rmSync:Ln,rmdir:Rc,rmdirSync:Un,stat:wc,statSync:Bc,statfs:Lc,statfsSync:Vn,symlink:Ec,symlinkSync:Dn,truncate:Nc,truncateSync:Kn,unlink:$c,unlinkSync:Wn,unwatchFile:Gc,utimes:Cc,utimesSync:bn,watch:Hc,watchFile:zc,write:Jc,writeFile:Tc,writeFileSync:Mn,writeSync:Pn,writev:qc,writevSync:vn},Symbol.toStringTag,{value:"Module"})),Xn=nc,gn={...G,...Q,...Yn,promises:Xn};export{V as Dir,Y as Dirent,H as F_OK,A as FileReadStream,x as FileWriteStream,z as R_OK,j as ReadStream,X as Stats,B as StatsFs,J as W_OK,g as WriteStream,q as X_OK,Qc as _toUnixTimestamp,tc as access,nn as accessSync,sc as appendFile,cn as appendFileSync,oc as chmod,sn as chmodSync,ec as chown,tn as chownSync,Uc as close,en as closeSync,f as constants,rc as copyFile,on as copyFileSync,ac as cp,rn as cpSync,Dc as createReadStream,Kc as createWriteStream,gn as default,Wc as exists,an as existsSync,Mc as fchmod,_n as fchmodSync,bc as fchown,fn as fchownSync,Pc as fdatasync,Sn as fdatasyncSync,vc as fstat,ln as fstatSync,Vc as fsync,yn as fsyncSync,Yc as ftruncate,mn as ftruncateSync,Xc as futimes,dn as futimesSync,ic as lchmod,Fn as lchmodSync,fc as lchown,pn as lchownSync,_c as link,On as linkSync,Sc as lstat,jc as lstatSync,lc as lutimes,In as lutimesSync,yc as mkdir,un as mkdirSync,mc as mkdtemp,hn as mkdtempSync,pc as open,Zc as openAsBlob,kn as openSync,Fc as opendir,Rn as opendirSync,Xn as promises,gc as read,Ic as readFile,$n as readFileSync,En as readSync,Oc as readdir,wn as readdirSync,uc as readlink,Cn as readlinkSync,Ac as readv,Nn as readvSync,dc as realpath,xc as realpathSync,hc as rename,Tn as renameSync,kc as rm,Ln as rmSync,Rc as rmdir,Un as rmdirSync,wc as stat,Bc as statSync,Lc as statfs,Vn as statfsSync,Ec as symlink,Dn as symlinkSync,Nc as truncate,Kn as truncateSync,$c as unlink,Wn as unlinkSync,Gc as unwatchFile,Cc as utimes,bn as utimesSync,Hc as watch,zc as watchFile,Jc as write,Tc as writeFile,Mn as writeFileSync,Pn as writeSync,qc as writev,vn as writevSync};