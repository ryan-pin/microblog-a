function ModalPost() {
  return (
    <>
      <div
        className="div br-modal medium"
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
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="br-modal-body">
            <div className="br-input">
              <label htmlFor="input-default">Titulo </label>
              <input
                id="input-default"
                type="text"
                placeholder="Escreva um titulo"
              />
            </div>

          <div className="br-textarea">
            <label htmlFor="textarea-id1">Descrição</label>
            <textarea
              id="textarea-id1"
              placeholder="Escreva aqui a descrição"
            ></textarea>
          </div>
        </div>
        <div className="br-modal-footer justify-content-end">
          <button className="br-button secondary" type="button">
            Cancelar
          </button>
          <button className="br-button primary ml-2" type="button">
            Publicar
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalPost;
