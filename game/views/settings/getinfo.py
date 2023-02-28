from django.http import JsonResponse
from game.models.players.players import Player

def geinfo_acapp(request):
    player = Player.objects.all()[0]
    return JsonResponse({
        'result': "success",
        'username': player.user.username,
        'photo': player.photo,
        })

def getinfo_web(request):
    user = request.user
    if not user.is_authenticated:
        return JsonResponse({
            'result': "未登录！"
            })
    else:
        player = Player.objects.get(user = user)
        return JsonResponse({
            'result': "success",
            'username': player.user.username,
            'photo': player.photo,
            })

def getinfo(request):
    platform = request.GET.get('platform')
    if platform == "ACAPP":
        return getinfo_acapp(request)
    else:
        return getinfo_web(request)
