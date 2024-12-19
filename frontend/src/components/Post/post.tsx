export interface PostType {
  name: string;
  house: string;
  image: string;
}

function Post({ name, house, image }: PostType) {

  return (
      <div className="col-sm-3">
        <div className="br-card">
          <div className="card-header">
            <div className="d-flex">
              <span className="br-avatar mt-1" title="Fulano da Silva">
                <span className="content">
                  <img src={image} />
                </span>
              </span>
              <div className="ml-3">
                <div className="text-weight-semi-bold text-up-02">
                  {name}
                </div>
                <div>{house}</div>
              </div>
              <div className="ml-auto">
                <button
                  className="br-button circle"
                  type="button"
                  aria-label="Ícone ilustrativo"
                >
                  <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-content">
            <img src="https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg651f9f755ee9f2.22660263.jpg%3FlastEdited%3D1696571256&w=600&h=600&f=webp" alt="gato" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              perferendis nam porro atque ex at, numquam non optio ab eveniet
              error vel ad exercitationem, earum et fugiat recusandae harum?
              Assumenda.
            </p>
          </div>
          <div className="card-footer">
            <div className="d-flex">
              <div>
                <button className="br-button" type="button">
                  Comentar
                </button>
              </div>
              <div className="ml-auto">
                <button
                  className="br-button circle"
                  type="button"
                  aria-label="Ícone ilustrativo"
                >
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </button>
                <button
                  className="br-button circle"
                  type="button"
                  aria-label="Ícone ilustrativo 3"
                >
                  <i className="fas fa-share-alt" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Post;
