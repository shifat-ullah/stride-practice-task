export default function DashboardHome() {
  return <div>
    <div className="hero min-h-screen w-full" style={{width:'1100px', height:'500px', backgroundImage: 'url(https://img.freepik.com/free-photo/pizza-placed-wooden-plate_1150-24395.jpg?t=st=1716719948~exp=1716723548~hmac=b79ad9d82b4ca6c006e0869dc780cfd10b59f7769d9299b1dfdaa47814617474&w=740)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-[700px]">
          <h1 className="mb-5 text-5xl w-full  font-bold">Welcome to Dashboard</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </div>;
}
