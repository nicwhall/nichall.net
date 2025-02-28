(function (d, c) {
  function a(a, b, c, f) {
    var d = new XMLHttpRequest();
    a = a.toLowerCase();
    d.onreadystatechange = function () {
      4 == d.readyState &&
        (d.responseText && 400 > d.status
          ? b(d.responseText)
          : c && c(d.status));
    };
    d.ontimeout = function () {
      c && c(d.status);
    };
    d.open('GET', a, f);
    d.send(null);
  }
  function b(a) {
    return a.replace(/[&"<>]/g, function (a) {
      return { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' }[a];
    });
  }
  function p(a) {
    return (
      (a = RegExp('[?&]' + a + '=([^&]*)', 'i').exec(window.location.search)) &&
      decodeURIComponent(a[1].replace(/\+/g, ' '))
    );
  }
  function t() {
    q || (q = new y.Efc());
  }
  function m(a, f, e, u, h) {
    var k = U.EBb,
      A = k.MSG1 || 'Fatal Error:',
      z = k.MSG2 || 'Location:',
      m = k.MSG3 || 'Call Stack:',
      s = k.MSG4 || 'Reported By:',
      F = k.MSG5 || '&1, line &2',
      D = c,
      r = !1;
    l
      ? (a = l)
      : (h instanceof SyntaxError
          ? ((r = !0), q && q.W$c() && (f = q.zZc()))
          : 0 < f.indexOf('/' + H + '/') &&
            ((D = k.MSG6 || 'Exception:'),
            (A = k.MSG7 || 'LANSA Runtime Error:')),
        h && h.message && (a = h.message));
    r && (A = k.MSG8 || 'JavaScript Syntax Error:');
    a = '<p><strong>' + A + '</strong><ul>' + b(a) + '</ul></p>';
    if (!r && d.x5 && 0 < d.x5()) {
      r = d.Wja();
      k = r.cK.Ey;
      a =
        a +
        ('<p><strong>' + z + '</strong>') +
        ('<ul>' + U.RLa(F, k.T2c() + ': ' + k.zob(), r.aca()) + '</ul>');
      a += '</p>';
      a += '<p><strong>' + m + '</strong>';
      for (z = 0; z < d.x5(); z++)
        (r = d.QYa(z)),
          (k = r.cK.Ey),
          (a +=
            '<ol>' +
            (z + 1).toString() +
            '. ' +
            U.RLa(F, r.Kba() + ': ' + k.zob(), r.aca()) +
            '</ol>');
      a += '</p>';
    }
    f &&
      (a +=
        '<p><strong>' +
        s +
        '</strong><ul>' +
        U.RLa(F, f, (e || '?') + (u ? ':' + u : '')) +
        '</ul></p>');
    h &&
      D &&
      (f = h.stack) &&
      ((a += '<p><strong>' + D + '</strong><ul>'),
      (a += f.replace(/(?:\r\n|\r|\n)/g, '<br >')),
      (a += '</ul></p>'));
    document.body.innerHTML = a;
  }
  function r() {
    function a() {
      b && l && d && (b.style.visibility = 'visible');
    }
    var b = null,
      f = null,
      d = !1,
      l = !1,
      q = h.splash;
    if (q) {
      var e = q.limg,
        b = document.createElement('div'),
        f = b.style;
      f.fontFamily = 'verdana';
      f.visibility = 'hidden';
      f.position = 'absolute';
      f.top = '50%';
      f.left = '50%';
      f.textAlign = 'center';
      f.transform = 'translateX(-50%) translateY(-50%)';
      var f = document.createElement('img'),
        u = document.createTextNode('');
      b.appendChild(f);
      b.appendChild(document.createElement('br'));
      b.appendChild(u);
      f.onload = function () {
        var b = q.mtxt;
        b && ((b = b[U.I5()]), b !== c && (u.nodeValue = b));
        l = !0;
        a();
      };
      e !== c
        ? 'spin' == e && (f.src = U.Sc('lansa_spin.gif'))
        : ((e = q.uimg), e !== c && (f.src = e));
      setTimeout(function () {
        d = !0;
        a();
      }, 1e3);
    }
    return b;
  }
  var s = 0,
    k = '',
    e = '',
    h = {},
    f = c,
    q = c,
    z = c,
    l = c,
    u = !1,
    D = p('developer'),
    B = D && 'YES' === D.toUpperCase(),
    A = B ? Math.round(new Date().getTime() / 1e3).toString() + '_dev' : c,
    H = 'lansa_15_0_5_0',
    K = !1,
    F = !1,
    M = !1,
    U = {};
  U.nonce = d.nonce;
  var E = {},
    y = {
      u: function (a, b) {
        a.prototype = Object.create(b.prototype);
        a.prototype.K = b;
        a.prototype.l = b.prototype;
        return a.prototype;
      },
      kf: function () {},
    };
  y.kf.prototype.EG = function () {
    return null;
  };
  if (!B) {
    var Q = window.applicationCache;
    Q &&
      Q.addEventListener('updateready', function () {
        Q.status == Q.UPDATEREADY && location.reload();
      });
  }
  window.onerror = function (a, b, f) {
    0 > a.indexOf('ResizeObserver') &&
      !u &&
      ((document.body.innerHTML = ''),
      m(
        a,
        b,
        f,
        3 > arguments.length ? c : arguments[3],
        4 > arguments.length ? c : arguments[4]
      ),
      (u = !0));
    return !0;
  };
  d.init = function (a) {
    h = a;
  };
  d.showPage = function (a, b) {
    k = a;
    e = b || a;
    document.documentElement.lang = U.Tmd();
    var c = null;
    if (U.Ead()) {
      U.$0b();
      var c = document.createElement('div'),
        f = document.createElement('div');
      c.style.fontFamily = 'Roboto';
      f.setAttribute('class', 'material-icons');
      c.appendChild(f);
      document.body.appendChild(c);
    }
    var l = r();
    document.body.parentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0px';
    l && document.body.appendChild(l);
    t();
    q.twc(a, function () {
      U.mKa() ||
        d.ild(
          a,
          function () {
            l && (document.body.removeChild(l), (l = null));
            c && (document.body.removeChild(c), (c = null));
            z && (d.Pb('PRIM_WRTN'), U.GVc(z));
            d.hwc(a);
          },
          function () {
            m(null, null, null, null, null);
          }
        );
    });
  };
  d.showPart = function (a, b, c) {
    s += 1;
    if (1 < s) throw U.zs('E030');
    var f = document.getElementById(b),
      l = r();
    f && l && f.appendChild(l);
    t();
    q.twc(a, function () {
      var q = null;
      U.mKa() || (f && l && (f.removeChild(l), (l = null)), (q = d.Ixd(a, b)));
      c && c(q);
    });
  };
  d.useOutput = function (a) {
    z = a;
  };
  d.addComponent = function (a, b, f) {
    q === c && t();
    q.TGc(a, b, f);
  };
  d.addSrc = function (a, b, c) {
    (q && q.aHc(a, b, c)) || b(d, y, E, U);
  };
  U.mJa = function () {
    return k;
  };
  U.b2c = function () {
    return e;
  };
  U.KIa = function () {
    return h.part || h.Partition;
  };
  U.LIa = function () {
    return h.sys || h.System;
  };
  U.U3c = function () {
    return h.ver;
  };
  U.VZc = function () {
    var a = h.splash;
    return a && (a = a.uimg) ? a : U.Sc('lansa_spin.gif');
  };
  U.Zsb = function () {
    return 1 === h.slz;
  };
  U.Ead = function () {
    return 0 < h.md;
  };
  U.Ssb = function () {
    return 1 < h.md;
  };
  U.kX = function () {
    return U.kxa();
  };
  U.pxa = function () {
    return 1 < h.ol;
  };
  U.kxa = function () {
    return h.pwa !== c;
  };
  U.otb = function () {
    return U.kxa();
  };
  U.Cba = function () {
    return (
      U.kxa() ? '/' + h.pwa : '/' + U.LIa() + '/' + U.KIa() + '/' + U.mJa()
    ).toLowerCase();
  };
  U.AWd = function () {
    return 15005e3;
  };
  U.L_d = function () {
    return 14000002;
  };
  U.kka = function () {
    return h.lang;
  };
  U.I5 = function () {
    f === c && (f = (p('lang') || U.xob() || 'ENG').toUpperCase());
    return f;
  };
  U.Tmd = function () {
    var a = c;
    U.kka() && U.kka().code && (a = U.kka().code[U.I5()]);
    return a || document.documentElement.lang;
  };
  U.S5c = function () {
    return z;
  };
  U.Pmd = function () {
    z = c;
  };
  U.$0b = function () {
    U.b1b();
    U.a1b();
    U.nVc();
  };
  U.b1b = function () {
    if (!K && ((K = !0), !U.Ssb())) {
      var a = document.createElement('link');
      a.href = U.$aa('roboto.css');
      a.rel = 'stylesheet';
      a.type = 'text/css';
      document.body.appendChild(a);
    }
  };
  U.a1b = function () {
    if (!F && ((F = !0), !U.Ssb())) {
      var a = document.createElement('link');
      a.href = U.$aa('material-icons.css');
      a.rel = 'stylesheet';
      a.type = 'text/css';
      document.body.appendChild(a);
    }
  };
  U.nVc = function () {
    if (!M && ((M = !0), !U.Ssb())) {
      var a = document.createElement('link');
      a.href = U.$aa('theme.css');
      a.rel = 'stylesheet';
      a.type = 'text/css';
      document.body.appendChild(a);
    }
  };
  U.$aa = function (a) {
    return U.V4('style/' + a.toLowerCase());
  };
  U.V4 = function (a) {
    return U.kxa() || U.pxa()
      ? U.Cba() + '/lansa/sys/' + H + '/' + a
      : '/' + U.LIa() + '/' + H + '/' + a;
  };
  U.sib = function (a) {
    a =
      U.kxa() || U.pxa()
        ? U.Cba() + '/lansa/app/' + a
        : '/' + U.LIa() + '/' + U.KIa() + '/' + a;
    if (B) a += '?lcb=' + A;
    else {
      var b = U.U3c();
      b &&
        (a = U.pxa()
          ? a + ('?lcid=' + k.toLowerCase() + '-' + b)
          : a + ('?lcb=' + b));
    }
    return a;
  };
  U.UNc = function (a, b, c, f, l) {
    var q = U.I5();
    a =
      a +
      '/' +
      b +
      (U.kxa() ? '/lansa/data' : '/lansaweb') +
      '?w=' +
      c +
      '&r=' +
      f +
      '&vlweb=1&part=' +
      l +
      '&lang=' +
      q;
    B && (a += '&developer=yes');
    d.JWa && (a += '&DEBUG=' + d.JWa);
    return (a += '&_T=' + new Date().getTime().toString());
  };
  U.Sc = function (a) {
    return U.V4('image/' + a.toLowerCase());
  };
  U.xob = function () {
    var a = U.kka();
    return a ? a.def : c;
  };
  U.tZb = function (a, b) {
    q && q.Ked(a, b);
  };
  U.jUc = function (a, b, c) {
    q && q.Jed(a, b, c);
  };
  U.Dkb = function (a) {
    q && q.xcc(a);
  };
  U.MHa = function (a) {
    q && q.Bed(a);
  };
  U.mKa = function () {
    return u;
  };
  U.zs = function (a, b, f, d) {
    l === c &&
      (l = (a = U.EBb[a]) ? U.RLa(a, b, f, d) : 'Unknown error occurred');
    return 0;
  };
  U.etd = function (a) {
    l = a;
  };
  U.Wpc = function (a, b, f, d, l, q, e) {
    var u = new XMLHttpRequest();
    u.onreadystatechange = function () {
      4 == u.readyState &&
        (u.responseText && 400 > u.status
          ? f(u.responseText)
          : d && (d(u.status), (d = c)));
    };
    u.upload && l && u.upload.addEventListener('progress', l, !1);
    q && u.addEventListener('progress', q, !1);
    u.open('POST', a, e);
    a = JSON.stringify(b);
    u.setRequestHeader('Content-type', 'application/json');
    u.setRequestHeader('Accept', 'application/json');
    try {
      u.send(a);
    } catch (h) {
      d && (d(u.status), (d = c));
    }
  };
  U.Lid = function (a, b, f, d, l, q, e) {
    var u = new XMLHttpRequest();
    u.onreadystatechange = function () {
      4 == u.readyState &&
        (u.responseText && 400 > u.status
          ? f(u.responseText)
          : d && (d(u.status), (d = c)));
    };
    u.upload && l && u.upload.addEventListener('progress', l, !1);
    q && u.addEventListener('progress', q, !1);
    u.open('POST', a, e);
    u.setRequestHeader('Accept', 'application/json');
    try {
      u.send(b);
    } catch (h) {
      d && (d(u.status), (d = c));
    }
  };
  U.d1c = function (b, c, f) {
    a(b, c, f, !1);
  };
  U.J4b = function (b, c, f) {
    a(b, c, f, !0);
  };
  U.Vsa = function (a) {
    U.nonce && a.setAttribute('nonce', U.nonce);
  };
  U.RLa = function (a, b, f, d, l, q, e, u, h, k) {
    a = a.toString();
    for (var A = 0, z = a.indexOf('&'), m = ''; 0 <= z && z + 1 < a.length; )
      (m += a.substring(A, z)),
        (A = z),
        z++,
        '1' == a.charAt(z) && b !== c
          ? ((m += b), (A = ++z))
          : '2' == a.charAt(z) && f !== c
          ? ((m += f), (A = ++z))
          : '3' == a.charAt(z) && d !== c
          ? ((m += d), (A = ++z))
          : '4' == a.charAt(z) && l !== c
          ? ((m += l), (A = ++z))
          : '5' == a.charAt(z) && q !== c
          ? ((m += q), (A = ++z))
          : '6' == a.charAt(z) && e !== c
          ? ((m += e), (A = ++z))
          : '7' == a.charAt(z) && u !== c
          ? ((m += u), (A = ++z))
          : '8' == a.charAt(z) && h !== c
          ? ((m += h), (A = ++z))
          : '9' == a.charAt(z) && k !== c
          ? ((m += k), (A = ++z))
          : '&' == a.charAt(z) && ((m += '&'), (A = ++z)),
        (z = a.indexOf('&', z));
    return (m += a.substr(A));
  };
})(window.LANSA ? window.LANSA : (window.LANSA = {}), void 0);
window.LANSA.addSrc('download', function (d, c, a, b, p) {
  function t(a, c) {
    c === p && (c = !1);
    var f = m(a);
    if (f) {
      var d = document.createElement('script');
      b.Vsa(d);
      d.text = f;
      q.push(a);
      document.head.appendChild(d);
      q.pop();
    } else if (c) throw b.zs('E001', a);
  }
  function m(a) {
    function c(a) {
      f = a;
    }
    var f = p;
    try {
      b.d1c(a, c, function () {});
    } catch (d) {}
    return f;
  }
  function r(a) {
    function c() {
      b.Fac = {};
      a();
    }
    var f = null,
      d = b.kka();
    d && (f = d.code);
    f
      ? s(f[b.I5()], a, function () {
          s(f[b.xob()], a, c);
        })
      : c();
  }
  function s(a, b, c) {
    a
      ? k(a, b, function () {
          var f = a.indexOf('-');
          0 < f ? k(a.substring(0, f), b, c) : c();
        })
      : c();
  }
  function k(a, c, f) {
    b.J4b(
      b.V4('locale/locale-' + a + '.json'),
      function (a) {
        var d = !1;
        try {
          (b.Fac = JSON.parse(a)), (d = !0);
        } catch (l) {}
        d ? c() : f();
      },
      f
    );
  }
  function e(a) {
    function c() {
      b.EBb = {};
      a();
    }
    h(b.I5(), a, function () {
      h(b.xob(), a, function () {
        h('ENG', a, c);
      });
    });
  }
  function h(a, c, f) {
    b.J4b(
      b.V4('error/error-' + a.toLowerCase() + '.json'),
      function (a) {
        var d = !1;
        try {
          (b.EBb = JSON.parse(a)), (d = !0);
        } catch (l) {}
        d ? c() : f();
      },
      f
    );
  }
  var f = {
      atlm: { atlm: ['PRIM_ATLM'], atli: ['PRIM_ATLI'] },
      base: {
        base: [],
        field: [],
        string: [],
        blob: [],
        number: [],
        boolean: [],
        objt: [],
        dc: [],
        fld: [],
        desn: [],
        entity: [],
      },
      btn: { btn: ['PRIM_PHBN', 'PRIM_CKBX', 'PRIM_RDBN', 'PRIM_SPBN'] },
      caro: { caro: ['PRIM_CARO', 'PRIM_CARO.CarouselItem'] },
      coll: {
        coll: 'PRIM_COLL PRIM_LCOL PRIM_ACOL PRIM_SACO PRIM_PCOL PRIM_KCOL PRIM_DCOL'.split(
          ' '
        ),
      },
      drag: { drag: ['PRIM_DRAG'] },
      dtim: {
        date_and_time: [],
        fmtd: ['PRIM_DATE', 'PRIM_DAT', 'PRIM_TIME'],
        mtcl: ['PRIM_MTCL'],
        dtim: ['PRIM_DTIM'],
      },
      edit: {
        fmts: ['PRIM_FMTS'],
        fmtn: ['PRIM_FMTN'],
        edit: ['PRIM_EDIT', 'PRIM_SPDT'],
      },
      evp: { evp: ['PRIM_EVP'] },
      evdt: { evdt: ['PRIM_EVDT'] },
      evef: { evef: ['PRIM_EVEF'] },
      evmc: { evmc: ['PRIM_EVMC'] },
      evpl: { evpl: ['PRIM_EVPL'] },
      evse: { evse: ['PRIM_EVSE'] },
      evst: { evst: ['PRIM_EVST'] },
      gpbx: { gpbx: ['PRIM_GPBX'] },
      hint: { hint: ['PRIM_HINT'] },
      http: {
        http: [
          'PRIM_WEB.HttpHeader',
          'PRIM_WEB.HttpHeaders',
          'PRIM_WEB.HttpRequest',
          'PRIM_WEB.HttpResponse',
          'PRIM_WEB.HttpContent',
        ],
      },
      imag: { imag: ['PRIM_IMAG'] },
      json: {
        json: 'PRIM_WEB.Json PRIM_WEB.JsonElement PRIM_WEB.JsonArray PRIM_WEB.JsonObject PRIM_WEB.JsonNumber PRIM_WEB.JsonString PRIM_WEB.JsonBoolean'.split(
          ' '
        ),
      },
      labl: { labl: ['PRIM_LABL'] },
      list: {
        list: 'PRIM_LIST PRIM_UDC.Columns PRIM_LIST.Column PRIM_LIST.CurrentItem PRIM_LIST.String PRIM_LIST.StringCurrentItem PRIM_LIST.Number PRIM_LIST.NumberCurrentItem PRIM_LIST.DateTime PRIM_LIST.DateTimeCurrentItem PRIM_LIST.CheckBox PRIM_LIST.CheckBoxCurrentItem PRIM_LIST.Button PRIM_LIST.ButtonCurrentItem PRIM_LIST.Image PRIM_LIST.ImageCurrentItem PRIM_LIST.Part PRIM_LIST.PartCurrentItem PRIM_LIST.ListItem PRIM_LIST.DropDown PRIM_LIST.Label PRIM_LIST.LabelCurrentItem PRIM_LIST.Icon PRIM_LIST.IconCurrentItem'.split(
          ' '
        ),
      },
      menu: { menu: ['PRIM_MENU', 'PRIM_MBAR', 'PRIM_SMNU', 'PRIM_MITM'] },
      msg: {
        msg: [
          'PRIM_MSG',
          'PRIM_MSGQ',
          'PRIM_MSGQ.Message',
          'PRIM_WEB.MessageBoxCaptions',
          'PRIM_WEB.MessageBox',
        ],
      },
      prim: { vo: [] },
      md: {
        md: 'PRIM_MD PRIM_MD.Input PRIM_MD.Edit PRIM_MD.EditField PRIM_MD.SpinEdit PRIM_MD.SpinEditField PRIM_MD.FlatButton PRIM_MD.RaisedButton PRIM_MD.ActionButton PRIM_MD.Control PRIM_MD.CheckBox PRIM_MD.RadioButton PRIM_MD.Switch PRIM_MD.Label PRIM_MD.Icon PRIM_MD.Text PRIM_MD.FilePicker PRIM_MD.Badge'.split(
          ' '
        ),
        md_comp:
          'PRIM_MD.AppBar PRIM_MD.Alert PRIM_VIEW PRIM_DLG PRIM_MD.AppDrawer PRIM_MD.Container PRIM_MD.ViewContainer'.split(
            ' '
          ),
      },
      md_dt: {
        md_date: ['PRIM_MD.DateTime', 'PRIM_MD.DateTimeField'],
        md_dp: ['PRIM_MD.DateTimePicker'],
        md_dropdown: [
          'PRIM_MD.Dropdown',
          'PRIM_MD.DropdownField',
          'PRIM_MD.DropdownItem',
          'PRIM_MD.DropdownItems',
        ],
        md_menu: ['PRIM_MD.Menu', 'PRIM_MD.MenuItem'],
        md_tab: ['PRIM_MD.Tab', 'PRIM_MD.TabItem'],
        md_expander: ['PRIM_MD.Expander', 'PRIM_MD.ExpanderPanel'],
        md_progress: ['PRIM_MD.ProgressBar'],
        md_slider: ['PRIM_MD.Slider'],
      },
      pdf: { pdf: ['PRIM_PDF'] },
      ppnl: {
        ppnl: [
          'PRIM_PPNL',
          'PRIM_PPNL.MenuBar',
          'PRIM_PPNL.Menu',
          'PRIM_PPNL.MenuItem',
        ],
      },
      sound: { sound: ['PRIM_SOND', 'PRIM_SOND.File', 'PRIM_SOND.Files'] },
      stpg: { stpg: ['PRIM_STPG'] },
      tab: { tab: ['PRIM_TBSH', 'PRIM_TAB'] },
      tblo: {
        tblo: 'PRIM_TBLO PRIM_TBLO.Column PRIM_TBLO.Item PRIM_TBLO.Row PRIM_TBLO.RowDivider PRIM_TBLO.Item PRIM_TBLO.Item'.split(
          ' '
        ),
      },
      text: { text: ['PRIM_TEXT'] },
      tile: { tile: ['PRIM_TILE', 'PRIM_TILE.TileItem'] },
      thm: {
        thm: ['PRIM_THEME'],
        anim: 'PRIM_ANIM.AnimationItem PRIM_ANIM.Style PRIM_ANIM.Opacity PRIM_ANIM.Visibility PRIM_ANIM.Scale PRIM_ANIM.Rotate PRIM_ANIM.Skew PRIM_ANIM.Width PRIM_ANIM.Height PRIM_ANIM.Transition PRIM_ANIM.TableLayoutItem PRIM_ANIM.Move PRIM_ANIM.MoveFrom PRIM_ANIM.MoveTo PRIM_ANIM PRIM_ANMG'.split(
          ' '
        ),
      },
      tree: { tree: ['PRIM_TREE', 'PRIM_TREE.TreeItem', 'PRIM_MD.List'] },
      udc: {
        cmd: ['PRIM_CMD'],
        fwlm: ['PRIM_FWLM', 'PRIM_FWLI'],
        udc: 'PRIM_UDC PRIM_UDC.Items PRIM_UDC.Item *VARIANT PRIM_VAR PRIM_MD.ListLabel PRIM_MD.ListText PRIM_MD.ListIcon PRIM_MD.ListImage PRIM_MD.ListBadge PRIM_MD.ListEdit PRIM_MD.ListSpinEdit PRIM_MD.ListDateTime PRIM_MD.ListFlatButton PRIM_MD.ListRaisedButton PRIM_MD.ListCheckBox PRIM_MD.ListSwitch PRIM_MD.ListCurrentItem PRIM_MD.ListLabelCurrentItem PRIM_MD.ListTextCurrentItem PRIM_MD.ListIconCurrentItem PRIM_MD.ListImageCurrentItem PRIM_MD.ListBadgeCurrentItem PRIM_MD.ListEditCurrentItem PRIM_MD.ListSpinEditCurrentItem PRIM_MD.ListDateTimeCurrentItem PRIM_MD.ListFlatButtonCurrentItem PRIM_MD.ListRaisedButtonCurrentItem PRIM_MD.ListCheckBoxCurrentItem PRIM_MD.ListSwitchCurrentItem'.split(
          ' '
        ),
      },
      router: {
        router: ['PRIM_WEB.Route', 'PRIM_WEB.Router', 'PRIM_WEB.Routing'],
      },
      ver: { ver: ['PRIM_VER.Debugger'] },
      video: { video: ['PRIM_VDEO', 'PRIM_VDEO.File', 'PRIM_VDEO.Files'] },
      wdgt: {
        wdgt: [
          'PRIM_WDGT',
          'PRIM_WDGT.Object',
          'PRIM_WDGT.Control',
          'PRIM_WEB.HtmlContainer',
        ],
      },
      chart: {
        chart:
          'PRIM_CHRT PRIM_CHRT.Column PRIM_CHRT.BarChart PRIM_CHRT.PieChart PRIM_CHRT.LineChart PRIM_CHRT.BubbleChart'.split(
            ' '
          ),
      },
      dvce: {
        dvce: [
          'PRIM_DVCE',
          'PRIM_DVCE.Camera',
          'PRIM_DVCE.CameraFile',
          'PRIM_DVCE.BarcodeScanner',
          'PRIM_DVCE.Barcode',
        ],
      },
      web: {
        web: 'PRIM_WEB PRIM_WEB.URLParameters PRIM_WEB.URLParameter PRIM_WEB.LocalStorage PRIM_WEB.LocalStorageItem PRIM_WEB.SessionStorage PRIM_WEB.SessionStorageItem PRIM_WEB.History PRIM_WEB.Page PRIM_WEB.RichTextItem PRIM_WEB.RichTextLine PRIM_WEB.RichTextBreak PRIM_WEB.RichTextImage PRIM_WEB.RichTextParagraph PRIM_WEB.RichText PRIM_WEB.RichTextItems PRIM_WEB.Camera PRIM_WEB.Signature PRIM_WEB.Geolocation PRIM_WEB.Console PRIM_WEB.FilePicker PRIM_WEB.File PRIM_WEB.Files PRIM_WEB.BlobReader PRIM_WEB.ClobReader'.split(
          ' '
        ),
      },
      wrtn: {
        wrtn: 'PRIM_WRTN PRIM_WEB.Session PRIM_WEB.ServerRequest PRIM_WEB.DataRequest PRIM_WEB.WebPageRequest PRIM_WEB.ResourceRequest'.split(
          ' '
        ),
      },
    },
    q = [];
  c.R1a = function (a, b) {
    this.ui = a;
    this.pLd = b;
    this.oEc = null;
    this.ERa = p;
    this.GRa = this.nC = this.aLd = !1;
  };
  var z = c.u(c.R1a, c.kf);
  z.eA = function () {
    var a = this.ui.replace(/[@#$]/g, '_').toLowerCase() + '.js';
    return b.sib(a);
  };
  z.j$b = function () {
    return this.nC;
  };
  z.k5 = function (a) {
    var c = this,
      f = this.eA(),
      d = document.createElement('script');
    d.type = 'text/javascript';
    d.onload = function () {
      d.onload = null;
      d.onerror = null;
      c.nC = !0;
      a();
    };
    d.onerror = function () {
      d.onload = null;
      d.onerror = null;
      if (c.pLd) throw b.zs('E001', f);
      c.nC = !0;
      c.aLd = !0;
      a();
    };
    document.body.appendChild(d);
    d.src = f;
  };
  z.$Ha = function (a) {
    this.GRa ||
      (this.nC || (this.eA(), t(this.eA(), a), (this.nC = !0)), this.$Ga());
  };
  z.S8c = function (a, b) {
    this.ERa === p && ((this.oEc = a), (this.ERa = b));
  };
  z.$Ga = function () {
    if (this.ERa) {
      var a = this.ERa;
      this.ERa = null;
      a(d, d.checkVersion(this.oEc));
      this.GRa = !0;
    }
  };
  c.qwb = function (a) {
    this.bLd = a;
    this.kDc = {};
    this.FRa = [];
    this.GRa = this.nC = !1;
  };
  z = c.u(c.qwb, c.kf);
  z.eA = function () {
    return b.V4('lansa_' + this.bLd.toLowerCase() + '.js');
  };
  z.j$b = function () {
    return this.nC;
  };
  z.k5 = function (a) {
    var b = this,
      c = this.eA(),
      f = document.createElement('script');
    f.type = 'text/javascript';
    f.onload = function () {
      f.onload = null;
      f.onerror = null;
      b.nC = !0;
      a();
    };
    f.onerror = function () {
      f.onload = null;
      f.onerror = null;
      throw 'FAILED TO DOWNLOAD' + c;
    };
    document.body.appendChild(f);
    f.src = c;
  };
  z.$Ha = function (a) {
    this.GRa ||
      (this.nC || (this.eA(), t(this.eA(), a), (this.nC = !0)), this.$Ga());
  };
  z.U8c = function (a, b) {
    this.kDc[a] === p && ((this.kDc[a] = b), this.FRa.push(b));
  };
  z.$Ga = function () {
    for (var f = 0; f < this.FRa.length; f++) {
      var q = this.FRa[f];
      q && ((this.FRa[f] = null), q(d, c, a, b));
    }
    this.FRa = [];
    this.GRa = !0;
  };
  c.Vub = function (a) {
    this.eGa = a;
    this.nC = !1;
  };
  z = c.u(c.Vub, c.kf);
  z.eA = function () {
    return b.V4(this.eGa);
  };
  z.j$b = function () {
    return this.nC;
  };
  z.k5 = function (a) {
    var b = this,
      c = this.eA(),
      f = document.createElement('script');
    f.type = 'text/javascript';
    f.onload = function () {
      f.onload = null;
      f.onerror = null;
      b.nC = !0;
      a();
    };
    f.onerror = function () {
      f.onload = null;
      f.onerror = null;
      throw 'FAILED TO DOWNLOAD' + c;
    };
    document.body.appendChild(f);
    f.src = c;
  };
  z.$Ha = function (a) {
    this.nC || (t(this.eA(), a), (this.nC = !0));
  };
  c.Efc = function () {
    this.JDa = {};
    this.Vpa = [];
    this.fNb = [];
    this.hNb = [];
    this.gNb = [];
    this.XTa = {};
    this.gFa = [];
    this.vEc = !1;
    this.H$a = {};
    this.G$a = [];
    this.FDc = this.jEc = !1;
    this.Rqa = null;
    this.kPa = {};
    this.i4a = {};
    for (var a in f)
      for (var b in f[a]) {
        this.kPa[b] = a;
        for (var c = f[a][b], d = 0; d < c.length; d++)
          this.i4a[c[d].toUpperCase()] = b;
      }
  };
  z = c.u(c.Efc, c.kf);
  z.W$c = function () {
    return 0 < q.length;
  };
  z.zZc = function () {
    return q[q.length - 1];
  };
  z.twc = function (a, c) {
    this.vEc = d.hwc !== p;
    this.X6('base');
    this.X6('prim');
    this.X6('thm');
    this.X6('edit');
    this.X6('router');
    b.pxa() &&
      this.yVa(
        'PRIM_ANIM PRIM_ATLI PRIM_ATLM PRIM_DRAG PRIM_DTIM PRIM_EDIT PRIM_EVP PRIM_FMTN PRIM_FMTS PRIM_HINT PRIM_IMAG PRIM_LABL PRIM_LIST PRIM_MD PRIM_MSG PRIM_MTCL PRIM_PCOL PRIM_PHBN PRIM_PPNL PRIM_SPBN PRIM_TBLO PRIM_THEME PRIM_WDGT PRIM_WEB PRIM_WRTN PRIM_UDC'.split(
          ' '
        )
      );
    this.Rqa = c;
    this.B1a(a, !0);
    var f = this;
    r(function () {
      f.jEc = !0;
      f.TGa();
    });
    f = this;
    e(function () {
      f.FDc = !0;
      f.TGa();
    });
  };
  z.X6 = function (a) {
    if (!this.vEc && this.XTa[a] === p) {
      var b = new c.qwb(a);
      this.XTa[a] = b;
      this.gFa.push(b);
      var f = this;
      b.k5(function () {
        f.TGa();
      });
    }
  };
  z.xcc = function (a, b) {
    var f = this.XTa[a];
    f || ((f = new c.qwb(a)), (this.XTa[a] = f), this.gFa.push(f));
    f.$Ha(b);
  };
  z.B1a = function (a, b) {
    if (this.JDa[a] === p) {
      var f = new c.R1a(a, b);
      this.JDa[a] = f;
      this.Vpa.push(f);
      var d = this;
      f.k5(function () {
        d.TGa();
      });
    }
  };
  z.Fed = function (a, b) {
    var f = this.JDa[a];
    f || ((f = new c.R1a(a, b)), (this.JDa[a] = f), this.Vpa.push(f));
    f.$Ha(b);
  };
  z.Aed = function (a) {
    if (this.H$a[a] === p) {
      var b = new c.Vub(a);
      this.H$a[a] = b;
      this.G$a.push(b);
      var f = this;
      b.k5(function () {
        f.TGa();
      });
    }
  };
  z.Bed = function (a) {
    var b = this.H$a[a];
    b || ((b = new c.Vub(a)), (this.H$a[a] = b), this.G$a.push(b));
    b.$Ha(!0);
  };
  z.aHc = function (a, b, c) {
    var f = this.kPa[a];
    return f && (f = this.XTa[f])
      ? (f.U8c(a, b),
        c && (this.Rqa ? (this.yVa(c.rp), this.cHc(c.rs)) : this.igb(c.rp)),
        !0)
      : !1;
  };
  z.TGc = function (a, f, d) {
    var q = a.id,
      e = this.JDa[q];
    e
      ? ((q = !0),
        this.Rqa
          ? (this.mgb(d.rc),
            this.yVa(d.rp),
            this.mgb(d.pc),
            this.dHc(d.rm),
            b.pxa() && ((q = !1), this.mgb(d.dc), this.yVa(d.dp)))
          : (this.hgb(d.rc), this.igb(d.rp), this.hgb(d.pc), this.OGc(d.rm)),
        q && (this.hgb(d.dc), this.igb(d.dp)))
      : ((e = new c.R1a(q, !0)),
        (this.JDa[q] = e),
        this.Vpa.push(e),
        (e.nC = !0));
    e.S8c(a, f);
  };
  z.mgb = function (a) {
    if (a) for (var b = 0; b < a.length; b++) this.B1a(a[b], !0);
  };
  z.yVa = function (a) {
    if (a)
      for (var b = 0; b < a.length; ++b) {
        var c = this.i4a[a[b].toUpperCase()];
        c && (c = this.kPa[c]) && this.X6(c);
      }
  };
  z.dHc = function (a) {
    if (a) for (var b = 0; b < a.length; ++b) this.X6(a[b]);
  };
  z.cHc = function (a) {
    if (a) for (var b = 0; b < a.length; b++) this.Aed(a[b]);
  };
  z.hgb = function (a) {
    if (a)
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        0 > this.fNb.indexOf(c) && this.fNb.push(c);
      }
  };
  z.igb = function (a) {
    if (a)
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        0 > this.hNb.indexOf(c) && this.hNb.push(c);
      }
  };
  z.OGc = function (a) {
    if (a)
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        0 > this.gNb.indexOf(c) && this.gNb.push(c);
      }
  };
  z.TGa = function () {
    if (this.jEc && this.FDc) {
      for (var a = 0; a < this.Vpa.length; a++)
        if (!1 == this.Vpa[a].nC) return;
      for (a = 0; a < this.gFa.length; a++) if (!1 == this.gFa[a].nC) return;
      for (a = 0; a < this.G$a.length; a++) if (!1 == this.G$a[a].nC) return;
      this.GMc();
    }
  };
  z.Ked = function (a, b) {
    this.Rqa = b;
    this.B1a(a, !0);
  };
  z.Jed = function (a, b, c) {
    5 < a.length && 'PRIM_' == a.substr(0, 5)
      ? this.Ied(a, b, c)
      : this.Fed(a, c);
  };
  z.Ied = function (a, b, c) {
    var f = a;
    a != b && (f += '.' + b);
    (a = this.i4a[f.toUpperCase()]) && (a = this.kPa[a]) && this.xcc(a, c);
  };
  z.GMc = function () {
    for (var a = 0; a < this.gFa.length; a++) {
      var b = this.gFa[a];
      b.$Ga();
    }
    for (a = 0; a < this.Vpa.length; a++) (b = this.Vpa[a]), b.$Ga();
    this.Rqa && ((a = this.Rqa), (this.Rqa = null), a());
    this.hyd();
  };
  z.hyd = function () {
    for (var a, b = 0; 4 > b && (a = this.hNb.shift()); ) {
      var c = this.i4a[a.toUpperCase()];
      c && (c = this.kPa[c]) && (this.X6(c), b++);
    }
    for (; 4 > b && (a = this.fNb.shift()); ) this.B1a(a, !1), b++;
    for (; 4 > b && (a = this.gNb.shift()); ) this.X6(a), b++;
  };
});
