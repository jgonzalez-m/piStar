// 
// connect se encarga de comunicarse con el back-end
// 


var modelosMDD;


plug.connect=function(){//configurar conexion con el rest
    return {
        getModel: async function (data) {
                try {
                      let url='http://localhost:3000/modelos?'+$.param(data); //añade el parametro data modificar en version final
                      console.log(url);
                      const res = await fetch(url,{
                        method: 'GET'
                                               
                      });
                      const resDB = await res.json();
                      console.log(resDB);//borrar
                      plug.controlador.saveLS("data",resDB);
                      return resDB;
                } catch (e) {
                      console.log("no se encuentra el proyecto");
                      console.log(e);// algo ha ido mal
                      return Error;
                }
              
        },
        post: async function (url,data) {
            try {
                  const res = await fetch(url,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                    body:await JSON.stringify(data)
                  });
                  const resDB = await res.json();
                  console.log('funciona conexion con rest de piStar');
                  console.log(resDB);//borrar
                  return resDB;
            } catch (e) {
                  console.log(e);
                  console.log("no esta conectando el verificador");
                  return Error;// algo ha ido mal
            }
          
        },
        save_model: async function (data) {
            try {
                  const res = await fetch('http://localhost:3000/modelos/save',{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                    body:JSON.stringify(data)
                  });
                  const resDB = await res.json();
                  console.log('funciona conexion con rest de piStar')
                  console.log(resDB)
                  return resDB;
            } catch (e) {
                  return Eroor;
                  // algo ha ido mal
            }
          
        }
    }
}();