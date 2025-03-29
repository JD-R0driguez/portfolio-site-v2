import React from "react";
import 'animate.css';
import './LeftBar.css'


export default function LeftBar() {
    return (
        <div className="left-bar animate__animated animate__fadeIn">
            <div className="svg-container git-hub">
                <a href="https://github.com/JD-R0driguez">
                    <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" class="svg-icon">
                        <title>Link to Github</title>
                        <path class="svg-path" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"></path>
                    </svg>
                </a>
            </div>
            <div className="svg-container linked-in">
                <a href="https://www.linkedin.com/in/juandavid-rodriguez/">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon"><g id="SVGRepo_iconCarrier">
                        <title>Link to Linkedin</title>
                        <path class="svg-path" d="M18 22V15C18 13.8954 17.1046 13 16 13C14.8954 13 14 13.8954 14 15V22H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path class="svg-path" d="M10 22V15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15V22H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <rect class="svg-path" x="3" y="9" width="4" height="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></rect> <circle class="svg-path" cx="5" cy="4" r="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle> </g>
                    </svg>
                </a>
            </div>
            <div className="svg-container email">
                <a href="mailto:jd.rodriguez.or@gmail.com">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon"><g id="SVGRepo_iconCarrier">
                        <title>Link to send email</title>
                        <path class="svg-path" d="M3 7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                    </svg>
                </a>
            </div>
            <div class="vertical-line"></div>

        </div>
    )
}