import './StyleFolder/main.css';

function App() {
  return (
    <div className="App">
      <body>

<header>
    <h1>Ressursarktiv</h1>
</header>



<nav class="container">
  <button class="tablinks" id="HTMLKnapp">HTML</button>
  <button class="tablinks" id="CSSKnapp">CSS</button>
  <button class="tablinks" id="JavaKnapp">JavaScript</button>
  <button class="tablinks" id="ReactKnapp">React</button>
  <button class="tablinks" id="SanityKnapp">Sanity and headless CMS</button>

</nav>

<main>
 
<div id="tabcontent" class="tabcontent">
    <h2>Velkommen til Arbeidskrav 3</h2>
</div>
</main>

</body>
    </div>
  );
}

export default App;
