##### Jangan lupa untuk memasukkan apikey kamu di src/apikey.json, jika kamu tidak memiliki apikey, silahkan daftar terlebih dahulu [disini](https://api.xteam.xyz)

---------------------------

##### Penggunaan bot ini ribet karena saya tidak suka sesuatu yang simpel, jika anda bingung silahkan ketik #tutorial atau


<a href="https://wa.me/62887436568613?text=Hii+bisa+tolong+jelaskan+fitur+bot+kamu"><img src="https://img.shields.io/badge/WassapMe-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />

---------------------------

![Ayameverse](https://user-images.githubusercontent.com/84166927/150901343-6c08ad60-fd86-46f5-98b6-36f07edec7b3.jpg)

Ribet WhatsApp Bot

## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
apt install imagemagick -y
git clone https://github.com/unx21/ayame
cd ayame
npm install
```


```
---------------------------
cd ayame
bash install.sh

*It might help if the regular install doesn't work 
```


## INSTALL ON TERMUX WITH UBUNTU

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/unx21/ayame
cd ayame
npm install
npm update
```

---------

## Run

```bash
node ayame
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--pconly`

If that chat not from private bot, bot will ignore

### `--gconly`

If that chat not from group, bot will ignore

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--db <json-server-url>`

Use external db instead of local db, 
Example Server `https://json-server.nurutomo.repl.co/`
Code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

The server should have like this specification

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{ 
  data: {}
}
```

### `--big-qr`

If small qr unicode doesn't support

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------


#### Big Thanks To : 

[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) | [![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming) | [![Kokoronationz](https://github.com/Kokoronationz.png?size=100)](https://github.com/Kokoronationz) | [![unx](https://github.com/unx21.png?size=100)](https://github.com/unx21) |
----|----|----|----|
[Nurutomo](https://github.com/Nurutomo) | [BochilGaming](https://github.com/BochilGaming) | [Kokoronationz](https://github.com/Kokoronationz) | [U n x](https://github.com/unx21) |
Original Creator | RPG Creator | Source Repository | Ayame SIMP |
