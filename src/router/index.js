import Vue from 'vue'
import Router from 'vue-router'
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";
import Index from "./pages/home/childrens/Index";
import CmsBase from './pages/home/index'
import NewMember from "./pages/home/childrens/NewMember";
import MemberShow from "./pages/home/childrens/MemberShow";
import MemberPay from "./pages/home/childrens/MemberPay";
import Invoice from "./pages/home/childrens/Invoice";
import SetInvoice from "./pages/home/childrens/SetInvoice";
import InvoiceShow from "./pages/home/childrens/InvoiceShow";
import ExponseLog from "./pages/home/childrens/ExponseLog";

Vue.use(Router)

export default new Router({

  routes: [{
    path:'/',
    redirect:'/cms/index'
  },
    {
      path: '/cms/',
      component: CmsBase,
      children:[
        {path:'index/',component:Index},
        {path:'newmember',component: NewMember},
        {path:'membershow',component: MemberShow},
        {path:'memberpay',component: MemberPay},
        {path:'memberpay/',component: MemberPay},
        {path:'setinvoice/',component: SetInvoice},
        {path:'invoiceshow/',component: InvoiceShow},
        {path:'exponseLog/',component: ExponseLog}

      ]
    },
    {
      path:'/Login',
      component: Login
    }
  ]
})
