# Dockerize Backend Simple WMS

- Pull image mysql
- Pull image redis
- Rubah sedikit kodingan di app.js untuk mencoba redis
- Buat compose.yml
- Di dalam compose.yml, target file env dan assign nilai envnya
- Buat .dockerignore dengan isi node_modules supaya menghindari error,
- Di dalam compose.yml, nama host menjadi nama service mysql
- Jangan lupa ngebind port 3306 pada mysql, supaya tidak error
- Setelah selesai compose up, buka shell be-wms
- Kemudian npx sequelize-cli db:create -> db:migrate -> db:seed:all
- Jalankan localhost:3000 untuk melihat contoh redis
