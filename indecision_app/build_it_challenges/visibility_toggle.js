// Visibility Toggle

// Title and Button show details
// Toggle some details you can now see
// the button text changes from hide/show depending on details
let visibility = false;

const toggle = () => {
   visibility = !visibility;
   render();
};

const render = () => {
    const details = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                <p>'Hey here are some details'</p>
                </div>
            )} 
        </div>

    );

    ReactDOM.render(details, document.getElementById('app'));
};

render();