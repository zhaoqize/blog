"补全
autocmd FileType javascrīpt set omnifunc=javascrīptcomplete#CompleteJS //js补全
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags //html补全
autocmd FileType css set omnifunc=csscomplete#CompleteCSS //css补全


"快捷键设置
map <C-A> ggVGY 

"---实用设置---
set showmatch
set shortmess=atI "不显示乌干达儿童
set tabstop=4 "设置tab缩进
set shiftwidth=4
set foldenable "启动折叠
" 设置当文件被改动时自动载入
set autoread
" 在处理未保存或只读文件的时候，弹出确认
set confirm
" 显示行号
set number
"搜索忽略大小写
set ignorecase
"编码设置
set enc=utf-8
set fencs=utf-8,ucs-bom,shift-jis,gb18030,gbk,gb2312,cp936 

"---补全---
"代码补全 
set completeopt=preview,menu
"自动补全
:inoremap ( ()<ESC>i
:inoremap ) <c-r>=ClosePair(')')<CR>
:inoremap { {<CR>}<ESC>O
:inoremap } <c-r>=ClosePair('}')<CR>
:inoremap [ []<ESC>i
:inoremap ] <c-r>=ClosePair(']')<CR>
:inoremap " ""<ESC>i
:inoremap ' ''<ESC>i
function! ClosePair(char)
    if getline('.')[col('.') - 1] == a:char
        return "\<Right>"
    else
        return a:char
    endif
endfunction
filetype plugin indent on 
"打开文件类型检测, 加了这句才可以用智能补全
set completeopt=longest,menu
