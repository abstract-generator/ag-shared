#-*- coding:utf8 -*-

import wikipydia

LANG = 'ru'
SEE_ALSO = {'ru': u"См. также",
            'en': u"See also"}

class WikiPage(object):
    def __init__(self, query, lang=LANG):
        self.title, self.text = self.get_wiki(query, lang)
        self.lang = lang

    def __repr__(self):
        return self.title

    def get_wiki(self, query, lang):
        try:
            title = wikipydia.opensearch(query, language=lang)[1][0].encode('utf8')
            text = wikipydia.query_text_raw(title, language=lang)
            return title, text['text'].encode('utf8')
        except IndexError:
            pass

    def get_see_also(self):
        try:
            sections = wikipydia.get_sections(self.text)
            section = [h.strip().decode('utf8') for h in sections['headers']].index(SEE_ALSO[self.lang])
            return wikipydia.get_links( sections['contents'][section] ).values()
        except ValueError:
            return []
