(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{328:function(v,_,t){"use strict";t.r(_);var a=t(7),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"团队运营中台产品的实战"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#团队运营中台产品的实战"}},[v._v("#")]),v._v(" 团队运营中台产品的实战")]),v._v(" "),_("h2",{attrs:{id:"背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[v._v("#")]),v._v(" 背景")]),v._v(" "),_("p",[v._v("这里的产品并不是互联网运营的，而是内部研发产品，后期用于项目。")]),v._v(" "),_("p",[v._v("中台产品管理，产品线大概有20个，产品工程管理基线是50个左右，自动化任务大概有250+个，当前维护AIP产品的属于微小团队，当前产品线的管理维护人员为6个人，主要偏向于产品功能的优化管理和升级，前端ISV团队的支撑，项目的技术支撑，还有针对于运行的数据治理上的二次开发（比如基于日志分析的安全感触服务），配合商务的输出等。")]),v._v(" "),_("p",[v._v("过程的管理主要是基于过程规范标准化、自动化操作、微服务、容器化管理、数字中台架构、云计算等。")]),v._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),_("p",[v._v("在这个建设过程中，基于原来alinesno-cloud开源项目进行升级优化，这里主要是针对在过程的实践情况，还有团队的使用情况，包括主要使用的技术能力，运维管理，运营管理等，以低成本进行运维，提升团队的能力的竞争力，希望可以给一些在往这块方向的团队一些参考，在这个过程中主要使用的技术场景如下：")]),v._v(" "),_("ul",[_("li",[v._v("规划化标准化：工程过程的标准化和规划化，规避掉培训成本，管理成本，学习成本、升级成本的问题，形成统一化，比如在升级只需要调整核心包即可。")]),v._v(" "),_("li",[v._v("微服务：工程的划分会提高运行的稳定性，根据场景各个服务可拆分，可组件，规避工程的耦合，还有管理职责分开等，还有微服务的性能还有分布式等能力")]),v._v(" "),_("li",[v._v("自动化：主要是人工的解放，还有流程标准化的自动化，规避掉一些低级的人工错误，操作成本等，比如过程的流水化、备份管理、日志清理、数据抽取等。")]),v._v(" "),_("li",[v._v("容器化：这里主要是服务的发布管理和部署低成本，还有工程版本的维护，一键部署的管理，运行监控，比如链路跟踪，客户项目发布等。")]),v._v(" "),_("li",[v._v("数字中台架构：基础技术组件和数据治理组件的融合，对项目业务上进行数字化解决方案和项目的数据治理、规范处理、还有业务项目开发的管理等。")]),v._v(" "),_("li",[v._v("运行监控：这里主要是运维上的预警管理、还有运行状态巡检、应用存活的管理等。")])]),v._v(" "),_("p",[v._v("这里阐述主要通过几个方面进行实践阐述，偏向于落地：")]),v._v(" "),_("ul",[_("li",[v._v("标准化和规划化的要求，怎么样做到项目和工程架构的统一，怎么样要求落地。")]),v._v(" "),_("li",[v._v("基础环境能力的搭建，使用的资源有多少，后期怎么管理。")]),v._v(" "),_("li",[v._v("产品的迭代升级管理，还有过程怎么降低产品管理成本。")]),v._v(" "),_("li",[v._v("项目交付实施的过程是怎么样的，怎么做项目交付支撑。")])]),v._v(" "),_("p",[v._v("以上的所有操作过程基于整个DevOps/GitOps/DataOps架构进行整合，过程形成流水线管理，每个架构师设计有自己的情况，我有我思。")]),v._v(" "),_("h2",{attrs:{id:"过程实践"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#过程实践"}},[v._v("#")]),v._v(" 过程实践")]),v._v(" "),_("p",[v._v("这里通过几个阶段过程，将过程有节点进行细化说明，以下为主要维护产品的团队。")]),v._v(" "),_("h3",{attrs:{id:"标准化和规划化的要求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标准化和规划化的要求"}},[v._v("#")]),v._v(" 标准化和规划化的要求")]),v._v(" "),_("blockquote",[_("p",[v._v("怎么样做到项目和工程架构的统一，怎么样要求")])]),v._v(" "),_("p",[v._v("如果说这个制定过程需要做很多部门、沟通、还有使用过程问题矛盾等，那就规避掉这些。")]),v._v(" "),_("p",[v._v("前几次在其它团队做平台的时候，前期最大的问题，就是沟通和团队人员的提升，这个会花掉很多力气，特别是在意见上几乎很难统一，团队越大，这个问题就越突出，会给培训、还有各种技术思维的输入等，做好前期的准备。但是这个成本在中小团队成本是极高的，而且还有一个问题是人员流失的问题，培养出来了人走了，后来换了一个思路，做这块的只需要一两个高级人员，后期提供出代码生成器和标准文档，发给项目组和开发就行，其它的人员并不需要特别关注。")]),v._v(" "),_("p",[v._v("比如开发人员一定要会使用微服务？一定要会springcloud的么？其实不然，自己并不一定需要学习这个，会写controller，还有查询mybatis编写即可，后面学习中会有遇到，这个过程可以做到无感。")]),v._v(" "),_("p",[v._v("开发人员会主动去查询材料和学习，主动跟被动的区别，效果差异是极大的，后面定义好岗位职责的考核，根据过程做适当的培训，这个过程团队成长更快。")]),v._v(" "),_("p",[v._v("标准化前期部分主要参考社区的流程，还有架构也一样，但是这些不要紧，先有一版本，技术还有能力很快就会沉淀在前期架构的人员上，这个过程会不断的迭代，所以在这块上的选人是很重要，至少能总结和有兴趣，有优化的主动性。在建设出来一版本标准规范之后，将代码做核心公共包的封装，再加上代码生成器，出来即是规范，几乎是可以做到对团队人员的无感知。")]),v._v(" "),_("p",[v._v("这个过程差不多1个月左右。")]),v._v(" "),_("p",[v._v("在前期的框架封装上避免过度封装，这个是新人架构师的一个痛点，会有非常多的idea，但是前期基本上都禁掉了，换成的思路是先出一版简版的，再根据一些项目过程中，了解问题，再进一步的升级封装。")]),v._v(" "),_("p",[v._v("这个过程经历过1个项目就基本上就比较成熟，包括架构人员，具体时间看项目的情况。这个过程会遇到一些问题，也是允许的，这个是之前的培训成本遗留下来导致的，这个时候可以多一些使用培训 ，针对问题来进行统一的培训或者指导处理，过程多与团队沟通解决掉即可。")]),v._v(" "),_("h3",{attrs:{id:"基础环境能力的搭建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础环境能力的搭建"}},[v._v("#")]),v._v(" 基础环境能力的搭建")]),v._v(" "),_("blockquote",[_("p",[v._v("使用的资源有多少，后期怎么管理")])]),v._v(" "),_("p",[v._v("这里基础环境搭建分几个部分，一个是devops/gitops/dataops的环境搭建，还有公共服务组件的发布搭建，比如数据治理组件、技术组件、运维组件等。")]),v._v(" "),_("p",[v._v("这也是基于规范标准的要求，比如自动发布管理，这里做成参数型的配置，还有数据抽取组件也一样，做成脚本型和参数型的设计，使用Git统一的管理，主要是为了更好的做好记录，权限，留痕等，结合jenkins整合起来的，包括运维脚本、CICD、数据抽取等，使用人员比较少，所以在这块上的资源压力倒不大。")]),v._v(" "),_("p",[v._v("目前整个环境使用了3台服务器，主要是一台jenkins/技术组件/数据组件，主要的配置如下：")]),v._v(" "),_("ul",[_("li",[v._v("自动化服务(Jenkins): 16G内存/8C/250G磁盘")]),v._v(" "),_("li",[v._v("技术组件：16G内存/4C/80G磁盘")]),v._v(" "),_("li",[v._v("数据治理组件：32G内存/8C/1024G磁盘")])]),v._v(" "),_("p",[v._v("这主要是得益于微小团队的产品开发维护，另外我们数据仓库并不一定要求使用Hadoop套件，而且针对项目情况来进行适配选型，所以这并不是很大的压力，而且一些高峰的操作，比如备份和巡检、数据抽取等会在晚上执行。")]),v._v(" "),_("p",[v._v("在实际项目中，会根据项目的情况抽取产品部署，这主要利益于微服务架构，可拆分的能力，将耦合降到最低，比如有些可能需要的数据组件只有一两个，那就部署一两个，做好对应的适配资源即可。以降低项目成本和维护成本，还有客户成本等。")]),v._v(" "),_("p",[v._v("这个过程的管理基本上是写好脚本之后，就根据监控即可，这里集成了钉钉，主要是方便管理，这个任务大概是250多个任务，基本上都是利益于GitOps的理念，这里需要的是它的理念，然后整合起来的，过程主要是针对于Git基线，而不是需要针对于所有，从Git流程的最终结果是钉钉通知，这样以降低学习成本还有规避掉过多的人工操作。")]),v._v(" "),_("p",[v._v("这个的搭建和规范建设，大概是2个星期左右，当然，这主要得益于经验的积累，只需要做调试，如果从零开始，可能需要1-2个月左右考虑会比较合适。")]),v._v(" "),_("h3",{attrs:{id:"产品的迭代升级管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#产品的迭代升级管理"}},[v._v("#")]),v._v(" 产品的迭代升级管理")]),v._v(" "),_("blockquote",[_("p",[v._v("还有过程怎么降低产品管理成本")])]),v._v(" "),_("p",[v._v("这里类似于运营管理，这里的运营主要是指内部团队的运营，将ISV和其它部门当做客户即可。")]),v._v(" "),_("p",[v._v("这里的组件比较多，针对于微型团队来说，如果没有统一的基础设施和规范是很难的，这里主要是利益于微服务架构和容器化管理，还有中台架构思维。")]),v._v(" "),_("p",[v._v("公共和基础服务已经将大部分非业务逻辑的都做了，也抽取成公共的服务能力，比如日志、登陆、公共权限、前端埋点、数据抽取、监控等，都已经是打成基础的能力，每个服务都是可以一开始就拥有这些能力，也可拔插，主要升级组件内的逻辑，比如集成监控。")]),v._v(" "),_("p",[v._v("当然还有很多。")]),v._v(" "),_("p",[v._v("将公共组件进行沉淀，在各个产品只需要，也只能保留业务部分，而且一定不能过分的建设每个组件的公共部分，这样会导致后期的升级和版本管理的困难，这也是中小微团队的灵活性，就是因为小，在调整的时候，可以统一，每次升级会把需要调整的部分列出来，然后发给对应的组件即可。现在基本上是调整版本号即可，因为公共部分的抽取已经很好了，比如前端，后台，还有ORM层等，基本上业务组件并不需要调整哪些。")]),v._v(" "),_("p",[v._v("另一种是功能的升级，这个过程根据业务调整单独组件即可，小的功能升级会做好接口的兼容，大的单独提供出新的接口，同时加上版本号。在这部分比较担心的是稳定性，所以在工程模块上的划分，也是做了严格的限制，也主要得益于DDD架构思维，但并不是完全照搬，而是根据实际做了调整，取其优势即可，工程模块如下：")]),v._v(" "),_("p",[v._v("这里抽取了一个domain服务组件，这个服务组件一定要资深人员才能处理，其它的非核心逻辑都在gateway和provide模块里面，调用domain工程的写好的逻辑，其它的人员写前端和接口即可。")]),v._v(" "),_("p",[v._v("这么做的原因是为确保服务的稳定性，以前遇到过挺多类似的情况，初级的维护人员和经验不足的碰到和核心服务的逻辑，但是熟悉程度不够，导致了很多不稳定的因素，在这块上是做了很严格的要求限制。")]),v._v(" "),_("p",[v._v("实在不行，就重写接口，但是不会影响到核心逻辑，核心逻辑部分主要是由更高一级的人员来编写维护的，一个是编码的质量，另一个是稳定性，以确保后期的产品的质量。")]),v._v(" "),_("p",[v._v("基于上面的技术思维和管理规范，组件的升级，比如当前的国产库适配、漏洞的升级等基本上是调整核心包的版本号即可，功能的升级也是通过核心和外围接口两个概念进行区别，不需要说再花时间去深入到模块和业务等，调用接口实现。")]),v._v(" "),_("p",[v._v("提交代码之后，就是走刚刚上面提到自动化流程，等钉钉通知和容器监控状态，然后结合界面测试。")]),v._v(" "),_("h3",{attrs:{id:"项目交付实施的过程是怎么样的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目交付实施的过程是怎么样的"}},[v._v("#")]),v._v(" 项目交付实施的过程是怎么样的")]),v._v(" "),_("blockquote",[_("p",[v._v("怎么做项目交付支撑")])]),v._v(" "),_("p",[v._v("这个是数字中台价值输出体现之一，主要是偏向于跟ISV团队的整合，让ISV团队主要考虑业务逻辑的事情。这里主要提供几个能力：")]),v._v(" "),_("ul",[_("li",[v._v("产品使用培训还有技术架构方案支撑")]),v._v(" "),_("li",[v._v("过程涉及中台产品的技术架构和解决")]),v._v(" "),_("li",[v._v("需求的适配的一些功能开发或者问题处理")]),v._v(" "),_("li",[v._v("商务上的文档支撑和客户讲解")]),v._v(" "),_("li",[v._v("….")])]),v._v(" "),_("p",[v._v("通过以上为ISV团队赋能，主要的目标是项目的落地，提升ISV的能力提升，这也是数字中台的价值体现之一。")]),v._v(" "),_("p",[v._v("ISV团队要考虑的是业务，而我们主要的目标是不要让他们深入到技术、还有非业务性的内容上，同时提升出好的工具给他们。")]),v._v(" "),_("p",[v._v("这样更好的进行区分职责边界，这个其实也是个矛盾点。目前是通过代码生成器生成出业务组件，然后在这个组件里面只包含业务，其它非技术的组件交互（比如账号权限）通过Api来进行处理，有哪个API就有哪个能力，以规避掉职责不清的问题。")]),v._v(" "),_("p",[v._v("业务组与整个数字中台进行对接的是Git还有可视化的界面，并不需要它关注太多的东西，业务逻辑提交到Git之后，其它的流水线会自动走下来，然后得到对应的访问链接即可。")]),v._v(" "),_("p",[v._v("而数字中台就使用产品型的交付，根据项目情况进行服务的抽取，其它的商务不做太多的接触，只需要关注中台产品体系的内容，一个是沉淀，另一个是项目涉及到的面比较多，避免平台人员沉入到里面，而无法抽出，同时也规避掉ISV团队过度依赖平台人员，为后期的维护考虑。")]),v._v(" "),_("p",[v._v("这里也有一个特别需要注意的项，就是职责角色一定要区分，不能互相深入，比如平台人员做项目的事情，项目人员做平台的事情，这会无形中增大成本和提高项目风险，可能会导致后期的管理混乱，商务和项目上纠结不清，如果项目更多的的，会以提工单的形式来进行反馈，包括需求和问题。")]),v._v(" "),_("p",[v._v("这个过程一般是在项目前期一两个星期会有比较多的沟通，ISV后期和熟悉之后，后面的合适会比较顺利，即使是在ISV新人切入，这个过程也会顺利比较多。")]),v._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("数字中台本身是一个很大的概念，但是在过程怎么使用和抽取，还有适配团队，其实并不代表会有一个非常高的成本管理，而是根据团队来进行适配，以体验和获取到云原生时代、新技术的便捷红利，以提升团队的技术能力、竞争能力、还有新的商业模式，在数字化的时代做好准备，以适应当前行业的发展。")]),v._v(" "),_("p",[v._v("以上为在数字中台建设和管理的一些实践，希望可以给一些在往这块方向的团队一些参考。")])])}),[],!1,null,null,null);_.default=s.exports}}]);