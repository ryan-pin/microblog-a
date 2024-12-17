function UserCard(){
    return (

<div className="col-sm-6 col-md-4 col-lg-3 ml-3">
  <div className="br-card">
    <div className="card-header">
      <div className="d-flex"><span className="br-avatar mt-1" title="Fulano da Silva"><span className="content"><img src="https://picsum.photos/id/823/400"/></span></span>
        <div className="ml-3">
          <div className="text-weight-semi-bold text-up-02">Maria Amorim</div>
          <div>UX Designer</div>
        </div>
      </div>
    </div>

    <div className="card-footer">
      <div className="text-right">

      </div>
        <div className="br-list mt-3">
          <div className="br-item">
            <div className="row">
              <div className="col-auto"><i className="fas fa-heartbeat" aria-hidden="true"></i>
              </div>
              <div className="col">
                <p className="m-0">Publicações</p>
              </div>
            </div>
          </div><span className="br-divider"></span>
          <div className="br-item">
            <div className="row">
              <div className="col-auto"><i className="fas fa-heartbeat" aria-hidden="true"></i>
              </div>
              <div className="col">
                <p className="m-0">Amigos</p>
              </div>
            </div>
          </div><span className="br-divider"></span>
          <div className="br-item">
            <div className="row">
              <div className="col-auto"><i className="fas fa-heartbeat" aria-hidden="true"></i>
              </div>
              <div className="col">
                <p className="m-0">Explorar</p>
              </div>
            </div>
          </div>
        </div>
        <button className="br-button primary">Criar publicação</button>
    </div>
  </div>
</div>

    )
}

export default UserCard;