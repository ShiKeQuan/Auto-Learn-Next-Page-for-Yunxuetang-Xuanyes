// ==UserScript==
// @name         C知2.0自动学习下一页助手
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  自动点击下一页 + 自动处理防挂机弹窗
// @author       Kequan
// @match        *://*.xuanyes.com/*
// @match        *://*.yunxuetang.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const CHECK_INTERVAL = 3000;
    const NEXT_TEXT = "下一个";
    const CONTINUE_TEXT = "继续学习"; // 新增：防挂机按钮文字
    const CLICK_COOLDOWN = 10000;
    const MAX_WAIT_LOOPS = 2;

    let isClicking = false;
    let noTimerLoopCount = 0;

    console.log("自动学习脚本 v1.5 (含防挂机) 已启动...");

    function runAutoNext() {
        // 优先级 0: 检测防挂机弹窗
        // 如果出现防挂机，必须立刻点击，且不执行后续翻页逻辑
        const continueBtn = findElementByText(CONTINUE_TEXT);
        if (continueBtn) {
            console.log("检测到防挂机弹窗，执行点击继续...");
            continueBtn.click();
            if (continueBtn.parentElement && continueBtn.parentElement.tagName === 'BUTTON') {
                continueBtn.parentElement.click();
            }
            return;
        }

        if (isClicking) {
            return;
        }

        const timerSpan = document.querySelector('.yxtbiz-language-slot .yxt-color-warning');
        const nextBtn = findElementByText(NEXT_TEXT);
        const hasVideoPlayer = document.querySelector('.yxtulcdsdk-course-player__iframe') ||
                               document.querySelector('iframe[title="iframe-player"]') ||
                               document.querySelector('iframe[src*=".mp4"]');

        if (timerSpan) {
            noTimerLoopCount = 0;
            const timeText = timerSpan.innerText;
            const seconds = parseInt(timeText);

            if (!isNaN(seconds)) {
                if (seconds <= 0) {
                    doClick(nextBtn);
                }
            }
            return;
        }

        if (hasVideoPlayer) {
            noTimerLoopCount++;
            if (noTimerLoopCount >= MAX_WAIT_LOOPS) {
                doClick(nextBtn);
            }
        } else {
            doClick(nextBtn);
        }
    }

    function doClick(btn) {
        if (btn && !isClicking) {
            isClicking = true;
            btn.click();
            noTimerLoopCount = 0;

            setTimeout(() => {
                isClicking = false;
            }, CLICK_COOLDOWN);
        }
    }

    // 通用文字查找函数 (用于查找“下一个”和“继续学习”)
    function findElementByText(text) {
        const xpath = `//span[contains(text(), '${text}')]`;
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return result.singleNodeValue;
    }

    setInterval(runAutoNext, CHECK_INTERVAL);

})();
