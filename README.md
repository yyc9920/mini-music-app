# React Music WebApp Tutorial

## Prerequisites

### Installation

#### Windows

- Install Chocolatey [(Link)](https://chocolatey.org/install)
    - Powershell을 관리자 권한으로 실행
    - 아래 커맨드를 입력
        ```powershell
        Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
        ```
    - ```choco -v``` 실행하여 소프트웨어 버전이 출력되면 정상적으로 다운로드 완료

- Install node.js
    - Powershell에서 아래 커맨드 실행
        ```powershell
        choco install nodejs
        ```

#### Mac

- Install Homebrew [(Link)](https://brew.sh)
  - 터미널을 열고 아래 커맨드 실행
    ```bash
    $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

- Install node.js
  - 터미널을 열고 아래 커맨드 실행
    ```bash
    $ brew install node
    ```

#### Linux

- Install node.js
  - 터미널을 열고 아래 커맨드 실행
    ```bash
    sudo apt install node
    ```

### create-react-app
- 프로젝트를 시작하기 원하는 폴더에서 아래 커맨드 실행
    ```bash
    npx create-react-app my-app
    ```

