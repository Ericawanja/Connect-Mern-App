import "./App.css";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <div className="App">
      <TopNavbar />

      <div className="bg-slate-100 w-full h-screen grid grid-cols-[200px_minmax(600px,_1fr)_200px] gap-2 p-7">
        <div className="bg-white">Left</div>
        <div className="bg-white">
          <div className="postWidget px-5">
            <div className="top  py-4 grid grid-cols-[10%_90%] gap-2 justify-center items-center">
              <span className="w-20">
                <img
                  src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
              </span>
              <span>
                <input type="text" className="bg-slate-100 w-full p-2 rounded-3xl"  placeholder='Post'/>
              </span>
            </div>
            <div className="flex justify-end">
            <button class="rounded-full bg-teal-400 px-4 py-1 text-white">Post</button>
            </div>
          </div>
          <div>
          posts
          </div>
        </div>
        <div className="bg-white">Right</div>
      </div>
    </div>
  );
}

export default App;
