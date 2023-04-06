import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #d4d4d7;
  height: 100vh;
`;
const CanvasOrigin = styled.canvas`
  outline: red solid;
`;

function Document() {
  const url =
    "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf";

  const getContent = (url: any) => {
    console.log("file", url);

    try {
      window.pdfjsLib.getDocument(url).promise.then(async (pdf: any) => {
        console.log("file", pdf);

        const pageNumber = 1;
        const page = await pdf.getPage(pageNumber);
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const pdfContainer = document.getElementById("test");
        if (context) {
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          page.render(renderContext);
        }
        if (pdfContainer) {
          console.log("eee");

          pdfContainer.appendChild(canvas);
        }
        console.log("pdfContainer ", pdfContainer);
      });
    } catch (error) {
      console.log("dd", error);
    }

    // try {
    //   const pdf = await pdfjs.getDocument(url).promise;
    //   const pageNumber = 1;
    //   const page = await pdf.getPage(pageNumber);

    //   const scale = 1.5;
    //   const viewport = page.getViewport({ scale });
    //   const canvas = document.createElement("canvas");
    //   const context = canvas.getContext("2d");
    //   canvas.height = viewport.height;
    //   canvas.width = viewport.width;
    //   const pdfContainer = document.getElementById("test");
    //   console.log("pdfContainer ", pdfContainer);

    //   if (context) {
    //     const renderContext = {
    //       canvasContext: context,
    //       viewport: viewport,
    //     };
    //     page.render(renderContext);
    //   }
    //   if (pdfContainer) {
    //     console.log("eee");

    //     pdfContainer.appendChild(canvas);
    //   }

    //   console.log("Page rendered");
    // } catch (error) {}
  };

  // getContent(url);
  const [pdfFile, setPdfFile] = useState<string | ArrayBuffer | null>("");

  const handleFileUpload = (e: any) => {};

  const onChange = (e: any) => {
    let selectedFile = e.target.files[0];
    try {
      if (selectedFile) {
        // 透過FileReader，將檔案內容透過readAsDataURL將檔案轉換成DataURI
        let reader = new FileReader();

        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          if (e.target) {
            getContent(e.target.result);

            setPdfFile(e.target.result);
          }
        };
      } else {
        setPdfFile(null);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // const createCanvas = (id: string, className: string) => {
  //   const pdfWrapper = document.getElementById("canvas");
  //   const canvasNew = document.createElement("canvas");
  //   canvasNew.id = id;
  //   canvasNew.className = className;
  //   pdfWrapper?.appendChild(canvasNew);
  // };

  // const renderPdf = (pdf: PDFDocumentProxy, i: any, id: string) => {
  //   pdf.getPage(i).then(function (page: PDFPageProxy) {
  //     const scale = 4;
  //     const viewport = page.getViewport({ scale: scale });

  //     // const canvas = document.getElementById("cavnas");
  //     const canvas = document.createElement("canvas");
  //     const context = canvas.getContext("2d");
  //     // canvas.height = viewport.height;
  //     // canvas.width = viewport.width;

  //     if (context) {
  //       const renderContext = {
  //         canvasContext: context,
  //         viewport: viewport,
  //       };
  //       page.render(renderContext);
  //     }
  //   });
  // };

  // const createSeriesCanvas = (num: any, tem: any) => {
  //   let id = "";
  //   for (let i = 1; i <= num; i++) {
  //     id = tem + i;
  //     createCanvas(id, "pdfClass");
  //   }
  // };

  // const loadPdf = (file: any) => {
  //   pdfjs.getDocument(file).promise.then(function (pdf) {
  //     console.log("file", pdf);

  //     let id = "";
  //     const idTem = "asd";
  //     const pageNum = pdf.numPages;
  //     createSeriesCanvas(pageNum, idTem);
  //     for (let i = 1; i <= pageNum; i++) {
  //       id = idTem + i;
  //       renderPdf(pdf, i, id);
  //     }
  //   });
  // };

  // loadPdf(url);

  return (
    <Wrapper id="test">
      <form action="" onChange={handleFileUpload}>
        <input type="file" accept="application/pdf" onChange={onChange} />
      </form>
      <CanvasOrigin id="canvas" />
    </Wrapper>
  );
}

export default Document;
