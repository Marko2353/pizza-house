import CallToAction from "../buttons/CallToAction";
import Logo from "../../public/img/Logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function NavBar({background}) {
  // const [navbar, setNavbar] = useState(false);
  

  return (
    <nav className={`w-full h-24 flex absolute z-50 ${background}`}>
      <div className="container flex items-center justify-between m-auto">
        <Link href={"/"}>
        <svg className="fill-black" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8681 20.2526C23.845 20.1656 23.2929 18.1132 22.8969 17.3212C22.6755 16.8782 22.2838 16.5826 21.9209 16.3916L22.4232 15.041C22.4734 14.9063 22.4333 14.7544 22.3228 14.6621C22.2122 14.5698 22.056 14.5569 21.932 14.6302L21.1818 15.0731C21.1857 15.0518 21.19 15.0302 21.1935 15.0088C21.3317 14.6566 21.4518 14.2942 21.5528 13.9287C22.2712 13.6621 22.6349 13.3131 22.6349 12.8888C22.6349 12.5036 22.3359 12.2147 21.9037 11.9983C21.9336 11.6676 21.9491 11.3336 21.9491 11.0016C21.9491 8.07081 20.8077 5.31576 18.7355 3.24343C16.6631 1.17103 13.9079 0.0297852 10.9773 0.0297852C8.04665 0.0297852 5.2914 1.17121 3.21908 3.24343C1.14668 5.31549 0.00561523 8.07054 0.00561523 11.0016C0.00561523 13.9327 1.14704 16.6875 3.21926 18.7598C5.29167 20.8322 8.04682 21.9735 10.9775 21.9735C11.3961 21.9735 11.8196 21.9487 12.2396 21.9004C12.603 22.5739 13.3472 22.944 13.984 23.185C15.4085 23.7237 16.7015 23.9931 17.9948 23.9931C19.288 23.9931 20.5813 23.7238 22.0057 23.185C23.0377 22.7944 24.3539 22.0656 23.8682 20.2528L23.8681 20.2526ZM17.9947 16.9557L15.6811 15.5892C15.4759 15.1575 15.3967 14.6769 15.4502 14.2038C16.1926 14.3507 17.0729 14.43 17.9947 14.43C18.9161 14.43 19.7964 14.3507 20.539 14.2038C20.5928 14.6777 20.5137 15.1572 20.3086 15.589L17.9947 16.9557ZM13.5663 15.041L14.0686 16.3916C13.9705 16.4434 13.8707 16.5027 13.7726 16.5703C12.9719 16.4721 12.1482 16.4164 11.3172 16.4045L11.3171 11.341H15.5916C15.5755 11.4138 15.5596 11.4853 15.5441 11.5552C14.4959 11.7501 13.3541 12.1352 13.3541 12.8887C13.3541 13.3773 13.8357 13.7656 14.786 14.0437C14.738 14.3873 14.7459 14.7351 14.8074 15.0732L14.057 14.63C13.933 14.5568 13.7768 14.5697 13.6663 14.662C13.5565 14.7545 13.5162 14.9063 13.5663 15.0411V15.041ZM19.9342 12.4073C19.6023 12.5168 18.9403 12.684 17.9948 12.684C17.057 12.684 16.3903 12.5157 16.0557 12.4064C16.0911 12.2408 16.1393 12.0152 16.1943 11.7647C16.6198 11.8725 17.2243 11.9742 17.995 11.9742C18.7657 11.9742 19.3713 11.872 19.7957 11.7647C19.8506 12.0156 19.8992 12.2416 19.9343 12.4074L19.9342 12.4073ZM6.90286 16.7659C6.32306 15.1829 5.99642 13.3125 5.96269 11.3413H10.6379V16.4048C9.34415 16.423 8.08499 16.5464 6.90276 16.766L6.90286 16.7659ZM10.638 17.0839V20.9058C9.46448 20.7469 8.3575 19.7665 7.49025 18.1044C7.3737 17.8811 7.2637 17.6489 7.15957 17.4086C8.26181 17.2123 9.43374 17.1016 10.638 17.0839H10.638ZM5.96279 10.6618C5.99543 8.74315 6.30601 6.92061 6.85737 5.36502C8.05177 5.58959 9.32686 5.71566 10.6381 5.73437V10.6618L5.96282 10.662L5.96279 10.6618ZM11.3174 1.097C12.3994 1.24601 13.4381 2.10369 14.2734 3.54953C14.4828 3.912 14.6752 4.3038 14.8495 4.72061C13.7326 4.92312 12.5425 5.03698 11.3175 5.05498V1.09702L11.3174 1.097ZM10.6382 5.05498C9.41289 5.03732 8.22289 4.92342 7.10604 4.72058C7.2254 4.43525 7.3536 4.16054 7.49042 3.8982C8.35781 2.23615 9.46465 1.25589 10.6382 1.09684L10.6382 5.05498ZM11.3174 5.73417C12.6285 5.71563 13.9028 5.58973 15.0968 5.36498C15.5646 6.68861 15.8627 8.21688 15.96 9.83105C15.9468 9.8678 15.9348 9.90539 15.9238 9.94495C15.87 10.1453 15.8089 10.3959 15.7466 10.6616H11.3174V5.73417ZM17.2857 9.75166C17.4626 9.79542 17.7601 9.84292 17.9949 9.84292C18.2299 9.84292 18.5272 9.7958 18.702 9.75217C18.8362 9.72075 19.2847 9.65454 19.4096 10.121C19.4796 10.3819 19.5641 10.7374 19.6471 11.1007C19.2783 11.1952 18.7178 11.2951 17.9947 11.2951C17.2721 11.2951 16.7126 11.1957 16.3423 11.1011C16.4253 10.7377 16.5101 10.3823 16.5798 10.1214C16.705 9.65475 17.153 9.72075 17.2857 9.75166ZM20.0659 9.94515C19.8387 9.09647 19.0287 8.97041 18.5405 9.09224C18.4298 9.11959 18.1835 9.16336 17.995 9.16336C17.8064 9.16336 17.5601 9.11959 17.4499 9.09241C17.2057 9.03132 16.8814 9.03237 16.5896 9.15437C16.4582 7.74759 16.1775 6.41285 15.7675 5.22641C16.8475 4.98329 17.8507 4.65617 18.7426 4.25254C20.2467 5.98098 21.1843 8.21475 21.2641 10.6616H20.243C20.1808 10.396 20.1194 10.1455 20.0659 9.94512L20.0659 9.94515ZM15.5272 4.58468C15.3284 4.09353 15.1061 3.63288 14.8614 3.2095C14.2228 2.10428 13.4617 1.30202 12.6356 0.842997C14.8106 1.19681 16.7592 2.23373 18.2523 3.72685C17.4296 4.08064 16.5118 4.36824 15.5274 4.58468H15.5272ZM6.88808 3.58397C6.72228 3.90159 6.56886 4.23583 6.42726 4.58451C5.44333 4.36824 4.52581 4.08047 3.7032 3.72664C5.19418 2.23604 7.13913 1.19983 9.30998 0.844397C8.39631 1.35341 7.56635 2.28385 6.88801 3.58397H6.88808ZM6.18645 5.22647C5.62909 6.83559 5.31621 8.70353 5.2834 10.6615H0.691322C0.771125 8.21444 1.70845 5.98081 3.21286 4.25244C4.10428 4.65603 5.10726 4.98302 6.18655 5.2263L6.18645 5.22647ZM5.28354 11.3408C5.31709 13.3507 5.64601 15.2653 6.23113 16.9024C5.16933 17.139 4.18062 17.4559 3.29874 17.8468C1.74452 16.1051 0.772407 13.8337 0.691234 11.3406H5.28377L5.28354 11.3408ZM6.47916 17.5433C6.60628 17.847 6.74259 18.1394 6.88842 18.4188C7.56676 19.719 8.39672 20.6494 9.31038 21.1582C7.18591 20.8104 5.27808 19.8104 3.80032 18.3706C4.61194 18.0297 5.51415 17.7523 6.4792 17.5433L6.47916 17.5433ZM20.9447 13.4112C20.1613 13.63 19.1138 13.7507 17.995 13.7507C16.876 13.7507 15.8289 13.6303 15.0455 13.4112C14.21 13.1777 14.0342 12.928 14.0342 12.8885C14.0342 12.8336 14.2983 12.5219 15.3883 12.2799C15.3557 12.4344 15.3345 12.5348 15.3312 12.5513C15.2992 12.7041 15.3756 12.8592 15.5167 12.9268C15.554 12.9448 16.4435 13.3631 17.9954 13.3631C19.5473 13.3631 20.4368 12.9446 20.474 12.9268C20.6147 12.8593 20.6913 12.7043 20.6596 12.5513C20.6562 12.5348 20.6354 12.4344 20.6024 12.2799C21.6922 12.5219 21.9566 12.8336 21.9566 12.8885C21.956 12.928 21.7801 13.1777 20.9447 13.4112ZM20.4454 11.5552C20.43 11.4852 20.4143 11.4135 20.3979 11.341H21.2642C21.2598 11.4755 21.2524 11.6097 21.2429 11.7439C20.9846 11.6667 20.7118 11.6047 20.4454 11.5552ZM12.1213 20.2525C12.0791 20.4105 12.0512 20.5594 12.0348 20.7015C11.7986 20.8043 11.5587 20.8724 11.3171 20.9053V17.0837C11.9409 17.0929 12.5602 17.1275 13.1683 17.1868C13.1415 17.2301 13.1158 17.2746 13.0926 17.3214C12.6969 18.1133 12.1448 20.1655 12.1213 20.2525ZM21.7656 22.5495C19.0522 23.5756 16.938 23.5756 14.2248 22.5495C12.9081 22.0514 12.5024 21.457 12.778 20.4284C12.9692 19.7147 13.4081 18.21 13.7008 17.6249C13.8911 17.2442 14.3085 17.0106 14.6252 16.8814C14.7951 16.812 14.8795 16.6206 14.8154 16.4485L14.5375 15.7022L17.8227 17.6424C17.9291 17.7054 18.0615 17.7054 18.168 17.6424L21.4531 15.7022L21.1756 16.4487C21.1115 16.6206 21.1959 16.8122 21.3657 16.8816C21.6823 17.0108 22.0997 17.2446 22.2902 17.6251C22.5826 18.2098 23.0218 19.7145 23.213 20.4285C23.4883 21.4566 23.0827 22.0514 21.7658 22.5495H21.7656Z" fill="white"/>
</svg>
        </Link>
        <ul className="flex items-center gap-5 uppercase text-light">
          <li className="hover:text-secondary">
            <Link href={"/"}>home</Link>
          </li>
          <li className="hover:text-secondary">
            <Link href={"/ourpizza"}>our pizza</Link>
          </li>
          <li className="hover:text-secondary">
            <Link href={"/about"}>about</Link>
          </li>
          <li className="hover:text-secondary">
            <Link href={"/contact"}>contact</Link>
          </li>
          <div className="flex gap-3 ml-4">
            <CallToAction name={"order takeaway"} link={"/takeaway"} />
            <CallToAction name={"book now"} link={"booking"} />
          </div>
        </ul>
      </div>
    </nav>

  );
}
