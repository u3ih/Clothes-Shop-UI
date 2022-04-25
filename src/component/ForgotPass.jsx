const ForgotPass = () => {
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid" alt="Phone image" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form>
                            <div className="form-outline mb-4">
                                <label className="form-label" for="email">Email address</label>
                                <input type="email" id="email" class="form-control form-control-lg" placeholder="Enter your email"/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Password retrieval</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPass;