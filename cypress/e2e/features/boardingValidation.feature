# language: es
Característica: Validacion de embarque
    Característica Validacion de embarque con autenticacion por PIN

  Antecedentes:
    Dado el usuario ingresa al sitio web selaski en en busqueda de embarque

  Escenario: Busqueda de filtrado de embarque
    Cuando el usuario ingresa un pin valido y da click en ingresar
      | pin  |
      | valido |
    Y el usuario quiere buscar "Prueba 1" filtrando por embarque
    Entonces el usuario deberia ver el embarque buscado correctamente

  Escenario: Pin incorrecto
    Cuando el usuario ingresa un pin invalido y da click en ingresar
      | pin  |
      | invalido |
    Entonces el usuario deberia ver el mensaje de pin incorrecto

  Escenario: Busqueda de filtrado de embarque sin resultados
    Cuando el usuario ingresa un pin valido y da click en ingresar
      | pin  |
      | valido |
    Y el usuario quiere buscar "Prueba 2" filtrando por embarque
    Entonces el usuario deberia ver el mensaje de "Sin datos para mostrar"