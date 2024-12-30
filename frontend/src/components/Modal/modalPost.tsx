import { useState } from "react";
import axiosInstance from "../../services/axiosinstance";
import "./modalcss.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalPost({ isOpen, onClose }: ModalProps) {
  // const [titulo, setTitulo] = useState("");
  // const [descricao, setDescricao] = useState("");

  const [form, setForm] = useState({
    titulo: "",
    imagem: "",
    descricao: "",
  });

  const [error, setError] = useState("");

  // erro 401
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/publicacao/", form, {
        headers: {
          "Content-Type": "multipart/form-data", // Certifique-se de que o formato é JSON
        },
      });
      console.log("Post enviado com sucesso:", response.data);
      alert("Post enviado com sucesso!");
    } catch (error) {
      setError("Erro ao enviar o post. Tente novamente.");
      console.error(error);
    }
  };

  // async function CreatePost() {
  //   await axiosInstance.post("/login/", form);
  // }

  if (isOpen) {
    return (
      <>
        <div className="overlay">
          <form
            onSubmit={handleSubmit}
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
                    onChange={(e) =>
                      setForm({ ...form, titulo: e.target.value })
                    }
                  />
                </div>

                <div className="br-textarea">
                  <label htmlFor="textarea-id1">Descrição</label>
                  <textarea
                    id="textarea-id1"
                    placeholder="Escreva aqui a descrição"
                    onChange={(e) =>
                      setForm({ ...form, descricao: e.target.value })
                    }
                  ></textarea>
                </div>
                {error && <div className="error-message">{error}</div>}
              </div>
            </form>
            <div className="br-modal-footer justify-content-end">
              <button
                className="br-button secondary"
                type="button"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button className="br-button primary ml-2" type="submit">
                Publicar
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default ModalPost;
