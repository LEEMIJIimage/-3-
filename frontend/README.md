### 초기 시작
+ `npm install` 명령어를 통해 node-modules를 설치합니다.
+ `npm start`를 통해 실행합니다. 

### 코드 작성 
+ vs code 마켓 플레이스에서 `ESLint`를 다운로드 합니다.
+ vs code 마켓 플레이스에서 `Prettier - Code formatter`를 다운로드 합니다.
+ `Ctrl + , `(컨트롤 키를 누른채로 , 키 누르기) 를 눌러 설정 창을 열고 상단 JSON 파일 추가 아이콘을 클릭한 뒤
```JSON
{
    // Set the default
    "editor.formatOnSave": false,
    // Enable per-language
    "[javascript]": {
      "editor.formatOnSave": true
    },
    "editor.codeActionsOnSave": {
      // For ESLint
      "source.fixAll.eslint": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "workbench.editorAssociations": {
      "*.jar": "default"
    }
}
```
+ 위 코드를 붙여 넣은 후 저장, vs code 껐다 켜기

***