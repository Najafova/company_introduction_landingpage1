from .models import *
from django.core.mail import send_mail, BadHeaderError, EmailMessage
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm

# Create your views here.
def index_eng(request):
    context = {}
    context["videos"] = Video.objects.all()
    context["about_section"] = About.objects.all()
    context["project_general_section"] = ProjectGeneral.objects.all()
    context["menu"] = Menu.objects.all()
    context["footer"] = Footer.objects.all()
    context["projects"] = Projects.objects.all()
    context["team"] = Team.objects.all()
    context["mains"] = Description.objects.all()

    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST or None)
        if form.is_valid():
            fullname = form.cleaned_data['fullname']
            from_emaill = form.cleaned_data['from_emaill']
            message = form.cleaned_data['message']
            try:
                msg = EmailMessage(fullname, message, from_emaill, ['info@sumaks.com'], reply_to=[from_emaill])
                msg.send()
                # send_mail(fullname, message, from_emaill, ['gulnarnecefova1996@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('eng_home')
    context['form'] = form
    return render(request, "index1.html", context)

def handler404(request,exception):
    return render(request, '404eng.html', status=404)