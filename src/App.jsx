import RootLayout from "./components/layout/index";

function App() {
  return (
    <>
      <RootLayout.Grid>
        <RootLayout.Menu />
        <RootLayout.Header />
        <RootLayout.Main />
      </RootLayout.Grid>
    </>
  );
}

export default App;
