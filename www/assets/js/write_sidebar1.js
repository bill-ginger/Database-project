var sidebarele = document.getElementsByClassName('sidebar');
sidebarele[0].innerHTML = ' ' +
    '<div class="nano">                ' +
    '<div class="nano-content">                    ' +
    '<div class="logo">                        、' +
    '<a href="index1.html"> <img src="assets/images/logo_DB.jpg" alt="logo" width="60" height="60"></a>  ' +
    '</div>                    ' +
    '<ul>                        ' +
        '<li><a href="index1.html"><i class="ti-home"></i> 主页 </a></li>' +
        '<li><a class="sidebar-sub-toggle"><i class="ti-bar-chart-alt"></i> 操作 <span class="sidebar-collapse-icon ti-angle-down"></span></a>' +
            '<ul>                                ' +
                '<li><a href="searchpaper.html">文献库查询</a></li>                              ' +
                '<li><a href="add_paper.html">上传文献</a></li>                             ' +
                '<li><a href="collection.html">收藏夹</a></li>                             ' +
            '</ul>                        ' +
        '</li>                        ' +
        '</li>       <li><a><i class="ti-close"></i> 注销</a></li>                             ' +
    '</ul>' +
    '</div>            ' +
    '</div>';