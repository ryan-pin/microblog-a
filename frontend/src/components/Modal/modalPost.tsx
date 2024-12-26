import { useState } from "react";
import axiosInstance from "../../services/axiosinstance";
import './modalcss.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalPost( {isOpen, onClose} : ModalProps) {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    async function CreatePost() {
      await axiosInstance.post("/login/",{ titulo: titulo, descricao: descricao, imagem: null  });
    }

  if (isOpen) {
    return (
      <>
      <div className="overlay">
        <div
          className="div br-modal medium modal-fixed"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modalalerttitle"
        >
          <div className="br-modal-header">
            <div className="modal-title" id="modalalerttitle">
              Faça uma publicação
            </div>
            <button
              className="br-button close circle"
              type="button"
              data-dismiss="br-modal"
              aria-label="Fechar"
              onClick={onClose}
            >
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <form action="">
          <div className="br-modal-body">
              <div className="br-input">
                <label htmlFor="input-default">Titulo </label>
                <input
                  id="input-default"
                  type="text"
                  placeholder="Escreva um titulo"
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </div>

            <div className="br-textarea">
              <label htmlFor="textarea-id1">Descrição</label>
              <textarea
                id="textarea-id1"
                placeholder="Escreva aqui a descrição"
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
            </div>   
          </div>
          </form>
          <div className="br-modal-footer justify-content-end">
            <button className="br-button secondary" type="button" onClick={onClose}>
              Cancelar
            </button>
            <button className="br-button primary ml-2" type="button" onClick={CreatePost}>
              Publicar
            </button>
          </div>
        </div>
        </div>
      </>
    );
  }
}
export default ModalPost;
