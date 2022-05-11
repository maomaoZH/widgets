/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2022 Maomao Meyer-Zhang and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Component, Prop, h, Host, State } from '@stencil/core';
import classNames from 'classnames';

import newsApi from './api/listing';

@Component({
  tag: 'scale-widget-news',
  styleUrl: 'news.css',
  shadow: true,
})
export class News {
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;
  /** (optional) Label of the news widget */
  @Prop() label?: string = '';
  /** (optional) Link news widget target */
  @Prop() target?: string = '_self';
  /** (optional) Link news widget rel */
  @Prop() rel?: string = '';
  /** (optional) Injected CSS styles */

  /** News list array */
  @State() newsList: any;
  @State() activeList: number = 0;
  @State() intervalId: any;
  @State() getNewsIntervalId: any;

  async componentWillLoad() {
    const res = await newsApi.getNews();
    this.newsList = res.data['articles'];

    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.getNext(this.activeList);
      }, 4000);
    }
  }

  getPrev(current) {
    if (current <= 0) {
      this.activeList = this.newsList.length - 1;
    } else {
      this.activeList = current - 1;
    }
  }

  getNext(current) {
    if (current + 1 >= this.newsList.length) {
      this.activeList = 0;
    } else {
      this.activeList = current + 1;
    }
  }

  setActive(index) {
    this.activeList = index;
  }

  disconnectedCallback() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  render() {
    if (this.newsList && this.newsList.length === 0) return null;

    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}
        <div class="news--list-wrapper">
          {this.newsList.map((list, index) => (
            <a
              class={this.getCssClassMap()}
              part={classNames('base', 'interactive')}
              href={list['url']}
              target="_blank"
              {...(!!this.rel ? { rel: this.rel } : {})}
              {...(!!this.label ? { ['aria-label']: this.label } : {})}
              style={{
                opacity: this.activeList === index ? '1' : '0',
                transition: 'opacity 0.5s',
              }}
            >
              <div class="news--image-container">
                <img src={list.urlToImage} />
              </div>
              <div class="news--right-container">
                <h6 class="news--title">{list['source']['name']}</h6>
                <p class="news--subtitle">{list.description}</p>
              </div>
            </a>
          ))}
          <div class="news--nav-wrapper">
            <div
              class="news-prev-arrow"
              onClick={() => this.getPrev(this.activeList)}
            >
              {'<'}
            </div>
            <div class="news--indicator-wrapper">
              {Array.from(Array(this.newsList.length).keys()).map((index) => (
                <div
                  class={`news--indicator news--indicator-${
                    this.activeList === index ? 'active' : 'inactive'
                  }`}
                  onClick={() => this.setActive(index)}
                />
              ))}
            </div>
            <div
              class="news-next-arrow"
              onClick={() => this.getNext(this.activeList)}
            >
              {'>'}
            </div>
          </div>
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames('news');
  }
}
