<template>
    <aside class="lg-side">
        <div class="inbox-head">
            <h3>{{ currentView.title }}</h3>
        </div>
        <div class="top-btns" v-if="currentView.tag !== 'app-view-message'">
            <a href="#" class="btn" @click="refresh" v-if="currentView.title === 'Inbox'">
                <i class="fa fa-refresh"></i>&nbsp; Refresh
            </a>
            <button class="btn btn-danger" @click="deleteSelected" v-if="currentView.title !== 'Trash'">Delete selected</button>
        </div>
        <keep-alive>
            <component :is="currentView.tag" :data="currentView.data"></component>
        </keep-alive>
    </aside>
</template>

<script>
    import Inbox from "./Inbox.vue";
    import Sent from "./Sent.vue";
    import Important from "./Important.vue";
    import Trash from "./Trash.vue";
    import ViewMessage from "./ViewMessage.vue";
    import { eventBus } from "./main";

    export default {
        props: {
            messages: {
                type: Array,
                required: true
            }
        },
        created() {
            eventBus.$on('changeView', (data) => {
                let temp = [{
                    tag: data.tag,
                    title: data.title,
                    data: data.data || {}
                }];
                this.history = temp.concat(this.history.splice(0));
            });
        },
        data() {
            return {
                history: [
                    {
                        tag: 'app-inbox',
                        title: 'Inbox',
                        data: {
                            messages: null
                        }
                    }
                ]
            }
        },
        methods: {
            refresh() {
                eventBus.$emit('refreshMessages');
            },
            deleteSelected() {
                this.messages.forEach(message => {
                    if (message.isSelected) {message.isDeleted = true;} 
                });
                this.messages.forEach(message => {
                    message.isSelected = false; 
                });
            }
        },
        computed: {
            currentView() {
                let current = this.history[0];
                current.data.messages = this.messages;
                return current;
            },
            previousView() {
                return typeof this.history[1] !== 'undefined' ? this.history[1] : null;
            }
        },
        components: {
            appInbox: Inbox,
            appSent: Sent,
            appImportant: Important,
            appTrash: Trash,
            appViewMessage: ViewMessage,
        }
    }
</script>