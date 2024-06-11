# Usa la imagen oficial de Apache
FROM httpd:2.4

# Copia tu sitio web en el directorio raíz de Apache
COPY ./ /usr/local/apache2/htdocs/

# Expone el puerto 80 para acceder al servidor web
EXPOSE 80


# * comando para crear el contenedor
# docker build -t nombreImagen .
# docker run -d -p 192.168.1.100:80:80 --name nombreContenedor nombreImagen
