const Register = () => {
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

                            <div className="form-outline mb-4 d-flex gap-3">
                                <div>
                                    <label className="form-label" for="firstName">First name</label>
                                    <input type="password" id="firstName" class="form-control form-control-lg" />
                                </div>
                                <div>
                                    <label className="form-label" for="lastName">Last name</label>
                                    <input type="password" id="lastName" class="form-control form-control-lg" />
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="email">Email address</label>
                                <input type="email" id="email" class="form-control form-control-lg" />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="password">Password</label>
                                <input type="password" id="password" class="form-control form-control-lg" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Register</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;