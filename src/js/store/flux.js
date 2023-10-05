const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets : [],
			contador: 0,
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people/")
				.then(response => response.json())
				.then((data)=> setStore({characters : data.results}));
				fetch("https://swapi.dev/api/planets/")
				.then(response => response.json())
				.then((data)=> setStore({planets : data.results}))
			},
			  
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			anadir : (nombre) => {
				const store = getStore();

				if (!(store.favoritos.includes(nombre))){
					setStore({favoritos : [...store.favoritos, nombre]})
					setStore({ contador : store.favoritos.length})
				}
			},
			borrar : (id) => {
				const store = getStore();
				setStore({favoritos : store.favoritos.filter((item,index) =>  index != id)})
				setStore({ contador : store.favoritos.length})
			}
		}
	};
};

export default getState;
