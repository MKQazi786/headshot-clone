import React from "react";
import Logo from "../image/Logo.png"
import "../cssPages/dashboard.css"
const asideBar = () => {
    return (
        <aside>
            <div className="asideBar" >
                <img src={Logo} alt="Logo" />
                <p><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.33333 0H3.33333C2.44928 0 1.60143 0.351189 0.976311 0.976311C0.351189 1.60143 0 2.44928 0 3.33333C0 4.21739 0.351189 5.06523 0.976311 5.69036C1.60143 6.31548 2.44928 6.66667 3.33333 6.66667H7.33333C8.21739 6.66667 9.06524 6.31548 9.69036 5.69036C10.3155 5.06523 10.6667 4.21739 10.6667 3.33333C10.6667 2.44928 10.3155 1.60143 9.69036 0.976311C9.06524 0.351189 8.21739 0 7.33333 0ZM7.33333 5.33333H3.33333C2.8029 5.33333 2.29419 5.12262 1.91912 4.74755C1.54405 4.37247 1.33333 3.86377 1.33333 3.33333C1.33333 2.8029 1.54405 2.29419 1.91912 1.91912C2.29419 1.54405 2.8029 1.33333 3.33333 1.33333H7.33333C7.86377 1.33333 8.37247 1.54405 8.74755 1.91912C9.12262 2.29419 9.33333 2.8029 9.33333 3.33333C9.33333 3.86377 9.12262 4.37247 8.74755 4.74755C8.37247 5.12262 7.86377 5.33333 7.33333 5.33333ZM7.33333 9.33333H3.33333C2.44928 9.33333 1.60143 9.68452 0.976311 10.3096C0.351189 10.9348 0 11.7826 0 12.6667V20.6667C0 21.5507 0.351189 22.3986 0.976311 23.0237C1.60143 23.6488 2.44928 24 3.33333 24H7.33333C8.21739 24 9.06524 23.6488 9.69036 23.0237C10.3155 22.3986 10.6667 21.5507 10.6667 20.6667V12.6667C10.6667 11.7826 10.3155 10.9348 9.69036 10.3096C9.06524 9.68452 8.21739 9.33333 7.33333 9.33333ZM9.33333 20.6667C9.33333 21.1971 9.12262 21.7058 8.74755 22.0809C8.37247 22.456 7.86377 22.6667 7.33333 22.6667H3.33333C2.8029 22.6667 2.29419 22.456 1.91912 22.0809C1.54405 21.7058 1.33333 21.1971 1.33333 20.6667V12.6667C1.33333 12.1362 1.54405 11.6275 1.91912 11.2525C2.29419 10.8774 2.8029 10.6667 3.33333 10.6667H7.33333C7.86377 10.6667 8.37247 10.8774 8.74755 11.2525C9.12262 11.6275 9.33333 12.1362 9.33333 12.6667V20.6667ZM20.6667 17.3333H16.6667C15.7826 17.3333 14.9348 17.6845 14.3096 18.3096C13.6845 18.9348 13.3333 19.7826 13.3333 20.6667C13.3333 21.5507 13.6845 22.3986 14.3096 23.0237C14.9348 23.6488 15.7826 24 16.6667 24H20.6667C21.5507 24 22.3986 23.6488 23.0237 23.0237C23.6488 22.3986 24 21.5507 24 20.6667C24 19.7826 23.6488 18.9348 23.0237 18.3096C22.3986 17.6845 21.5507 17.3333 20.6667 17.3333ZM20.6667 22.6667H16.6667C16.1362 22.6667 15.6275 22.456 15.2525 22.0809C14.8774 21.7058 14.6667 21.1971 14.6667 20.6667C14.6667 20.1362 14.8774 19.6275 15.2525 19.2525C15.6275 18.8774 16.1362 18.6667 16.6667 18.6667H20.6667C21.1971 18.6667 21.7058 18.8774 22.0809 19.2525C22.456 19.6275 22.6667 20.1362 22.6667 20.6667C22.6667 21.1971 22.456 21.7058 22.0809 22.0809C21.7058 22.456 21.1971 22.6667 20.6667 22.6667ZM20.6667 0H16.6667C15.7826 0 14.9348 0.351189 14.3096 0.976311C13.6845 1.60143 13.3333 2.44928 13.3333 3.33333V11.3333C13.3333 12.2174 13.6845 13.0652 14.3096 13.6904C14.9348 14.3155 15.7826 14.6667 16.6667 14.6667H20.6667C21.5507 14.6667 22.3986 14.3155 23.0237 13.6904C23.6488 13.0652 24 12.2174 24 11.3333V3.33333C24 2.44928 23.6488 1.60143 23.0237 0.976311C22.3986 0.351189 21.5507 0 20.6667 0ZM22.6667 11.3333C22.6667 11.8638 22.456 12.3725 22.0809 12.7475C21.7058 13.1226 21.1971 13.3333 20.6667 13.3333H16.6667C16.1362 13.3333 15.6275 13.1226 15.2525 12.7475C14.8774 12.3725 14.6667 11.8638 14.6667 11.3333V3.33333C14.6667 2.8029 14.8774 2.29419 15.2525 1.91912C15.6275 1.54405 16.1362 1.33333 16.6667 1.33333H20.6667C21.1971 1.33333 21.7058 1.54405 22.0809 1.91912C22.456 2.29419 22.6667 2.8029 22.6667 3.33333V11.3333Z" fill="white" /></svg>Dashboard</p>
                <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.86426 8.74908L10.8335 1L23.5337 2.58639L21.9473 15.2866L14.4863 14.354" stroke="#FC4A1A" stroke-linejoin="round" /><path d="M11.7529 8.38798L12.4204 3.03906L21.4953 4.17285L20.3615 13.2477L14.0114 12.4522" stroke="#FC4A1A" stroke-linejoin="round" /><path d="M16.2051 10.1116L14.9388 8.48866C13.9193 7.17657 15.5422 5.9102 16.5617 7.22229C17.8738 6.20279 19.1356 7.82576 17.8281 8.84525L16.2051 10.1116ZM0.5625 10.673L13.1439 8.31402L15.5029 20.8954L2.92151 23.2544L0.5625 10.673Z" stroke="#FC4A1A" stroke-linejoin="round" /><path d="M2.69727 12.1331L11.6839 10.448L13.369 19.4346L4.38286 21.1202L2.69727 12.1331Z" stroke="#FC4A1A" stroke-linejoin="round" /><path d="M8.45607 17.7143L6.75538 16.544C5.38387 15.6068 6.54508 13.9061 7.9166 14.8433C8.85381 13.4718 10.5545 14.633 9.61728 16.0045L8.45607 17.7143Z" stroke="#FC4A1A" stroke-linejoin="round" /></svg>Photo generator</p>
                <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1646 22H2.83542C2.61385 22 2.40136 21.904 2.24469 21.733C2.08802 21.5621 2 21.3302 2 21.0885V10.9115C2 10.6698 2.08802 10.4379 2.24469 10.267C2.40136 10.096 2.61385 10 2.83542 10H21.1646C21.3861 10 21.5986 10.096 21.7553 10.267C21.912 10.4379 22 10.6698 22 10.9115V21.0885C22 21.3302 21.912 21.5621 21.7553 21.733C21.5986 21.904 21.3861 22 21.1646 22ZM3.67084 20.177H20.3292V11.823H3.67084V20.177Z" fill="white" /><path d="M20.0973 12H3.90271C3.6633 12 3.43369 11.9144 3.2644 11.762C3.09511 11.6097 3 11.403 3 11.1875V6.81246C3 6.59698 3.09511 6.39033 3.2644 6.23796C3.43369 6.0856 3.6633 6 3.90271 6H20.0973C20.3367 6 20.5663 6.0856 20.7356 6.23796C20.9049 6.39033 21 6.59698 21 6.81246V11.1875C21 11.403 20.9049 11.6097 20.7356 11.762C20.5663 11.9144 20.3367 12 20.0973 12ZM4.80542 10.3751H19.1946V7.62492H4.80542V10.3751Z" fill="white" /><path d="M17.2308 7H6.76923C6.56522 7 6.36956 6.9175 6.2253 6.77064C6.08104 6.62378 6 6.4246 6 6.21691V2.78309C6 2.5754 6.08104 2.37622 6.2253 2.22936C6.36956 2.0825 6.56522 2 6.76923 2H17.2308C17.4348 2 17.6304 2.0825 17.7747 2.22936C17.919 2.37622 18 2.5754 18 2.78309V6.21691C18 6.4246 17.919 6.62378 17.7747 6.77064C17.6304 6.9175 17.4348 7 17.2308 7ZM7.53846 5.43383H16.4615V3.56617H7.53846V5.43383Z" fill="white" /></svg>My Collection</p>
                <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0036 15.0078C11.0695 15.0078 10.2221 14.5644 9.48239 13.6844C9.47122 13.6733 9.46185 13.6605 9.45461 13.6466C8.71838 12.715 8.2565 11.4844 8.00299 10.6112C7.43692 8.68625 8.13495 6.6375 9.73243 5.52031C9.82272 5.45844 9.91302 5.39656 10.0068 5.34156C10.1492 5.25563 10.3367 5.28656 10.4409 5.41375C10.4617 5.43781 12.5975 7.985 15.4382 9.04719C15.5563 9.09188 15.6396 9.195 15.6535 9.31875L15.657 9.34625C15.7924 10.4669 15.5424 11.6734 14.9312 12.8387C14.2019 14.2447 13.1635 15.0078 12.0036 15.0078ZM10.0241 13.2856C10.6319 13.9938 11.2778 14.3409 12.0036 14.3409C13.2122 14.3409 13.9727 13.2203 14.3234 12.5534C14.8513 11.5463 15.084 10.5356 15.0076 9.59719C12.5732 8.62781 10.7152 6.72688 10.1214 6.06688C8.75658 7.0225 8.16621 8.77219 8.6524 10.4256C8.89549 11.2506 9.32612 12.4091 10.0068 13.2581C10.0137 13.2684 10.0207 13.2788 10.0241 13.2856Z" fill="white" /><path d="M13.5004 14.4612C13.3545 14.4612 13.2226 14.3684 13.1774 14.2241C13.1527 14.1393 13.1624 14.0483 13.2046 13.9705C13.2468 13.8928 13.3181 13.8345 13.4032 13.8081C15.7855 13.1069 17.4455 10.5906 17.4455 7.68937C17.4455 4.25531 15.15 1.66688 12.1078 1.66688C9.11428 1.66688 6.77015 4.31375 6.77015 7.68937C6.77015 10.3603 8.20094 12.7494 10.3332 13.6363C10.5034 13.7084 10.5867 13.9044 10.5138 14.0728C10.4409 14.2413 10.2429 14.3237 10.0728 14.2516C7.69391 13.2616 6.09643 10.625 6.09643 7.68937C6.09643 3.93906 8.73922 1 12.1078 1C15.4799 1 18.1192 3.93906 18.1192 7.68937C18.1192 10.8828 16.2578 13.6638 13.5942 14.4475C13.5629 14.4578 13.5317 14.4612 13.5004 14.4612Z" fill="white" /><path d="M11.7987 23C9.32612 23 6.88128 22.6975 4.48853 22.0959C3.39808 21.8175 2.29721 21.4772 1.22065 21.075C1.14353 21.047 1.07941 20.9921 1.04039 20.9205C1.00137 20.849 0.990137 20.7657 1.00881 20.6866C1.6096 18.1222 2.61671 16.5169 5.9853 15.8844C6.37773 15.8087 6.81182 15.7469 7.2737 15.7022C8.53085 15.4066 9.08649 14.09 9.27055 13.5366C9.28393 13.4948 9.30556 13.4561 9.33418 13.4228C9.36281 13.3894 9.39786 13.362 9.43729 13.3422C9.47672 13.3223 9.51975 13.3105 9.56386 13.3072C9.60797 13.304 9.65229 13.3095 9.69423 13.3234C9.87134 13.3784 9.96858 13.5675 9.90954 13.7428C9.69076 14.4097 9.01357 15.9978 7.4022 16.3588C7.38831 16.3622 7.37441 16.3656 7.36052 16.3656C6.91253 16.4103 6.48886 16.4688 6.11032 16.5409C3.21055 17.0841 2.29026 18.3766 1.73462 20.5525C2.70005 20.8997 3.67938 21.2022 4.65175 21.4497C9.39904 22.6459 14.3408 22.6288 19.3486 21.3947C20.314 21.1541 21.2933 20.8688 22.2622 20.5456C21.7066 18.3731 20.7828 17.0841 17.89 16.5409C17.508 16.4688 17.0878 16.4103 16.6398 16.3656C16.6259 16.3656 16.612 16.3622 16.5981 16.3588C15.5007 16.1113 14.6013 15.1934 14.1324 13.8459C14.1179 13.8046 14.1118 13.7609 14.1144 13.7173C14.117 13.6736 14.1283 13.6309 14.1477 13.5916C14.167 13.5523 14.1941 13.5172 14.2272 13.4882C14.2604 13.4593 14.299 13.4372 14.3408 13.4231C14.5179 13.3612 14.7089 13.4575 14.768 13.6294C14.952 14.1588 15.5111 15.4169 16.7266 15.7056C17.1885 15.7503 17.6226 15.8122 18.015 15.8878C21.3836 16.5203 22.3907 18.1256 22.9915 20.69C23.0297 20.855 22.9359 21.0234 22.7727 21.0819C21.6927 21.4531 20.5953 21.7763 19.5118 22.0478C16.9211 22.6803 14.3443 23 11.7987 23Z" fill="white" /><path d="M4.57535 22.1063C4.52284 22.1061 4.47108 22.0938 4.42418 22.0704C4.37729 22.047 4.33655 22.0131 4.3052 21.9714C4.27386 21.9297 4.25276 21.8814 4.24359 21.8302C4.23442 21.779 4.23743 21.7264 4.25239 21.6766C4.81498 19.8134 6.51664 18.5656 8.48223 18.5656C9.87482 18.5656 11.1875 19.2256 12.014 20.3187C12.844 19.2256 14.1533 18.5656 15.5493 18.5656C17.4837 18.5656 19.1749 19.7928 19.7583 21.6216C19.7853 21.7059 19.7774 21.7974 19.7364 21.876C19.6954 21.9546 19.6246 22.0139 19.5396 22.0409C19.4544 22.0676 19.362 22.0598 19.2825 22.0192C19.2031 21.9787 19.1432 21.9086 19.1159 21.8244C18.6227 20.2775 17.1885 19.2359 15.5493 19.2359C14.2193 19.2359 12.976 19.9475 12.3058 21.0956C12.2467 21.1987 12.1356 21.2606 12.014 21.2606C11.8925 21.2606 11.7814 21.1987 11.7223 21.0956C11.0521 19.9509 9.81231 19.2359 8.48223 19.2359C6.81877 19.2359 5.37757 20.2947 4.89832 21.8725C4.85318 22.0134 4.72121 22.1063 4.57535 22.1063Z" fill="white" /><path d="M16.6745 19.3941C16.6294 19.3941 16.5808 19.3837 16.5391 19.3666C16.3689 19.2909 16.2925 19.095 16.3689 18.9266L17.6504 16.0803C17.7268 15.9119 17.9247 15.8363 18.0949 15.9119C18.2651 15.9875 18.3415 16.1834 18.2651 16.3519L16.9836 19.1981C16.928 19.3184 16.8065 19.3941 16.6745 19.3941ZM7.33274 19.3941C7.20425 19.3941 7.07923 19.3219 7.02366 19.1947L5.74221 16.3484C5.66581 16.18 5.74221 15.9841 5.91237 15.9084C6.08254 15.8328 6.28049 15.9084 6.35689 16.0769L7.63835 18.9231C7.71475 19.0916 7.63835 19.2875 7.46818 19.3631C7.42303 19.3837 7.37789 19.3941 7.33274 19.3941Z" fill="white" /><path d="M12.0036 15.0078C11.0695 15.0078 10.2221 14.5644 9.48239 13.6844C9.47122 13.6733 9.46185 13.6605 9.45461 13.6466C8.71838 12.715 8.2565 11.4844 8.00299 10.6112C7.43692 8.68625 8.13495 6.6375 9.73243 5.52031C9.82272 5.45844 9.91302 5.39656 10.0068 5.34156C10.1492 5.25563 10.3367 5.28656 10.4409 5.41375C10.4617 5.43781 12.5975 7.985 15.4382 9.04719C15.5563 9.09188 15.6396 9.195 15.6535 9.31875L15.657 9.34625C15.7924 10.4669 15.5424 11.6734 14.9312 12.8387C14.2019 14.2447 13.1635 15.0078 12.0036 15.0078ZM10.0241 13.2856C10.6319 13.9938 11.2778 14.3409 12.0036 14.3409C13.2122 14.3409 13.9727 13.2203 14.3234 12.5534C14.8513 11.5463 15.084 10.5356 15.0076 9.59719C12.5732 8.62781 10.7152 6.72688 10.1214 6.06688C8.75658 7.0225 8.16621 8.77219 8.6524 10.4256C8.89549 11.2506 9.32612 12.4091 10.0068 13.2581C10.0137 13.2684 10.0207 13.2788 10.0241 13.2856Z" stroke="white" stroke-width="0.4" /><path d="M13.5004 14.4612C13.3545 14.4612 13.2226 14.3684 13.1774 14.2241C13.1527 14.1393 13.1624 14.0483 13.2046 13.9705C13.2468 13.8928 13.3181 13.8345 13.4032 13.8081C15.7855 13.1069 17.4455 10.5906 17.4455 7.68937C17.4455 4.25531 15.15 1.66688 12.1078 1.66688C9.11428 1.66688 6.77015 4.31375 6.77015 7.68937C6.77015 10.3603 8.20094 12.7494 10.3332 13.6363C10.5034 13.7084 10.5867 13.9044 10.5138 14.0728C10.4409 14.2413 10.2429 14.3237 10.0728 14.2516C7.69391 13.2616 6.09643 10.625 6.09643 7.68937C6.09643 3.93906 8.73922 1 12.1078 1C15.4799 1 18.1192 3.93906 18.1192 7.68937C18.1192 10.8828 16.2578 13.6638 13.5942 14.4475C13.5629 14.4578 13.5317 14.4612 13.5004 14.4612Z" stroke="white" stroke-width="0.4" /><path d="M11.7987 23C9.32612 23 6.88128 22.6975 4.48853 22.0959C3.39808 21.8175 2.29721 21.4772 1.22065 21.075C1.14353 21.047 1.07941 20.9921 1.04039 20.9205C1.00137 20.849 0.990137 20.7657 1.00881 20.6866C1.6096 18.1222 2.61671 16.5169 5.9853 15.8844C6.37773 15.8087 6.81182 15.7469 7.2737 15.7022C8.53085 15.4066 9.08649 14.09 9.27055 13.5366C9.28393 13.4948 9.30556 13.4561 9.33418 13.4228C9.36281 13.3894 9.39786 13.362 9.43729 13.3422C9.47672 13.3223 9.51975 13.3105 9.56386 13.3072C9.60797 13.304 9.65229 13.3095 9.69423 13.3234C9.87134 13.3784 9.96858 13.5675 9.90954 13.7428C9.69076 14.4097 9.01357 15.9978 7.4022 16.3588C7.38831 16.3622 7.37441 16.3656 7.36052 16.3656C6.91253 16.4103 6.48886 16.4688 6.11032 16.5409C3.21055 17.0841 2.29026 18.3766 1.73462 20.5525C2.70005 20.8997 3.67938 21.2022 4.65175 21.4497C9.39904 22.6459 14.3408 22.6288 19.3486 21.3947C20.314 21.1541 21.2933 20.8688 22.2622 20.5456C21.7066 18.3731 20.7828 17.0841 17.89 16.5409C17.508 16.4688 17.0878 16.4103 16.6398 16.3656C16.6259 16.3656 16.612 16.3622 16.5981 16.3588C15.5007 16.1113 14.6013 15.1934 14.1324 13.8459C14.1179 13.8046 14.1118 13.7609 14.1144 13.7173C14.117 13.6736 14.1283 13.6309 14.1477 13.5916C14.167 13.5523 14.1941 13.5172 14.2272 13.4882C14.2604 13.4593 14.299 13.4372 14.3408 13.4231C14.5179 13.3612 14.7089 13.4575 14.768 13.6294C14.952 14.1588 15.5111 15.4169 16.7266 15.7056C17.1885 15.7503 17.6226 15.8122 18.015 15.8878C21.3836 16.5203 22.3907 18.1256 22.9915 20.69C23.0297 20.855 22.9359 21.0234 22.7727 21.0819C21.6927 21.4531 20.5953 21.7763 19.5118 22.0478C16.9211 22.6803 14.3443 23 11.7987 23Z" stroke="white" stroke-width="0.4" /><path d="M4.57535 22.1063C4.52284 22.1061 4.47108 22.0938 4.42418 22.0704C4.37729 22.047 4.33655 22.0131 4.3052 21.9714C4.27386 21.9297 4.25276 21.8814 4.24359 21.8302C4.23442 21.779 4.23743 21.7264 4.25239 21.6766C4.81498 19.8134 6.51664 18.5656 8.48223 18.5656C9.87482 18.5656 11.1875 19.2256 12.014 20.3187C12.844 19.2256 14.1533 18.5656 15.5493 18.5656C17.4837 18.5656 19.1749 19.7928 19.7583 21.6216C19.7853 21.7059 19.7774 21.7974 19.7364 21.876C19.6954 21.9546 19.6246 22.0139 19.5396 22.0409C19.4544 22.0676 19.362 22.0598 19.2825 22.0192C19.2031 21.9787 19.1432 21.9086 19.1159 21.8244C18.6227 20.2775 17.1885 19.2359 15.5493 19.2359C14.2193 19.2359 12.976 19.9475 12.3058 21.0956C12.2467 21.1987 12.1356 21.2606 12.014 21.2606C11.8925 21.2606 11.7814 21.1987 11.7223 21.0956C11.0521 19.9509 9.81231 19.2359 8.48223 19.2359C6.81877 19.2359 5.37757 20.2947 4.89832 21.8725C4.85318 22.0134 4.72121 22.1063 4.57535 22.1063Z" stroke="white" stroke-width="0.4" /><path d="M16.6745 19.3941C16.6294 19.3941 16.5808 19.3837 16.5391 19.3666C16.3689 19.2909 16.2925 19.095 16.3689 18.9266L17.6504 16.0803C17.7268 15.9119 17.9247 15.8363 18.0949 15.9119C18.2651 15.9875 18.3415 16.1834 18.2651 16.3519L16.9836 19.1981C16.928 19.3184 16.8065 19.3941 16.6745 19.3941ZM7.33274 19.3941C7.20425 19.3941 7.07923 19.3219 7.02366 19.1947L5.74221 16.3484C5.66581 16.18 5.74221 15.9841 5.91237 15.9084C6.08254 15.8328 6.28049 15.9084 6.35689 16.0769L7.63835 18.9231C7.71475 19.0916 7.63835 19.2875 7.46818 19.3631C7.42303 19.3837 7.37789 19.3941 7.33274 19.3941Z" stroke="white" stroke-width="0.4" /></svg>Train Model</p>
                <p class="bi bi-box-seam">Package</p>
                <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_114_1646)"><path d="M23.5205 12C23.5205 5.63766 18.3628 0.47998 12.0005 0.47998C5.63815 0.47998 0.480469 5.63766 0.480469 12C0.480469 18.3623 5.63815 23.52 12.0005 23.52C18.3628 23.52 23.5205 18.3623 23.5205 12Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" /><path d="M19.4691 15.5041C19.4514 16.5663 19.0156 17.5788 18.2564 18.3219C17.4971 19.065 16.4755 19.4789 15.4131 19.4737H14.0115C13.4976 19.4749 12.9887 19.3741 12.5141 19.1772C12.0395 18.9803 11.6087 18.6911 11.2466 18.3265C10.6925 17.78 10.3138 17.0809 10.1587 16.3183C10.0036 15.5557 10.0791 14.7641 10.3758 14.0446C10.6724 13.3252 11.1767 12.7104 11.8242 12.2787C12.4718 11.847 13.2332 11.618 14.0115 11.6209H15.5523C16.582 11.6208 17.5703 12.0262 18.3033 12.7494C19.0364 13.4725 19.4552 14.4553 19.4691 15.4849V15.5041Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" /><path d="M14.7839 9.54245C16.1677 9.54245 17.2895 8.42066 17.2895 7.03685C17.2895 5.65305 16.1677 4.53125 14.7839 4.53125C13.4001 4.53125 12.2783 5.65305 12.2783 7.03685C12.2783 8.42066 13.4001 9.54245 14.7839 9.54245Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" /><path d="M11.2467 18.3408C10.9573 18.6986 10.5916 18.9873 10.1764 19.1858C9.7612 19.3843 9.30691 19.4875 8.8467 19.488H7.6419C6.83429 19.4871 6.05893 19.171 5.48074 18.6072C4.90254 18.0433 4.56715 17.2762 4.5459 16.4688C4.54966 16.0484 4.63621 15.6328 4.80059 15.2458C4.96498 14.8588 5.20398 14.508 5.50395 14.2134C5.80393 13.9187 6.159 13.6861 6.54889 13.5287C6.93878 13.3713 7.35585 13.2922 7.7763 13.296H8.8611C9.4556 13.2911 10.0389 13.4578 10.5411 13.776C10.1657 14.5135 10.0331 15.3508 10.1625 16.1681C10.2918 16.9854 10.6763 17.7409 11.2611 18.3264L11.2467 18.3408Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" /><path d="M8.2324 11.6257C9.32725 11.6257 10.2148 10.7381 10.2148 9.64329C10.2148 8.54844 9.32725 7.66089 8.2324 7.66089C7.13755 7.66089 6.25 8.54844 6.25 9.64329C6.25 10.7381 7.13755 11.6257 8.2324 11.6257Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" /></g><defs><clipPath id="clip0_114_1646"><rect width="24" height="24" fill="white" /></clipPath></defs></svg>Users</p>
                <p class="bi bi-gear">Setting</p>
                <p><svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 11C0 11.3037 0.251862 11.55 0.5625 11.55H10.4547L7.47729 14.4611C7.37183 14.5643 7.31257 14.7041 7.31257 14.8499C7.3125 15.1537 7.56436 15.3999 7.875 15.4C8.02421 15.4001 8.1673 15.3422 8.27264 15.2389L12.2101 11.3889C12.2102 11.3888 12.2103 11.3888 12.2103 11.3887C12.4299 11.174 12.4298 10.8258 12.2101 10.6112L8.27264 6.7612C8.0547 6.55535 7.70911 6.55535 7.4911 6.7612C7.26766 6.97222 7.26148 7.3204 7.47729 7.53887L10.4547 10.45H0.5625C0.251862 10.45 0 10.6963 0 11ZM15.1875 0H2.8125C1.25979 0.00140987 0.00144191 1.23179 0 2.75V7.15C0 7.45374 0.251862 7.7 0.5625 7.7C0.873138 7.7 1.125 7.45374 1.125 7.15V2.75C1.12603 1.83913 1.88093 1.10101 2.8125 1.1H15.1875C16.1191 1.10101 16.874 1.83913 16.875 2.75V19.25C16.874 20.1609 16.1191 20.899 15.1875 20.9H2.8125C1.88093 20.899 1.12603 20.1609 1.125 19.25V14.85C1.125 14.5463 0.873138 14.3 0.5625 14.3C0.251862 14.3 0 14.5463 0 14.85V19.25C0.00144191 20.7682 1.25979 21.9986 2.8125 22H15.1875C16.7402 21.9986 17.9986 20.7682 18 19.25V2.75C17.9986 1.23179 16.7402 0.00140987 15.1875 0Z" fill="white" /></svg>Logout</p>
            </div>
            <div>
                <button type="button" class="btn-Btn"><i class="bi bi-rocket-takeoff">AFFALIATES</i></button>
                <p>version 1.5.6</p>
            </div>

        </aside>
    )
}

export default asideBar;