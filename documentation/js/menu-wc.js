'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-38ba79cdefd6999ff3702e259db3d8154e1eea3f800c61187588f4fa18e12773489ca267640dcf949316a1c8b6b7bb045df1a6242a9da37e8b9559f2915b12a9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-38ba79cdefd6999ff3702e259db3d8154e1eea3f800c61187588f4fa18e12773489ca267640dcf949316a1c8b6b7bb045df1a6242a9da37e8b9559f2915b12a9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-38ba79cdefd6999ff3702e259db3d8154e1eea3f800c61187588f4fa18e12773489ca267640dcf949316a1c8b6b7bb045df1a6242a9da37e8b9559f2915b12a9"' :
                                            'id="xs-controllers-links-module-AppModule-38ba79cdefd6999ff3702e259db3d8154e1eea3f800c61187588f4fa18e12773489ca267640dcf949316a1c8b6b7bb045df1a6242a9da37e8b9559f2915b12a9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-38ba79cdefd6999ff3702e259db3d8154e1eea3f800c61187588f4fa18e12773489ca267640dcf949316a1c8b6b7bb045df1a6242a9da37e8b9559f2915b12a9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-38ba79cdefd6999ff3702e259db3d8154e1eea3f800c61187588f4fa18e12773489ca267640dcf949316a1c8b6b7bb045df1a6242a9da37e8b9559f2915b12a9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-38ba79cdefd6999ff3702e259db3d8154e1eea3f800c61187588f4fa18e12773489ca267640dcf949316a1c8b6b7bb045df1a6242a9da37e8b9559f2915b12a9"' :
                                        'id="xs-injectables-links-module-AppModule-38ba79cdefd6999ff3702e259db3d8154e1eea3f800c61187588f4fa18e12773489ca267640dcf949316a1c8b6b7bb045df1a6242a9da37e8b9559f2915b12a9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-a0445dd577a9928a010018374ee473d5b5a15eb046068cc2196fe14e5fad77c9d8dfa85f3c231b33eeb90211f2f8d4e3033a213830c0792a029678fc82547ba3"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-a0445dd577a9928a010018374ee473d5b5a15eb046068cc2196fe14e5fad77c9d8dfa85f3c231b33eeb90211f2f8d4e3033a213830c0792a029678fc82547ba3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a0445dd577a9928a010018374ee473d5b5a15eb046068cc2196fe14e5fad77c9d8dfa85f3c231b33eeb90211f2f8d4e3033a213830c0792a029678fc82547ba3"' :
                                            'id="xs-controllers-links-module-AuthModule-a0445dd577a9928a010018374ee473d5b5a15eb046068cc2196fe14e5fad77c9d8dfa85f3c231b33eeb90211f2f8d4e3033a213830c0792a029678fc82547ba3"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-a0445dd577a9928a010018374ee473d5b5a15eb046068cc2196fe14e5fad77c9d8dfa85f3c231b33eeb90211f2f8d4e3033a213830c0792a029678fc82547ba3"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-a0445dd577a9928a010018374ee473d5b5a15eb046068cc2196fe14e5fad77c9d8dfa85f3c231b33eeb90211f2f8d4e3033a213830c0792a029678fc82547ba3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a0445dd577a9928a010018374ee473d5b5a15eb046068cc2196fe14e5fad77c9d8dfa85f3c231b33eeb90211f2f8d4e3033a213830c0792a029678fc82547ba3"' :
                                        'id="xs-injectables-links-module-AuthModule-a0445dd577a9928a010018374ee473d5b5a15eb046068cc2196fe14e5fad77c9d8dfa85f3c231b33eeb90211f2f8d4e3033a213830c0792a029678fc82547ba3"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-8d0971c0b5a9c17182f19c8dd80fe896f872b4e01bbff38ec4d4d03a2c16dae568003d1372db663a12cecc8ac0f5816e9f3b2a15c4651b7b4958ae87d124fef8"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-8d0971c0b5a9c17182f19c8dd80fe896f872b4e01bbff38ec4d4d03a2c16dae568003d1372db663a12cecc8ac0f5816e9f3b2a15c4651b7b4958ae87d124fef8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-8d0971c0b5a9c17182f19c8dd80fe896f872b4e01bbff38ec4d4d03a2c16dae568003d1372db663a12cecc8ac0f5816e9f3b2a15c4651b7b4958ae87d124fef8"' :
                                            'id="xs-controllers-links-module-PostsModule-8d0971c0b5a9c17182f19c8dd80fe896f872b4e01bbff38ec4d4d03a2c16dae568003d1372db663a12cecc8ac0f5816e9f3b2a15c4651b7b4958ae87d124fef8"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-8d0971c0b5a9c17182f19c8dd80fe896f872b4e01bbff38ec4d4d03a2c16dae568003d1372db663a12cecc8ac0f5816e9f3b2a15c4651b7b4958ae87d124fef8"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-8d0971c0b5a9c17182f19c8dd80fe896f872b4e01bbff38ec4d4d03a2c16dae568003d1372db663a12cecc8ac0f5816e9f3b2a15c4651b7b4958ae87d124fef8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-8d0971c0b5a9c17182f19c8dd80fe896f872b4e01bbff38ec4d4d03a2c16dae568003d1372db663a12cecc8ac0f5816e9f3b2a15c4651b7b4958ae87d124fef8"' :
                                        'id="xs-injectables-links-module-PostsModule-8d0971c0b5a9c17182f19c8dd80fe896f872b4e01bbff38ec4d4d03a2c16dae568003d1372db663a12cecc8ac0f5816e9f3b2a15c4651b7b4958ae87d124fef8"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-eb190324ac9d8f53f2f3c3d0440d6c003db49f3d5d132d04c72a100ad8763ed7fea30d78b0c4e5979101d70fbdcbc9628fe905e8cf065a90108ae8c675db0c33"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-eb190324ac9d8f53f2f3c3d0440d6c003db49f3d5d132d04c72a100ad8763ed7fea30d78b0c4e5979101d70fbdcbc9628fe905e8cf065a90108ae8c675db0c33"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-eb190324ac9d8f53f2f3c3d0440d6c003db49f3d5d132d04c72a100ad8763ed7fea30d78b0c4e5979101d70fbdcbc9628fe905e8cf065a90108ae8c675db0c33"' :
                                            'id="xs-controllers-links-module-UsersModule-eb190324ac9d8f53f2f3c3d0440d6c003db49f3d5d132d04c72a100ad8763ed7fea30d78b0c4e5979101d70fbdcbc9628fe905e8cf065a90108ae8c675db0c33"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-eb190324ac9d8f53f2f3c3d0440d6c003db49f3d5d132d04c72a100ad8763ed7fea30d78b0c4e5979101d70fbdcbc9628fe905e8cf065a90108ae8c675db0c33"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-eb190324ac9d8f53f2f3c3d0440d6c003db49f3d5d132d04c72a100ad8763ed7fea30d78b0c4e5979101d70fbdcbc9628fe905e8cf065a90108ae8c675db0c33"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-eb190324ac9d8f53f2f3c3d0440d6c003db49f3d5d132d04c72a100ad8763ed7fea30d78b0c4e5979101d70fbdcbc9628fe905e8cf065a90108ae8c675db0c33"' :
                                        'id="xs-injectables-links-module-UsersModule-eb190324ac9d8f53f2f3c3d0440d6c003db49f3d5d132d04c72a100ad8763ed7fea30d78b0c4e5979101d70fbdcbc9628fe905e8cf065a90108ae8c675db0c33"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDTO.html" data-type="entity-link" >CreatePostDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDTO.html" data-type="entity-link" >LoginUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});