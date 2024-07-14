import { useRouter } from nextrouter;
import { useEffect } from react;
import { dataKamus } from @libkamusdataKamus;
import { faSadCry } from @fortawesomefree-solid-svg-icons;
import Prism from prismjs;
import HandleCopyCode from ...componentshandleCopyCode;
import DisplayExampleCode from ...componentsdisplayExampleCode;
import { FontAwesomeIcon } from @fortawesomereact-fontawesome;
import { faJs } from @fortawesomefree-brands-svg-icons;
import @libprismprism.css;
const KamusDetail = () = {
  let getDataKamus;
  const router = useRouter();
  const { id } = router.query;
  useEffect(() = {
    Prism.highlightAll();
  }, [getDataKamus]);
  function findDataKamus(id) {
    if (!isNaN(parseInt(id))) return false;
    return dataKamus.find((data) = data.kosakata.toLowerCase() === id.toLowerCase());
  }
  if (!id) {
    return div
      strong className=text-3xl font-semibold top-12 left-12 -translate-x-12 -translate-y-12 absoluteLoading...FontAwesomeIcon icon={faSadCry} className=text-5xl strongdiv
  } else {
    if (!findDataKamus(id) && !dataKamus[parseInt(id) - 1]) {
      return div className=mt-56 text-center
        strong className=text-2xl mdtext-3xl font-semiboldKosakata tidak ditemukan... FontAwesomeIcon icon={faSadCry} className=text-2xl mdtext-5xl strongdiv
    }
    else {
      getDataKamus = findDataKamus(id)  findDataKamus(id)  dataKamus[parseInt(id) - 1]
    }
  }

  return (div className=max-w-screen-xl px-4 mx-auto mt-36
    div
      className={bg-primary w-full p-4 mdpy-8 text-secondary rounded-md mdpx-6 overflow-x-hidden text-left  mx-auto flex flex-col gap-2 border border-secondary z-10 
      }
    
      div className=flex items-center flex-wrap
        div
          p className=text-pink font-semibold
            ID  span className=text-secondary text-base mdtext-lg{getDataKamus.id}span
            br 
            Kosakata { }
            span className=text-secondary text-base mdtext-lg 
              {getDataKamus.kosakata.toUpperCase()}
            span
          p
        div
      div
      hr className=border-secondary 
      div className=font-light text-sm mdtext-base overflow-hidden
        h1 className=mt-3 mb-1 font-semibold text-lg text-pink
          Pengertian 
        h1

        span
          className={`mb-3 min-h-11 mdmin-h-12`}
        
          {getDataKamus.pengertian}
        span
        h1 className= font-semibold mt-4 text-lg text-pinkCatatan h1

        ul
          className={`text-sm line-clamp-1 mdline-clamp-2
              font-light`}
        
          {getDataKamus.note.map((item, index) = (
            li key={index}
              span className=mx-2•span {item}
            li
          ))}
        ul
      div

      {getDataKamus.kode  (
        div className=rounded-md

          h1 className=py-3 font-bold text-lg text-pink
            Contoh Kode 
          h1
          div className=border rounded-md
            div
              className={`border border-pink text-white flex items-center bg-primary px-4 py-2 rounded-t-md text-sm font-light`}
            
              FontAwesomeIcon
                icon={faJs}
                className=mr-2 text-yellow-300 rounded-full overflow-hidden size-4
              
              spanJavascriptspan
              HandleCopyCode text={getDataKamus.contohkode} 
            div
            DisplayExampleCode exampleCode={getDataKamus.contohkode} 
          div
        div
      )  (
        div className=pt-5
          h1 className= font-bold text-lg text-pinkContoh h1
          span className=line-clamp-2 pb-2 font-light
            {dataKamus.contohkode}
          span
        div
      )}
    div
  div )
}
export default KamusDetail;